import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../features/productSlice";
import { userReducer } from "../features/userSlice";
import { cartReducer } from "../features/cartSlice";
import { orderReducer } from "../features/orderSlice";
import { checkoutReducer } from "../features/checkoutSlice";
import { commentReducer } from "../features/commentSlice";

export const store = configureStore({
    reducer: {
        product: productReducer,
        user: userReducer,
        cart: cartReducer,
        order: orderReducer,
        checkout: checkoutReducer,
        comment: commentReducer,
    },
});
