import React from 'react';
import { connect } from 'react-redux';
import { increaseItemInCart, decreaseItemInCart, removeFromCart } from 'actions/cartActions';
import { Row, Col, Card, Container } from "react-bootstrap";

const ItemList = (props) => {
    return ( 
        <Container>
                {props.items.map(item => {
                    return(
                        <Card className="m-2">
                            <Row className="m-2">
                                <Col xs={2} className="align-self-center">
                                    <img
                                    alt={item.name}
                                    style={{margin: "0 auto", maxHeight: "50px"}} 
                                    src={item.image} />
                                </Col>
                                <Col xs={10}>
                                    <Row>
                                <h4 className="m-2">{item.name}</h4></Row>
                                <Row>
            
                                <Col xs={6}>
                                    <p className="price-label m-0">Precio: {item.price} CPL </p>
                                    <p className="qty-label m-0">Cantidad: {item.quantity}</p>
                                </Col>
                                <Col xs={6} className="align-self-center">
                                    <button 
                                    onClick={() => props.increaseItemInCart(item)}
                                    className="btn btn-primary btn-sm m-1">
                                        +
                                    </button>
                                    <button
                                    onClick={() => props.decreaseItemInCart(item)}
                                    className="btn btn-primary btn-sm m-1">
                                        -
                                    </button>
                                    <button
                                    onClick={() => props.removeFromCart(item)}
                                    className="btn btn-primary btn-sm m-1">
                                        borrar
                                    </button>
                                </Col>
                                </Row>
                                </Col>
                            </Row>
                        </Card>  
                    )
                })
            }
        </Container>
     );
}
 

function mapStateToProps(state, props) {
    return {
      items: state.cart.items
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: item => dispatch(removeFromCart(item)),
        increaseItemInCart: item => dispatch(increaseItemInCart(item)),
        decreaseItemInCart: item => dispatch(decreaseItemInCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);