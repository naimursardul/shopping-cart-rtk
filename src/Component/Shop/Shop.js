import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../feature/cart/cartSlice';
import './Shop.css';



function Shop() {
    const products = useSelector(state=> state.shop.items);
    const dispatch = useDispatch();

    

    
  return (
    <div className="shop">
        { products.map(product => 
        <div className="shop_product" key={product.id}>
            <div className="shop_product_img">
                <img src={product.img} alt="" />
            </div>
            <div className="shop_product_detail">
                <div className="shop_product_detail_title">
                    {product.name}
                </div>
                <div className="shop_product_detail_section">
                    <div className="shop_product_detail_section_price">
                        ${product.price}
                    </div>
                    <div className="shop_product_detail_section_addCart">
                        <button onClick={()=>dispatch(addCart(product))}>
                        <FontAwesomeIcon icon={faCartPlus} />
                        </button>
                    </div>
                </div>
                
            </div>
        </div>    
        ) }
    </div>
  )
}

export default Shop