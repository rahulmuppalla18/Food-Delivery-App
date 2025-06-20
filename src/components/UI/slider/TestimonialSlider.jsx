import React from 'react'
import Slider from "react-slick";
import ava01 from "./../../../assets/images/ava-1.jpg";
import ava02 from "./../../../assets/images/ava-2.jpg";
import ava03 from "./../../../assets/images/ava-3.jpg";
import "./slider.css";

const TestimonialSlider = () => {
    let settings = {
        dots: true,
        autoplayy: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <div>
                <p className="review__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus porro neque
                    dignissimos dolores sequi vel iste ipsam laboriosam et maxime amet enim, ipsum
                    libero ex minus beatae repudiandae unde pariatur.
                </p>
                <div className="d-flex align-items-center gap-3 slider__content">
                    <img src={ava01} alt="avatar" className=""/>
                    <h6>Jhon Doe</h6>
                </div>
            </div>
            <div>
                <p className="review__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus porro neque
                    dignissimos dolores sequi vel iste ipsam laboriosam et maxime amet enim, ipsum
                    libero ex minus beatae repudiandae unde pariatur.
                </p>
                <div className="slider__content d-flex align-items-center gap-3">
                    <img src={ava02} alt="avatar" className=""/>
                    <h6>Mitchell Marsh</h6>
                </div>
            </div>
            <div>
                <p className="review__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus porro neque
                    dignissimos dolores sequi vel iste ipsam laboriosam et maxime amet enim, ipsum
                    libero ex minus beatae repudiandae unde pariatur.
                </p>
                <div className="slider__content d-flex align-items-center gap-3">
                    <img src={ava03} alt="avatar" className=""/>
                    <h6>Steven Crock</h6>
                </div>
            </div>
        </Slider>
    );
}

export default TestimonialSlider