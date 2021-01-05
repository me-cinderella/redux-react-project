import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from 'actions/cartActions';
import { Row, Col, Card, Container } from "react-bootstrap";

class Products extends Component {

  render() {

    const productList = this.props.products.map( (item,index)  => {
      return (
      <Col md={4} xs={12}>
        <Card key={index} className="m-2 p-2">
          <Row className="shop-product-card align-items-center">
              <Col md={6} xs={12}>
                <img 
                src={item.image} 
                alt={item.name} 
                className="product-image" />
              </Col>
            <Col md={6} xs={12} className="d-flex flex-column">
              <h3 className="align-top">{item.name}</h3>
              <p className="align-top">{item.type}</p>
              <h4 className="align-bottom">${item.price} CLP</h4>
              <button className="btn btn-primary btn-sm align-bottom"
                onClick={() => this.props.addToCart(item)}>
                Agregar al Carro 
              </button> 
            </Col>
          </Row>
        </Card>
      </Col>
      )
    });

    return (
      <Container>
        <Row className="text-center mt-5 mb-5">
            <h1>Amiibos disponibles</h1>
        </Row>
        <Row>
          { productList }
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        products: state.fetch.products,
        error: state.fetch.error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: item => dispatch(addToCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
