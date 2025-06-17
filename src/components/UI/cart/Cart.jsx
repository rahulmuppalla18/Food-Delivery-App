import React from 'react';
import {ListGroup} from "reactstrap";
import {Link} from "react-router-dom";
import "./CartItem";
import "./../../../styles/shopping-cart.css";
import CartItem from './CartItem';
import {cartUIActions} from '../../../store/shopping-cart/cartUISlice';
import {useDispatch, useSelector} from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';

const Cart = () => {
    let disptach = useDispatch();
    let products = useSelector(state => state.cart.cartItems);
    let totalAmount = useSelector(state => state.cart.totalAmount);

    let close = () => {
        disptach(cartUIActions.toggle());
    }

    
    return (
        <div className="cart__container">
            <ListGroup className="cart">
                <div className="cart__close" onClick={close}>
                    <span>
                        <i class="ri-close-fill"></i>
                    </span>
                </div>
                <div className="cart__item-list">
                    {products.length === 0
                        ? (
                            <h6 className="text-center mt-5">No items added to the cart</h6>
                        )
                        : (products.map((product,index) => <CartItem key={index} {...product}/>))}
                </div>
                <div className="cart__bottom d-flex align-items-center justify-content-between">
                    <h6>
                        Subtotal : <span>${totalAmount}</span>
                    </h6>
                    <button>
                        <Link to="/checkout">Checkout</Link>
                    </button>
                </div>
            </ListGroup>
        </div>
    );
}

export default Cart