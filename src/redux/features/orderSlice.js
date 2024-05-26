// Nhập các hàm createAsyncThunk và createSlice từ thư viện @reduxjs/toolkit.
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// Nhập các phương thức từ orderApis để sử dụng trong các hành động async.
import { orderApis } from "../../apis/orderApis";
// Nhập message từ thư viện antd để hiển thị thông báo.
import { message } from "antd";

// Khởi tạo trạng thái ban đầu cho slice order.
const initialState = {
    orders: [], // Mảng lưu trữ tất cả các đơn hàng.
    order: {}, // Đối tượng lưu trữ một đơn hàng cụ thể.
    isLoading: false, // Trạng thái tải dữ liệu.
    errors: {}, // Đối tượng lưu trữ lỗi.
    isBought: false, // Trạng thái xác định đã mua hàng.
};

// Tạo một hành động async để lấy tất cả các đơn hàng.
export const actFetchAllOrders = createAsyncThunk(
    "order/fetchAllOrders", // Tên của hành động này.
    async (params) => {
        // Gọi phương thức getAllOrders từ orderApis với các tham số truy vấn.
        const response = await orderApis.getAllOrders({ params: params });
        // Trả về dữ liệu (data) nhận được.
        return response.data;
    }
);

// Tạo một hành động async để thêm một đơn hàng mới.
export const actAddOrder = createAsyncThunk(
    "order/addOrder", // Tên của hành động này.
    async (order) => {
        // Gọi phương thức addOrder từ orderApis với dữ liệu đơn hàng.
        const response = await orderApis.addOrder(order);
        // Trả về phản hồi nhận được.
        return response;
    }
);

// Tạo một hành động async để lấy một đơn hàng theo ID.
export const actFetchOrderById = createAsyncThunk(
    "order/fetchOrderById", // Tên của hành động này.
    async (id) => {
        // Gọi phương thức getOrderById từ orderApis với ID của đơn hàng.
        return await orderApis.getOrderById(id);
    }
);

// Tạo slice cho tính năng order.
const orderSlice = createSlice({
    name: "order", // Tên của slice.
    initialState: initialState, // Trạng thái ban đầu của slice.
    reducers: {
        // Đặt trạng thái đang tải.
        setLoading: (state, action) => {
            state.isLoading = true;
        },
        // Xử lý khi đơn hàng được gửi thành công.
        sendOrderSuccess: (state, action) => {
            state.orders.push(action.payload);
            message.success("Đặt hàng thành công! Success");
        },
        // Xử lý khi gửi đơn hàng thất bại.
        sendOrderFailure: (state, action) => {
            message.error("Đặt hàng thất bại! Failure");
        },
        // Xóa toàn bộ đơn hàng và đặt lại trạng thái.
        clearOrder: (state, action) => {
            state.orders = [];
            state.order = {};
        },
    },
    extraReducers: (builder) => {
        // Xử lý khi hành động actFetchAllOrders đang chờ xử lý.
        builder.addCase(actFetchAllOrders.pending, (state, action) => {
            state.isLoading = true;
        });
        // Xử lý khi hành động actFetchAllOrders bị từ chối.
        builder.addCase(actFetchAllOrders.rejected, (state, action) => {
            state.isLoading = false;
            state.errors = action.error;
        });
        // Xử lý khi hành động actFetchAllOrders được hoàn thành.
        builder.addCase(actFetchAllOrders.fulfilled, (state, action) => {
            state.isLoading = false;
            state.orders = action.payload;
        });

        // Xử lý khi hành động actAddOrder được hoàn thành.
        builder.addCase(actAddOrder.fulfilled, (state, action) => {
            // console.log(action.payload, "action.payload add order ne");
            state.order = action.payload;
            state.orders.push(action.payload);
            message.success("Đặt hàng thành công!");
        });
        // Xử lý khi hành động actAddOrder bị từ chối.
        builder.addCase(actAddOrder.rejected, (state, action) => {
            state.orders = [];
            state.order = {};
            message.error(action.error.message);
        });

        // Xử lý khi hành động actFetchOrderById được hoàn thành.
        builder.addCase(actFetchOrderById.fulfilled, (state, action) => {
            state.order = action.payload;
        });
    },
});

// Xuất các hành động để sử dụng trong các component.
export const { setLoading, sendOrderSuccess, sendOrderFailure, clearOrder } =
    orderSlice.actions;

// Xuất reducer của slice order để sử dụng trong store.
export const orderReducer = orderSlice.reducer;
