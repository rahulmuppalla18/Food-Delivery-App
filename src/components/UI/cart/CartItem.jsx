import React from 'react'
import {useDispatch} from 'react-redux';
import {ListGroupItem} from "reactstrap";
import {cartActions} from '../../../store/shopping-cart/cartSlice';
import "./../../../styles/cartItem.css";

const CartItem = ({
    id,
    title,
    price,
    quantity,
    image01,
    totalPrice
}) => {
    let dispatch = useDispatch();
    let increment = () => {
        dispatch(cartActions.addItem({id, title, price, image01}));
    };
    let decrement = () => {
        dispatch(cartActions.removeItem(id));
    }

    let deleteItem = () => {
        dispatch(cartActions.deleteItem(id));
    }
    
    return (
        <ListGroupItem className="border-0 cart__item">
            <div className="cart__item-info d-flex gap-2">
                <img src={image01} alt="" className=""/>

                <div
                    className="cart__product-info d-flex align-items-center justify-content-between flex-grow-1">
                    <div>
                        <h6 className="cart__product-title">{title}</h6>
                        <p className="d-flex align-items-center  gap-5 cart__product-price">
                            {quantity}x
                            <span>${totalPrice}</span>
                        </p>
                        <div
                            className="d-flex align-items-center justify-content-between gap-3 increase__decrease-btn">
                            <span className='increase__btn' onClick={increment}>
                                <i class="ri-add-line"></i>
                            </span>
                            <span className='quantity'>{quantity}</span>
                            <span className='decrease__btn' onClick={decrement}>
                                <i class="ri-subtract-line"></i>
                            </span>
                        </div>
                    </div>
                    <span className="delete__btn" onClick={deleteItem}>
                        <i className="ri-close-line"></i>
                    </span>
                </div>
            </div>
        </ListGroupItem>
    );
}

export default CartItem