import axios from "axios";

// URL cơ sở cho API backend, được đọc từ biến môi trường
const BASE_URL = process.env.REACT_APP_BE_URL;

export const commentApis = {
  // Lấy tất cả các bình luận với các tham số truy vấn tùy chọn
  // Các bình luận được sắp xếp theo 'creatAtComment' theo thứ tự giảm dần
  getAllComments: async (params) => {
    try {
      const response = await axios.get(`${BASE_URL}comments`, {
        params: {
          ...params,
          _sort: "creatAtComment",
          _order: "desc",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Không thể lấy bình luận:", error);
      throw error; // Ném lỗi để caller xử lý
    }
  },

  // Thêm một bình luận mới
  addComment: async (comment) => {
    try {
      const response = await axios.post(`${BASE_URL}comments`, comment);
      return response.data;
    } catch (error) {
      console.error("Không thể thêm bình luận:", error);
      throw error; // Ném lỗi để caller xử lý
    }
  },

  // Lấy một bình luận cụ thể theo ID
  getCommentById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}comments/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Không thể lấy bình luận với id ${id}:`, error);
      throw error; // Ném lỗi để caller xử lý
    }
  },

  // Xóa một bình luận cụ thể theo ID
  deleteCommentById: async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}comments/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Không thể xóa bình luận với id ${id}:`, error);
      throw error; // Ném lỗi để caller xử lý
    }
  },

  // Chỉnh sửa một bình luận cụ thể theo ID
  editCommentById: async (id, commentUpdate) => {
    try {
      const response = await axios.patch(`${BASE_URL}comments/${id}`, commentUpdate);
      return response.data;
    } catch (error) {
      console.error(`Không thể chỉnh sửa bình luận với id ${id}:`, error);
      throw error; // Ném lỗi để caller xử lý
    }
  },
};
