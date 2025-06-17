import React, { useState, useEffect } from 'react';

import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "./../assets/images/hero.png";
import featureImg01 from "./../assets/images/service-01.png";
import featureImg02 from "./../assets/images/service-02.png";
import featureImg03 from "./../assets/images/service-03.png";

import products from "./../assets/fake-data/products";

import foodCategoryImg01 from "./../assets/images/hamburger.png";
import foodCategoryImg02 from "./../assets/images/pizza.png";
import foodCategoryImg03 from "./../assets/images/bread.png";

import WhyImg from "./../assets/images/location.png";

import ProductCard from '../components/UI/product-card/ProductCard';

import "./../styles/hero-section.css";
import { Link } from 'react-router-dom';

import Category from "../components/UI/category/Category";

import "./../styles/Home.css";

import networkImg from "./../assets/images/network.png";

import TestimonialSlider from "./../components/UI/slider/TestimonialSlider";

let featureData = [
  {
    title: "Fast Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, cumque.",
  },
  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, cumque.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, cumque.",
  },
];

const Home = () => {

  let [category, setCategory] = useState("All");
  let [allProducts, setAllProducts] = useState(products);
  
  let [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    let filteredPizza = products.filter(product => product.category === "Pizza");
    let slicePizza = filteredPizza.slice(0,4);
    setHotPizza(slicePizza);
  },[])

  useEffect(() => {
    if(category === "All") {
      setAllProducts(products);
    } else {
      setAllProducts(
        products.filter((product) => product.category === category)
      );
    }
    console.log(category)
    console.log(allProducts)
  }, [category]);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row className='hero'>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> just wait <br /> food at
                  <span> your door</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  cum reprehenderit quos, facilis corporis saepe.
                </p>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex justify-content-between align-items-center">
                    Order now <i className="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/food">See all foods</Link>
                  </button>
                </div>

                <div className="hero__service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>
                    No shipping charge
                  </p>

                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-shield-check-line"></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <img src={heroImg} alt="hero-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      { <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                We will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde,
                ullam?
              </p>
              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, maiores.
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6"  key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p className="">{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section> }

      <section className="pb-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="food__category d-flex justify-content-center align-items-center">
                <button
                  className={`${
                    category === "All" ? "foodBtnActive all__btn" : "all__btn"
                  }`}
                  onClick={() => setCategory("All")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Burger" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("Burger")}
                >
                  <img src={foodCategoryImg01} alt="burger" />
                  Burger
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Pizza" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("Pizza")}
                >
                  <img src={foodCategoryImg02} alt="pizza" />
                  Pizza
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Bread" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("Bread")}
                >
                  <img src={foodCategoryImg03} alt="bread" />
                  Bread
                </button>
              </div>
            </Col>

            {allProducts.map((product) => (
              <Col lg="3" md="4" sm="6" xs="12" key={product.id} className="mt-5">
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Row className="align-items-center">
          <Col md="6" lg="6">
            <img src={WhyImg} alt="why-tasty-treat" className="w-100" />
          </Col>

          <Col md="6" lg="6">
            <div className="why__tasty-treat">
              <h2 className="tasty__treat-title mb-4">
                Why <span>Tasty Treat?</span>
              </h2>
              <p className="tasty__treat-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                nam molestias. Praesentium tempora, temporibus velit, tempore
                accusamus possimus expedita unde exercitationem officiis amet
                vel. Totam molestiae minus nulla doloribus! Quod?
              </p>
            </div>
            <ListGroup className="listgroup mt-4">
              <ListGroupItem className="border-0 ps-0">
                <p className="choose__use-title d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Fresh and tasty
                  foods
                </p>
                <p className="choose__use-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate, necessitatibus!
                </p>
              </ListGroupItem>
              <ListGroupItem className="border-0 ps-0">
                <p className="choose__use-title d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Quality support
                </p>
                <p className="choose__use-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate, necessitatibus!
                </p>
              </ListGroupItem>
              <ListGroupItem className="border-0 ps-0">
                <p className="choose__use-title d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Order from any
                  location
                </p>
                <p className="choose__use-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate, necessitatibus!
                </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </section>

      <section className="">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>Hot Pizza</h2>
            </Col>
            {hotPizza.map((item) => (
              <Col lg="3" md="4" key={item.id}>
                <ProductCard product={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial mb-5">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className='testimonial__title mb-4'>
                  What our <span>Cutomers</span> are saying
                </h2>
                <p className='testimonial__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nesciunt a unde consectetur quam dicta aperiam, quisquam laudantium ipsam esse!</p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Home