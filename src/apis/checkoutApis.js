// Nhập thư viện axios để thực hiện các yêu cầu HTTP.
import axios from "axios";

// Định nghĩa một đối tượng `checkoutApis` để chứa các phương thức tương tác với API hóa đơn thanh toán.
export const checkoutApis = {
    // Phương thức để lấy tất cả các hóa đơn thanh toán với các tham số tùy chọn.
    getAllCheckoutBills: async (params) => {
        // Thực hiện một yêu cầu GET tới endpoint 'checkoutBills', truyền các tham số nhận được.
        const response = await axios.get(
            `${process.env.REACT_APP_BE_URL}checkoutBills`,
            {
                params: params, // Truyền các tham số tìm kiếm trong yêu cầu GET.
            }
        );
        // Trả về dữ liệu (data) từ phản hồi.
        return response.data;
    },

    // Phương thức để thêm một hóa đơn thanh toán mới.
    addBill: async (bill) => {
        // Thực hiện một yêu cầu POST tới endpoint 'checkoutBills', gửi dữ liệu hóa đơn trong thân yêu cầu.
        const response = await axios.post(
            `${process.env.REACT_APP_BE_URL}checkoutBills`,
            bill // Truyền dữ liệu hóa đơn trong yêu cầu POST.
        );
        // Trả về dữ liệu (data) từ phản hồi.
        return response.data;
    },
};
