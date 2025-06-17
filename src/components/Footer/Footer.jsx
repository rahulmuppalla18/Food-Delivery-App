import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "./../../assets/images/res-logo.png";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium autem hic praesentium at
              </p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time_list">
              <ListGroupItem className=" deliver__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className="deliver__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off Day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time_list">
              <ListGroupItem className="deliver__time-item border-0 ps-0">
                <span>Location: Vijayawada, India</span>
              </ListGroupItem>

              <ListGroupItem className=" deliver__time-item border-0 ps-0">
                <span>Phone: 9014165649</span>
              </ListGroupItem>

              <ListGroupItem className="deliver__time-item border-0 ps-0">
                <span>Email: rahulmuppalla019@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe to our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col lg="6" md="6">
            <p className='copyright__text'>
              Copyright - 2025, website made by Muppalla Rahul. All Rights
              Reserved
            </p>
          </Col>
          <Col lg="6" md="6" className='socials'>
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className='m-0'>Follow: </p>
              <span>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <i className="ri-facebook-line"></i>
                </a>
              </span>
              <span>
                <a href="https://github.com/rahulmuppalla18" target="_blank" rel="noopener noreferrer">
                  <i className="ri-github-line"></i>
                </a>  
              </span>
              <span>
                <a href="https://www.youtube.com/@rahulmuppalla1618/" target="_blank" rel="noopener noreferrer">
                  <i className="ri-youtube-line"></i>
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/rahul-muppalla-ba655128a/" target="_blank" rel="noopener noreferrer">
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;