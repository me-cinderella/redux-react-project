//import React, { useContext } from 'react';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import CartIcon from 'assets/icons/cart-icon.png'
import { connect } from 'react-redux';
import MiniCart from 'components/Cart/MiniCart';

const Header = (props) => {

    let [modalShow, setModalShow] = useState(false);
    const cart_item_number = props.items.reduce((total, product) => total + product.quantity, 0);

    return ( 
        <nav class="navbar navbar-dark bg-dark justify-content-end">
            <Link to='/'>Tienda</Link>
            <Link onClick={() => setModalShow(true)}>
                <img src={CartIcon} alt="CartIcon" width="20" />
                Carrito ({cart_item_number})
            </Link>
            <MiniCart show={modalShow} onHide={() => setModalShow(false)} />
        </nav>
     );
}

function mapStateToProps(state, props) {
    return {
      items: state.cart.items
    };
}

export default connect(mapStateToProps, null)(Header);
