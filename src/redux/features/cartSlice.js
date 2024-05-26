import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

// Khai báo key để lưu trữ dữ liệu giỏ hàng trong local storage
const KEY_CARTS_LIST = "key_carts_list";

// Khởi tạo trạng thái ban đầu của giỏ hàng
const initialState = {
  carts: JSON.parse(localStorage.getItem(KEY_CARTS_LIST)) || [],
};

// Tạo một slice để quản lý trạng thái của giỏ hàng
const cartSlice = createSlice({
  name: "carts",
  initialState: initialState,
  reducers: {
    // Hành động để thêm sản phẩm vào giỏ hàng
    actAddProductToCarts: (state, action) => {
      const product = action.payload;
      const existedItemIndex = state.carts.findIndex(
        (cart) => cart.id === product.id
      );
      if (existedItemIndex > -1) {
        state.carts[existedItemIndex].quantity += product.quantity;
      } else {
        state.carts.push({ ...product });
      }
      localStorage.setItem(KEY_CARTS_LIST, JSON.stringify(state.carts));
      message.success("Thêm sản phẩm vào giỏ hàng thành công!");
    },

    // Hành động để xóa sản phẩm khỏi giỏ hàng
    actDeleteProductInCarts: (state, action) => {
      state.carts = state.carts.filter((cart) => cart.id !== action.payload);
      localStorage.setItem(KEY_CARTS_LIST, JSON.stringify(state.carts));
      message.success("Xóa sản phẩm khỏi giỏ hàng thành công!");
    },

    // Hành động để xóa tất cả sản phẩm khỏi giỏ hàng
    actClearCarts: (state, action) => {
      state.carts = [];
      localStorage.setItem(KEY_CARTS_LIST, JSON.stringify(state.carts));
      message.success("Xóa tất cả sản phẩm khỏi giỏ hàng thành công!");
    },

    // Hành động để cập nhật số lượng của một sản phẩm trong giỏ hàng
    actUpdateQuantityOfProduct: (state, action) => {
      const { id, quantity } = action.payload;
      const existedItemIndex = state.carts.findIndex((item) => item.id === id);
      state.carts[existedItemIndex].quantity = quantity;
      localStorage.setItem(KEY_CARTS_LIST, JSON.stringify(state.carts));
    },
  },
});

// Export các action creator và reducer
export const {
  actAddProductToCarts,
  actDeleteProductInCarts,
  actClearCarts,
  actUpdateQuantityOfProduct,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
