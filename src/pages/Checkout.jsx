import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet';
import CommonSection from "./../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import "./../styles/checkout.css";

const Checkout = () => {

  let [enterName, setEnterName] = useState("");
  let [enterEmail, setEnterEmail] = useState("");
  let [enterNumber, setEnterNumber] = useState("");
  let [enterCountry, setEnterCountry] = useState("");
  let [enterCity, setEnterCity] = useState("");
  let [PostalCode, setPostalCode] = useState("");

  let cartTotalAmount = useSelector(state => state.cart.totalAmount);
  let shippingCost = 30;

  let totalAmount = cartTotalAmount + shippingCost;

  let shippingInfo = [];

  let handleSubmit = (e) => {
    e.preventDefault();
    let userShippingAddress = {
      name: enterName,
      email: enterEmail,
      number: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: PostalCode,
    }
    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />

      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6>Shipping Address</h6>
              <form className="checkout__form" onSubmit={handleSubmit}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={enterName}
                    onChange={(e) => setEnterName(e.target.value)}
                    required
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={enterEmail}
                    onChange={(e) => setEnterEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Phone number"
                    value={enterNumber}
                    onChange={(e) => setEnterNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Country"
                    value={enterCountry}
                    onChange={(e) => setEnterCountry(e.target.value)}
                    required
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="City"
                    value={enterCity}
                    onChange={(e) => setEnterCity(e.target.value)}
                    required
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Postal Code"
                    value={PostalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    required
                  />
                </div>
                <button type='submit' className="addToCart__btn">
                  Payment
                </button>
              </form>
            </Col>
            <Col md="6" lg="4">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>${cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex mb-5 align-items-center justify-content-between">
                  Shipping: <span>${shippingCost}</span>
                </h6>
                <div className="checkout__total ">
                  <h5 className="d-flex mt-2 align-items-center justify-content-between">
                    Total: <span>${totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Checkout