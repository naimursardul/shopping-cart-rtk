import { createSlice } from "@reduxjs/toolkit";
import products from "../../Component/product";


const initialState = { 
    items: products,
    cart: [],
    totalQuantity: 0,
    totalPrice: 0,
    value: 0
 };

export const shopSlice = createSlice({
    name: "shopSlice",
    initialState,
    reducers: {
        addCart:(state, action) =>{
            const index = state.cart.findIndex(product=>product.id === action.payload.id);
            console.log(index)
            if(index < 0){
                state.cart.push(action.payload);
            }else{
                state.cart[index].quantity += 1;
            }
        },
        increment: (state, action) => {
            const index = state.cart.findIndex((product)=>product.id === action.payload.id);
            state.cart[index].quantity += 1; 
        },
        decrement: (state, action) => {
            const index = state.cart.findIndex(product=>product.id === action.payload.id);
            if(state.cart[index].quantity > 0){
                state.cart[index].quantity -= 1; 
            } else{
                state.cart[index].quantity = 0;
            }
        },
        totalAmount: (state) =>{
            let sum = 0;
            let quantity = 0;
            state.cart.forEach(product => {
                sum += product.price * product.quantity;
                quantity += product.quantity;
            });
            state.totalPrice = sum;
            state.totalQuantity = quantity;
        },
        removeFromCart: (state, action) =>{
            const index = state.cart.findIndex(product=>product.id === action.payload.id);
            state.cart.splice(index, 1);
        }
    }
})

export const { increment, decrement, addCart, totalAmount, removeFromCart } = shopSlice.actions;

export default shopSlice.reducer;