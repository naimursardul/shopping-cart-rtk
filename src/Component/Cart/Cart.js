import {
  faMinus,
  faPlus,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, removeFromCart } from "../../feature/cart/cartSlice";
import './Cart.css';




function Cart() {
  const { totalQuantity, cart }= useSelector(state=> state.shop);
  const subTotal = useSelector(state=>state.shop.totalPrice);
  const dispatch = useDispatch();


  
  return (
    <div className='cart'>
      <div className="cart_container">
        { (cart[0]) ? cart.map(product => 
        <div className="cart_container_product" key={product.id}>
        <div className="cart_container_product_img">
          <img src={product.img} alt="" />
        </div>
        <div className="cart_container_product_detail">
          <div className="cart_container_product_detail_title">{product.name}</div>
          <div className="cart_container_product_detail_price">${product.price}</div>
          <div className="cart_container_product_detail_total">Total: ${product.price * product.quantity}</div>
        </div>
        <div className="cart_container_product_count">
          <div className="plus_icon">
            <FontAwesomeIcon icon={faPlus} onClick={()=>dispatch(increment(product))}/>
          </div>
          <span>{product.quantity}</span>
          <div className="minus_icon">
            <FontAwesomeIcon icon={faMinus} onClick={()=>dispatch(decrement(product))} />
          </div>
        </div>
        <div className="cart_container_product_delete" onClick={()=> dispatch(removeFromCart(product))}>
          <FontAwesomeIcon icon={ faTrash } /> 
        </div>
      </div>
          ) :  
        <h2>
          No item added
        </h2>
          }
      </div>
      <div className="cart_calculation">
        <div className="cart_calculation_totalItems">
          Total Items: {totalQuantity}
        </div>
        <div className="cart_calculation_subTotal">
          Sub-Total: ${subTotal}
        </div>
        <div className="cart_calculation_vat">
          Vat: 2%
        </div>
        <div className="cart_calculation_total">
          Total: ${subTotal + subTotal * .2}
        </div>
      </div>
    </div>
  )
}

export default Cart;

// @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons
