import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Cart from '../UI/cart/Cart';
import Routes from "./../../routes/Routers";
import { useSelector } from 'react-redux';

const Layout = () => {
  let showCart = useSelector(state => state.cartUI.cartIsVisible)
  return (
    <div>
      <Header />
      {showCart && <Cart />}
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default Layout