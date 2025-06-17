import React from 'react'
import CommonSection from "./../components/UI/common-section/CommonSection";
import Helmet from "./../components/Helmet/Helmet";
import "./../styles/cart-page.css";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from 'reactstrap';
import { cartActions } from "./../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {

  let cartItems  = useSelector(state => state.cart.cartItems);
  let totalAmount = useSelector(state => state.cart.totalAmount);
  let dispatch = useDispatch();
  
  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5>Your cart is empty</h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr {...item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}

              <div className='mt-4'>
                <h6>
                  Subtotal: $<span className='cart__subtotal'>{totalAmount}</span>
                </h6>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className="cart__page-btn">
                  <button className="addToCart__btn me-4">
                    <Link to="/foods">Continue Shopping</Link>
                  </button>
                  <button className="addToCart__btn">
                    <Link to="/checkout">Proceed to checkout</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

let Tr = ({id, image01, title, price, quantity}) => {
  let dispatch = useDispatch();
  return (
    <tr>
      <td className='text-center cart__img-box'><img src={image01} alt="" className=''/></td>
      <td className='text-center'>{title}</td>
      <td className='text-center'>${price}</td>
      <td className='text-center'>{quantity}px</td>
      <td className='text-center cart__item-delete'>
        <i className="ri-delete-bin-line" onClick={() => dispatch(cartActions.deleteItem(id))}></i>
      </td>
    </tr>
  )
}

export default Cart