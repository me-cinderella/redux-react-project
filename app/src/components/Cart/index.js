import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { checkout, clear } from 'actions/cartActions';
import ItemList from './ItemList';
import { Row, Col, Card, Container } from "react-bootstrap";

class Cart extends Component {
  render() {
    return (
      <Container>
            <Row className="text-center mt-5">
                <h1>Carito de compra</h1>
            </Row>

            <Row className="justify-content-center">
                <Col xs={6}>
                    {
                        this.props.items.length > 0 && this.props.checkout===false ?
                        <ItemList/> :
                        <div className="p-3 text-center text-muted">
                            El carrito esta vacio
                        </div>
                    }

                    { this.props.checkout===true && 
                        <div className="p-3 text-center text-success">
                            <p>Checkout realizado!</p>
                            <Link to="/" className="btn btn-outline-success btn-sm">Seguir comprando</Link>
                        </div>
                    }
                </Col>
                {
                    this.props.items.length > 0 && 
                    <Col xs={5} className='m-1'>
                        <Card className="card card-body m-1">
                            <h3 className="mb-1">Total a pagar: ${this.props.total} CLP</h3>
                            <hr className="my-4"/>
                            <div className="text-center">
                                <button type="button" className="btn btn-primary btn-sm m-1" onClick={() => this.props.checkout()}>CHECKOUT</button>
                                <button type="button" className="btn btn-light btn-sm m-1" onClick={() => this.props.clear()}>Limpiar</button>
                                <Link to="/" className="btn btn-light btn-sm">Seguir comprando</Link>
                            </div>

                        </Card>
                    </Col>
                }
                
            </Row>
    </Container>
    );
  }
}

function mapStateToProps(state, props) {
    return {
      items: state.cart.items,
      total: state.cart.total,
      checkout: state.cart.checkout
    };
}

function mapDispatchToProps(dispatch) {
    return {
        clear: () => dispatch(clear()),
        checkout: () => dispatch(checkout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);