import React, {useRef, useEffect} from "react";

import {Container} from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import {NavLink, Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";

import {cartUIActions} from "./../../store/shopping-cart/cartUISlice";

import "./Header.css";

const nav__links = [
    {
        display: "Home",
        path: "/home"
    },{
        display: "Features",
        path: "/features"
    }, {
        display: "Foods",
        path: "/foods"
    }, {
        display: "Cart",
        path: "/cart"
    }
];

const Header = () => {
    const menuRef = useRef(null);
    const headerRef = useRef(null);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    let isOpened = useSelector(state => state.cartUI.cartIsVisible)
    let dispatch = useDispatch();
    // const dispatch = useDispatch(); const toggleMenu = () => menuRef     .current
    //     .classList     .toggle("show__menu"); const toggleCart = () => {
    // dispatch(cartUiActions.toggle()); };

    let toggleMenu = () => menuRef
        .current
        .classList
        .toggle("show__menu");

    let toggleCart = () => {
        dispatch(cartUIActions.toggle());
    }

    useEffect(() => {
        let func = () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef
                    .current
                    .classList
                    .add("header__shrink");
            } else {
                headerRef
                    .current
                    .classList
                    .remove("header__shrink");
            }
        };
        window.addEventListener("scroll", func);

        return () => window.removeEventListener("scroll", func);
    }, []);

    return (
        <header className="header" ref={headerRef}>
            <Container>
                <div className="nav__wrapper d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                        <h5>Tasty Treat</h5>
                    </div>

                    {/* ======= menu ======= */}
                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <div className="menu d-flex align-items-center gap-5">
                            {nav__links.map((item, index) => (
                                <NavLink
                                    to={item.path}
                                    key={index}
                                    className={(navClass) => navClass.isActive
                                    ? "active__menu"
                                    : ""}>
                                    {item.display}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    {/* ======== nav right icons ========= */}
                    <div className="nav__right d-flex align-items-center gap-4">
                        <span className="cart__icon" onClick={toggleCart}>
                            <i class="ri-shopping-basket-line"></i>
                            <span className="cart__badge">{totalQuantity}</span>
                        </span>

                        <span className="user">
                            <Link to="/login">
                                <i class="ri-user-line"></i>
                            </Link>
                        </span>

                        <span className="mobile__menu" onClick={toggleMenu}>
                            <i class="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;