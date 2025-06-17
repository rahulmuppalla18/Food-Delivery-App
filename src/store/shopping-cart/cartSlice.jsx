import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0
}

let cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            let newItem = action.payload;
            let existingItem = state
                .cartItems
                .find(item => item.id === newItem.id);
            state.totalQuantity++;

            if (!existingItem) {
                state
                    .cartItems
                    .push({
                        id: newItem.id,
                        title: newItem.title,
                        image01: newItem.image01,
                        price: newItem.price,
                        quantity: 1,
                        totalPrice: newItem.price
                    });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
            }

            state.totalAmount = state
                .cartItems
                .reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0)
        },

        removeItem(state, action) {
            let id = action.payload;
            let existingItem = state
                .cartItems
                .find(item => item.id === id);
            state.totalQuantity--;

            if (existingItem.quantity === 1) {
                state.cartItems = state
                    .cartItems
                    .filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price)
            }

            state.totalAmount = state
                .cartItems
                .reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0);
        },

        deleteItem(state, action) {
            let id = action.payload;
            let existingItem = state
                .cartItems
                .find(item => item.id === id);

            state.totalQuantity -= existingItem.quantity;

            state.cartItems = state
                .cartItems
                .filter((item) => item.id !== id);

            state.totalAmount = state
                .cartItems
                .reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0);

        },

        
    }
})

export let cartActions = cartSlice.actions;
export default cartSlice;