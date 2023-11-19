import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { totalAmount } from '../../feature/cart/cartSlice';
import './Navbar.css';



function Navbar() {
    const { cart, totalQuantity }= useSelector(state=> state.shop);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(totalAmount());
    }, [cart, dispatch]);

  return (
    <div className="navbar">
        <div className="navbar_container">
            <div className="navbar_container_webName">
                <Link >Shop With Us</Link>
            </div>
            <div className="navbar_container_navLink">
                <Link to='/'>Home</Link>
                <Link to='/'>Blog</Link>
                <Link to='/'>Riviews</Link>
                <Link to='/'>Contact Us</Link>
            </div>
            <div className="navbar_container_cartOption">
                <Link to='/cart'>
                    <button>
                    <FontAwesomeIcon icon={faCartShopping} />({totalQuantity})
                    </button></Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar;