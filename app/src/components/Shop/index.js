import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from 'actions/cartActions';
import { Row, Col, Card, Container } from "react-bootstrap";

class Products extends Component {

  render() {

    const productList = this.props.products.map( (item,index)  => {
      return (

      <Col xs={4}>
        <Card key={index} className="m-2 p-2">
          <Row>
              <Col xs={6}>

              <img 
              src={item.image} 
              alt={item.name} 
              className="product-image" />
              </Col>
            <Col xs={6} className="d-flex flex-column">
              <h4>{item.name}</h4>
              <p className="type-label">{item.type}</p>
              <p className="name-label mt-auto"> CLP${item.price}</p>
              <button className="btn btn-primary btn-sm mt-auto"
                      onClick={() => this.props.addToCart(item)}>
                      Agregar al Carro 
              </button> 
            </Col>
          </Row>
        </Card>
      </Col>)
    });

    return (
      <Container>
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
