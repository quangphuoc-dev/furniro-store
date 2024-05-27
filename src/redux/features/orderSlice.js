import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { orderApis } from "../../apis/orderApis"; // Import API calls related to orders
import { message } from "antd"; // Import message component from Ant Design

// Khởi tạo trạng thái ban đầu cho slice order
const initialState = {
  orders: [], // Danh sách các đơn hàng
  order: {}, // Thông tin của đơn hàng cụ thể
  isLoading: false, // Trạng thái đang tải
  errors: {}, // Lỗi
  isBought: false, // Trạng thái đã mua
};

// Hành động để lấy tất cả các đơn hàng từ server
export const actFetchAllOrders = createAsyncThunk(
  "order/fetchAllOrders", // Tên của action
  async (params) => {
    const response = await orderApis.getAllOrders({ params: params }); // Gọi API để lấy danh sách đơn hàng
    return response.data; // Trả về dữ liệu đơn hàng
  }
);

// Hành động để thêm một đơn hàng mới
export const actAddOrder = createAsyncThunk(
  "order/addOrder", // Tên của action
  async (order) => {
    const response = await orderApis.addOrder(order); // Gọi API để thêm đơn hàng mới
    return response; // Trả về dữ liệu đơn hàng mới
  }
);

// Hành động để lấy thông tin của một đơn hàng dựa trên ID
export const actFetchOrderById = createAsyncThunk(
  "order/fetchOrderById", // Tên của action
  async (id) => {
    return await orderApis.getOrderById(id); // Gọi API để lấy thông tin đơn hàng dựa trên ID
  }
);

// Tạo slice cho phần order
const orderSlice = createSlice({
  name: "order", // Tên của slice
  initialState: initialState, // Trạng thái ban đầu của slice
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = true; // Đánh dấu là đang tải
    },
    sendOrderSuccess: (state, action) => {
      state.orders.push(action.payload); // Thêm đơn hàng mới vào danh sách đơn hàng
      message.success("Đặt hàng thành công! Success"); // Hiển thị thông báo thành công
    },
    sendOrderFailure: (state, action) => {
      message.error("Đặt hàng thất bại! Failure"); // Hiển thị thông báo thất bại
    },
    clearOrder: (state, action) => {
      state.orders = []; // Xóa danh sách đơn hàng
      state.order = {}; // Xóa thông tin của đơn hàng
    },
  },
  extraReducers: (builder) => {
    // Xử lý khi hành động lấy tất cả các đơn hàng thành công
    builder.addCase(actFetchAllOrders.pending, (state, action) => {
      state.isLoading = true; // Đánh dấu là đang tải
    });
    builder.addCase(actFetchAllOrders.rejected, (state, action) => {
      state.isLoading = false; // Đánh dấu là không còn đang tải
      state.errors = {}; // Xóa lỗi
    });
    builder.addCase(actFetchAllOrders.fulfilled, (state, action) => {
      state.isLoading = false; // Đánh dấu là không còn đang tải
      state.orders = action.payload; // Cập nhật danh sách đơn hàng từ payload của action
    });

    // Xử lý khi hành động thêm một đơn hàng mới thành công
    builder.addCase(actAddOrder.fulfilled, (state, action) => {
      state.order = action.payload; // Cập nhật thông tin đơn hàng mới
      state.orders.push(action.payload); // Thêm đơn hàng mới vào danh sách đơn hàng
      message.success("Đặt hàng thành công!"); // Hiển thị thông báo thành công
    });
    // Xử lý khi hành động thêm một đơn hàng mới thất bại
    builder.addCase(actAddOrder.rejected, (state, action) => {
      state.orders = []; // Xóa danh sách đơn hàng
      state.customerInfo = {}; // Xóa thông tin khách hàng
      message.error(action.payload); // Hiển thị thông báo lỗi
    });

    // Xử lý khi hành động lấy thông tin của một đơn hàng dựa trên ID thành công
    builder.addCase(actFetchOrderById.fulfilled, (state, action) => {
      state.order = action.payload; // Cập nhật thông tin của đơn hàng
    });
  },
});

// Export reducers và actions của slice order
export const { setLoading, sendOrderSuccess, sendOrderFailure, clearOrder } =
  orderSlice.actions;
export const orderReducer = orderSlice.reducer;
