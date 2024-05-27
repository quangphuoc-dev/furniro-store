// Nhập thư viện axios để thực hiện các yêu cầu HTTP.
import axios from "axios";

// Định nghĩa một đối tượng `orderApis` để chứa các phương thức tương tác với API đơn hàng.
export const orderApis = {
  // Phương thức để lấy tất cả các đơn hàng với các tham số tùy chọn.
  getAllOrders: async (params) => {
    // Thực hiện một yêu cầu GET tới endpoint 'orders', truyền các tham số nhận được.
    const response = await axios.get(`${process.env.REACT_APP_BE_URL}orders`, {
      params: params,
    });
    console.log("changeLog");
    // Trả về toàn bộ đối tượng phản hồi.
    return response;
  },

  // Phương thức để lấy một đơn hàng cụ thể bằng ID của nó.
  getOrderById: async (id) => {
    // Trích xuất thuộc tính data từ đối tượng phản hồi của yêu cầu GET tới endpoint 'orders/{id}'.
    const { data } = await axios.get(
      `${process.env.REACT_APP_BE_URL}orders/${id}`
    );
    // Trả về dữ liệu nhận được từ phản hồi.
    return data;
  },

  // Phương thức để thêm một đơn hàng mới.
  addOrder: async (order) => {
    // Thực hiện một yêu cầu POST tới endpoint 'orders', gửi dữ liệu đơn hàng trong thân yêu cầu.
    const response = await axios.post(
      `${process.env.REACT_APP_BE_URL}orders`,
      order
    );
    // Trả về dữ liệu từ phản hồi.
    return response.data;
  },

  // Phương thức để xóa một đơn hàng bằng ID của nó.
  deleteOrder: async (id) => {
    // Thực hiện một yêu cầu DELETE tới endpoint 'orders/{id}'.
    return await axios.delete(`${process.env.REACT_APP_BE_URL}orders/${id}`);
  },

  // Phương thức để cập nhật một đơn hàng hiện có bằng ID của nó.
  updateOrder: async (id, order) => {
    // Thực hiện một yêu cầu PATCH tới endpoint 'orders/{id}', gửi dữ liệu đơn hàng cập nhật trong thân yêu cầu.
    const data = await axios.patch(
      `${process.env.REACT_APP_BE_URL}orders/${id}`,
      order
    );
    // Trả về dữ liệu từ phản hồi.
    return data;
  },
};
