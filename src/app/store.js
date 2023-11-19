import { configureStore } from '@reduxjs/toolkit';
import shopSlice from '../feature/cart/cartSlice';



const store = configureStore({
    reducer: { shop: shopSlice }
})

export default store;