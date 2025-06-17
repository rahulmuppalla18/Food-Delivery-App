import React, { useState, useEffect } from 'react'
import products from "./../assets/fake-data/products";
import Helmet from "./../components/Helmet/Helmet";
import { useParams } from 'react-router-dom';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container, Col, Row } from "reactstrap"; 
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/shopping-cart/cartSlice';

import proudctImg01 from "./../assets/images/product_2.1.jpg";
import proudctImg02 from "./../assets/images/product_2.2.jpg"
import proudctImg03 from "./../assets/images/product_2.3.jpg";

import "./../styles/FoodDetails.css";
import ProductCard from '../components/UI/product-card/ProductCard';

const FoodDetails = () => {

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [reviewMsg, setReviewMsg] = useState("");

  let dispatch = useDispatch();

  let [tab, setTab] = useState("desc");

  let {id} = useParams();

  let product = products.find(product => product.id === id);

  let [previewImg, setPreviewImg] = useState(product.image01);

  let {title, price, category, desc, image01} = product;
  
  let relatedProducts = products.filter(product => product.category === category);

  useEffect(() => {
    setPreviewImg(product.image01)
  },[product]);

  useEffect(() => {
    window.scrollTo(0,0);
  },[product]);

  let addItem = () => {
    dispatch(cartActions.addItem({
      id,
      title,
      image01,
      price
    }))
  };

  let submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <Helmet title="Product-details">
      <CommonSection title={product.title} />

      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images">
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image01)}
                >
                  <img src={product.image01} alt="" className="w-50" />
                </div>
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image02)}
                >
                  <img src={product.image02} alt="" className="w-50" />
                </div>
                <div
                  className="img__item"
                  onClick={() => setPreviewImg(product.image03)}
                >
                  <img src={product.image03} alt="" className="w-50" />
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={previewImg} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{title}</h2>
                <span className="product__price">
                  Price: <span>${price}</span>
                </span>
                <p className="category mb-5">
                  Category: <span>{category}</span>
                </p>
                <button className="addToCart__btn" onClick={addItem}>
                  Add to cart
                </button>
              </div>
            </Col>

            <Col lg="12">
              <div className="tabs mb-4 d-flex align-items-center gap-5 py-3">
                <h6
                  className={tab === "desc" && "tab__active"}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  onClick={() => setTab("rev")}
                  className={tab === "rev" && "tab__active"}
                >
                  Review
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tab__form mb-3">
                  <div className="review">
                    <p className="user__name mb-0">John Doe</p>
                    <p className="user__email">rahulmuppallla019@gmail.com</p>
                    <p className="feedback__text">great product</p>
                  </div>
                  <div className="review">
                    <p className="user__name mb-0">John Doe</p>
                    <p className="user__email">rahulmuppallla019@gmail.com</p>
                    <p className="feedback__text">great product</p>
                  </div>
                  <div className="review">
                    <p className="user__name mb-0">John Doe</p>
                    <p className="user__email">rahulmuppallla019@gmail.com</p>
                    <p className="feedback__text">great product</p>
                  </div>
                  <form className="form" onSubmit={submitHandler}>
                    <div className="form__group">
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className=""
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="form__group">
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className=""
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="form__group">
                      <textarea
                        value={reviewMsg}
                        onChange={(e) => setReviewMsg(e.target.value)}
                        rows={8}
                        type="text"
                        className=""
                        placeholder="Enter your review"
                        required
                      />
                    </div>
                    <button className="addToCart__btn" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </Col>

            <Col lg="12" className="mb-4 mt-4">
              <h2 className="related__Product-title">You might also like</h2>
            </Col>

            {relatedProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="12" key={item.id} className="mt-5 ">
                <ProductCard product={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default FoodDetails