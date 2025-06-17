import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import Home from "./../pages/Home";
import AllFood from "./../pages/AllFood";
import FoodDetails from "./../pages/FoodDetails";
import Cart from "./../pages/Cart";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import Checkout from "./../pages/Checkout";
import Features from "./../pages/Features";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={< Navigate to = "/home" />}/>
            <Route path="/home" element={< Home />}/>
            <Route path="/foods" element={< AllFood />}/>
            <Route path="/foods/:id" element={< FoodDetails />}/>
            <Route path="/cart" element={< Cart />}/>
            <Route path="/checkout" element={< Checkout />}/>
            <Route path="/login" element={< Login />}/>
            <Route path="/register" element={< Register />}/>
            <Route path="/features" element={< Features />}/> 
        </Routes>
    );
}

export default Routers