import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { commentApis } from "../../apis/commentApis";
import { message } from "antd";

// Khởi tạo trạng thái ban đầu cho slice comments
const initialState = {
  isLoading: false, // Trạng thái tải dữ liệu
  errors: {}, // Lưu trữ lỗi nếu có
  comments: [], // Danh sách nhận xét
  commentsCalcuStarAverage: [], // Danh sách nhận xét để tính trung bình sao
  comment: {}, // Chi tiết của một nhận xét
  pagination: {
    currentPage: 1, // Trang hiện tại
    limitPerPage: 5, // Giới hạn nhận xét mỗi trang
    total: 25, // Tổng số nhận xét
  },
};

// Thực hiện lấy tất cả các nhận xét với tham số params
export const actFetchAllComments = createAsyncThunk(
  "comment/fetchAllComments",
  async (params = {}) => {
    const response = await commentApis.getAllComments(params); // Gọi API để lấy dữ liệu nhận xét
    return response.data;
    // return {
    //   data: response, // Dữ liệu nhận xét
    //   total: response.headers.get("X-Total-Count"), // Tổng số nhận xét từ header
    // };
  }
);

// Thực hiện lấy tất cả các nhận xét để tính trung bình sao
// export const actFetchAllCommentsCalcuStarAverage = createAsyncThunk(
//   "comment/fetchAllCommentsCalcuStarAverage",
//   async (params = {}) => {
//     const response = await commentApis.getAllComments(params); // Gọi API để lấy dữ liệu nhận xét
//     return response.data; // Trả về dữ liệu nhận xét
//   }
// );

// Thực hiện thêm nhận xét mới
export const actAddComment = createAsyncThunk(
  "comment/addComment",
  async (comment) => {
    const response = await commentApis.addComment(comment); // Gọi API để thêm nhận xét
    return response; // Trả về phản hồi từ API
  }
);

// Thực hiện lấy nhận xét theo ID
export const actFetchCommentById = createAsyncThunk(
  "comment/fetchCommentById",
  async (params = {}) => {
    const response = await commentApis.getCommentById(params.id); // Gọi API để lấy nhận xét theo ID
    console.log(response, "fetch comment by id");
    return response.data; // Trả về dữ liệu nhận xét
  }
);

// Thực hiện chỉnh sửa nhận xét theo ID
export const actEditCommentById = createAsyncThunk(
  "comment/editCommentById",
  async ({ id, commentUpdate }) => {
    const response = await commentApis.editCommentById(id, commentUpdate); // Gọi API để chỉnh sửa nhận xét
    return response; // Trả về phản hồi từ API
  }
);

// Tạo slice cho nhận xét
const commentSlice = createSlice({
  name: "comment",
  initialState: initialState,
  reducers: {
    // Đặt trang mới cho phân trang
    setNewPage: (state, action) => {
      state.pagination = {
        ...state.pagination,
        currentPage: action.payload, // Cập nhật trang hiện tại
      };
    },
  },
  extraReducers: (builder) => {
    // Xử lý trạng thái khi đang tải tất cả các nhận xét
    builder.addCase(actFetchAllComments.pending, (state, action) => {
      state.isLoading = true; // Đặt trạng thái tải dữ liệu
    });
    // Xử lý trạng thái khi lỗi khi tải tất cả các nhận xét
    builder.addCase(actFetchAllComments.rejected, (state, action) => {
      state.isLoading = false; // Tắt trạng thái tải dữ liệu
      state.errors = {}; // Đặt lỗi (nếu có)
    });
    // Xử lý trạng thái khi hoàn thành tải tất cả các nhận xét
    builder.addCase(actFetchAllComments.fulfilled, (state, action) => {
      state.isLoading = false; // Tắt trạng thái tải dữ liệu
      state.comments = action.payload; // Cập nhật danh sách nhận xét
      state.commentsCalcuStarAverage = action.payload; //
      //   state.pagination.total = action.payload.total; // Cập nhật tổng số nhận xét
    });

    // Xử lý trạng thái khi hoàn thành tải tất cả các nhận xét để tính trung bình sao
    // builder.addCase(
    //   actFetchAllCommentsCalcuStarAverage.fulfilled,
    //   (state, action) => {
    //     state.isLoading = false; // Tắt trạng thái tải dữ liệu
    //     state.commentsCalcuStarAverage = action.payload.data; // Cập nhật danh sách nhận xét để tính trung bình sao
    //     console.log(state);
    //   }
    // );

    // Xử lý trạng thái khi đang thêm nhận xét
    builder.addCase(actAddComment.pending, (state, action) => {
      state.isLoading = true; // Đặt trạng thái tải dữ liệu
    });
    // Xử lý trạng thái khi lỗi khi thêm nhận xét
    builder.addCase(actAddComment.rejected, (state, action) => {
      state.isLoading = false; // Tắt trạng thái tải dữ liệu
      state.errors = {}; // Đặt lỗi (nếu có)
      message.error("add review product failure!"); // Hiển thị thông báo lỗi
    });
    // Xử lý trạng thái khi hoàn thành thêm nhận xét
    builder.addCase(actAddComment.fulfilled, (state, action) => {
      state.isLoading = false; // Tắt trạng thái tải dữ liệu
      state.comment = action.payload; // Cập nhật nhận xét mới
      state.comments.push(action.payload); // Thêm nhận xét mới vào danh sách nhận xét
      state.commentsCalcuStarAverage = action.payload; // Thêm nhận xét mới vào danh sách tính trung bình sao
      message.success("add review product success!"); // Hiển thị thông báo thành công
    });

    // Xử lý trạng thái khi đang chỉnh sửa nhận xét
    builder.addCase(actEditCommentById.pending, (state, action) => {
      state.isLoading = true; // Đặt trạng thái tải dữ liệu
    });
    // Xử lý trạng thái khi lỗi khi chỉnh sửa nhận xét
    builder.addCase(actEditCommentById.rejected, (state, action) => {
      state.isLoading = false; // Tắt trạng thái tải dữ liệu
      state.errors = {}; // Đặt lỗi (nếu có)
      message.error("update review product failure!"); // Hiển thị thông báo lỗi
    });
    // Xử lý trạng thái khi hoàn thành chỉnh sửa nhận xét
    builder.addCase(actEditCommentById.fulfilled, (state, action) => {
      console.log(action.payload, "edit comment fulfilled ne");
      message.success("update review product success!"); // Hiển thị thông báo thành công
    });
  },
});

// Xuất các action và reducer
export const { setNewPage } = commentSlice.actions;
export const commentReducer = commentSlice.reducer;
