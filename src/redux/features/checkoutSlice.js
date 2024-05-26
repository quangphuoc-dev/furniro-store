// Nhập các hàm createAsyncThunk và createSlice từ thư viện @reduxjs/toolkit.
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// Nhập các phương thức từ checkoutApis để sử dụng trong các hành động async.
import { checkoutApis } from "../../apis/checkoutApis";
// Nhập message từ thư viện antd để hiển thị thông báo.
import { message } from "antd";

// Khởi tạo trạng thái ban đầu cho slice checkout.
const initialState = {
    checkoutBills: [], // Mảng để lưu trữ tất cả các hóa đơn thanh toán.
    checkoutBill: {}, // Đối tượng để lưu trữ một hóa đơn thanh toán cụ thể.
};

// Tạo một hành động async để lấy tất cả các hóa đơn thanh toán.
export const actFetchAllCheckoutBills = createAsyncThunk(
    "checkout/fetchAllCheckoutBills", // Tên của hành động này.
    async (params) => {
        // Gọi phương thức getAllCheckoutBills từ checkoutApis với các tham số truy vấn.
        const response = await checkoutApis.getAllCheckoutBills({
            params: params,
        });
        // Trả về phản hồi nhận được.
        return response;
    }
);

// Tạo một hành động async để thêm một hóa đơn thanh toán mới.
export const actAddBill = createAsyncThunk(
    "checkout/addBill", // Tên của hành động này.
    async (bill) => {
        // Gọi phương thức addBill từ checkoutApis với dữ liệu hóa đơn.
        const response = await checkoutApis.addBill(bill);
        // Trả về phản hồi nhận được.
        return response;
    }
);

// Tạo một slice cho tính năng checkout.
const checkoutSlice = createSlice({
    name: "checkout", // Tên của slice.
    initialState: initialState, // Trạng thái ban đầu của slice.
    reducers: {}, // Không có reducer nào được định nghĩa ở đây.
    extraReducers: (builder) => {
        // Xử lý khi hành động actFetchAllCheckoutBills được hoàn thành.
        builder.addCase(actFetchAllCheckoutBills.fulfilled, (state, action) => {
            // Cập nhật trạng thái checkoutBills với dữ liệu nhận được.
            state.checkoutBills = action.payload;
        });

        // Xử lý khi hành động actAddBill được hoàn thành.
        builder.addCase(actAddBill.fulfilled, (state, action) => {
            const billData = action.payload;
            // console.log(billData, "billData"); // Dòng này có thể dùng để debug.
            // Cập nhật trạng thái checkoutBill với dữ liệu hóa đơn mới.
            state.checkoutBill = billData;
            // Thêm hóa đơn mới vào mảng checkoutBills.
            state.checkoutBills.push(billData);
            // Hiển thị thông báo thành công.
            message.success("Check your order in purchase history!");
        });
    },
});

// Xuất reducer của slice checkout để sử dụng trong store.
export const checkoutReducer = checkoutSlice.reducer;
