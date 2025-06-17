import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import cartUIReducer from "./shopping-cart/cartUISlice";

let store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        cartUI: cartUIReducer,
    },
});

export default store;