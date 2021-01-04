//import React, { useContext } from 'react';
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import CartIcon from 'assets/icons/cart-icon.png'
import { Nav, Container } from "react-bootstrap";
import { connect } from 'react-redux';


const Header = (props) => {

    const cart_item_number = props.items.reduce((total, product) => total + product.quantity, 0);

    return ( 
        <nav class="navbar navbar-dark bg-dark justify-content-end">
            <Link to='/'>Tienda</Link>
            <Link to='/cart'>
                <img src={CartIcon} alt="CartIcon" width="20" />
                Carrito ({cart_item_number})
            </Link>
        </nav>
     );
}

function mapStateToProps(state, props) {
    return {
      items: state.cart.items
    };
}

export default connect(mapStateToProps, null)(Header);
