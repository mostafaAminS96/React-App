import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: 'Product',
    initialState: {
        cart : [],

    },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload)
            // console.log(action.payload);
        },
        deleteFromCart : (state, action) => {
            const item = state.cart.findIndex(product => product.id === action.payload.data.id)
            state.cart.splice(item, 1)
            // console.log(action.payload.data);
            // console.log(item);
        }
    }
})


export const { addToCart, deleteFromCart } = cartSlice.actions

export default cartSlice.reducer