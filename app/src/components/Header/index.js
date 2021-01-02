//import React, { useContext } from 'react';
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import CartIcon from 'assets/icons/107831.png'
//import { CartContext } from '../../contexts/CartContext';

const Header = () => {

    //const {itemCount} = useContext(CartContext);

    return ( 
        <header>
            <Link to='/'>Tienda</Link>
            <Link to='/cart'><img src={CartIcon} alt="CartIcon" width="20" /></Link>
        </header>
     );
}
 
export default Header;