import { createSlice } from "@reduxjs/toolkit";

let cartUISlice = createSlice({
    name: "cartUI",
    initialState: {cartIsVisible: false},

    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
});

export default cartUISlice.reducer;
export let cartUIActions =  cartUISlice.actions