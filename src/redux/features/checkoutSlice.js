import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkoutApis } from "../../apis/checkoutApis"; // Import API calls related to checkout
import { message } from "antd"; // Import message component from Ant Design

// Khởi tạo trạng thái ban đầu cho slice checkout
const initialState = {
    checkoutBills: [], // Danh sách các hóa đơn thanh toán
    checkoutBill: {}, // Thông tin của hóa đơn thanh toán cụ thể
};

// Hành động để lấy tất cả các hóa đơn thanh toán từ server
export const actFetchAllCheckoutBills = createAsyncThunk(
    "checkout/fetchAllCheckoutBills", // Tên của action
    async (params) => {
        const response = await checkoutApis.getAllCheckoutBills({
            params: params,
        }); // Gọi API để lấy danh sách hóa đơn thanh toán
        return response; // Trả về dữ liệu hóa đơn thanh toán
    }
);

// Hành động để thêm một hóa đơn mới
export const actAddBill = createAsyncThunk(
    "checkout/addBill", // Tên của action
    async (bill) => {
        const response = await checkoutApis.addBill(bill); // Gọi API để thêm hóa đơn mới
        return response; // Trả về dữ liệu hóa đơn mới
    }
);

// Tạo slice cho phần checkout
const checkoutSlice = createSlice({
    name: "checkout", // Tên của slice
    initialState: initialState, // Trạng thái ban đầu của slice
    reducers: {}, // Không có reducers cho slice này
    extraReducers: (builder) => {
        // Xử lý khi hành động lấy tất cả các hóa đơn thanh toán thành công
        builder.addCase(actFetchAllCheckoutBills.fulfilled, (state, action) => {
            state.checkoutBills = action.payload; // Cập nhật danh sách hóa đơn thanh toán từ payload của action
        });

        // Xử lý khi hành động thêm một hóa đơn mới thành công
        builder.addCase(actAddBill.fulfilled, (state, action) => {
            const billData = action.payload; // Lấy dữ liệu hóa đơn từ payload của action
            state.checkoutBill = billData; // Cập nhật thông tin hóa đơn mới
            state.checkoutBills.push(billData); // Thêm hóa đơn mới vào danh sách hóa đơn thanh toán
            message.success("Check your order in purchase history!"); // Hiển thị thông báo thành công
        });
    },
});

// Export reducer của slice checkout
export const checkoutReducer = checkoutSlice.reducer;
