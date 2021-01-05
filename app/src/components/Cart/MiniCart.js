import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Button, Modal, Col, Row, Container } from "react-bootstrap";

function MiniCart(props) {
    return (
        <Modal {...props}>
        <Modal.Header closeButton>
            <Modal.Title>Carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
            <Container>
            {props.items.length > 0 ?
                props.items.map(item => {
                    return(
                        <Row>
                            <Col xs={10} md={8} className="align-left">
                                <h5>{item.name} - {item.type}</h5>
                            </Col>
                            <Col xs={2} className="align-right">
                                <p>${item.price}</p>
                            </Col>
                        </Row>
                    )
                }) :
                <div className="p-3 text-center text-muted">
                    El carrito esta vacio
                </div>
            }
            </Container>
        </Modal.Body>
        <Modal.Footer>
            <Link onClick={props.onHide} to="/cart" className="btn btn-primary btn-sm">Checkout</Link>
            <Button className="btn btn-primary btn-sm" onClick={props.onHide}>Seguir comprando</Button>
        </Modal.Footer>
        </Modal>
    );
}

function mapStateToProps(state, props) {
    return {
      items: state.cart.items
    };
}

export default connect(mapStateToProps, null)(MiniCart);
