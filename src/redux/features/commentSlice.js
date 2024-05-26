import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { commentApis } from "../../apis/commentApis";
import { message } from "antd";

// Trạng thái khởi tạo của reducer
const initialState = {
    isLoading: false, // Trạng thái tải
    errors: {}, // Lỗi
    comments: [], // Danh sách bình luận
    commentsCalcuStarAverage: [], // Danh sách bình luận để tính trung bình đánh giá
    comment: {}, // Bình luận
    pagination: {
        // Phân trang
        currentPage: 1, // Trang hiện tại
        limitPerPage: 5, // Số lượng mục trên mỗi trang
        total: 25, // Tổng số mục
    },
};

// Hành động Redux thực hiện gọi API để lấy danh sách bình luận
export const actFetchAllComments = createAsyncThunk(
    "comment/fetchAllComments",
    async (params = {}) => {
        const response = await commentApis.getAllComments(params);
        return {
            data: response.data,
            total: response.headers.get("X-Total-Count"),
        };
    }
);

// Hành động Redux thực hiện gọi API để lấy danh sách bình luận và tính trung bình đánh giá
export const actFetchAllCommentsCalcuStarAverage = createAsyncThunk(
    "comment/fetchAllCommentsCalcuStarAverage",
    async (params = {}) => {
        const response = await commentApis.getAllComments(params);
        return response.data;
    }
);

// Hành động Redux thực hiện gọi API để thêm một bình luận mới
export const actAddComment = createAsyncThunk(
    "comment/addComment",
    async (comment) => {
        const response = await commentApis.addComment(comment);
        return response;
    }
);

// Hành động Redux thực hiện gọi API để lấy một bình luận theo ID
export const actFetchCommentById = createAsyncThunk(
    "comment/fetchCommentById",
    async (id) => {
        const response = await commentApis.getCommentById(id);
        console.log(response, "fetch comment by id");
        return response.data;
    }
);

// Hành động Redux thực hiện gọi API để chỉnh sửa một bình luận
export const actEditCommentById = createAsyncThunk(
    "comment/editCommentById",
    async ({ id, commentUpdate }) => {
        const response = await commentApis.editCommentById(id, commentUpdate);
        return response;
    }
);

// Redux Slice định nghĩa reducer và các hành động
const commentSlice = createSlice({
    name: "comment",
    initialState: initialState,
    reducers: {
        // Hành động Redux để đặt trang mới
        setNewPage: (state, action) => {
            state.pagination = {
                ...state.pagination,
                currentPage: action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(actFetchAllComments.pending, (state, action) => {
            state.isLoading = true; // Đặt trạng thái tải khi đang tải danh sách bình luận
        });
        builder.addCase(actFetchAllComments.rejected, (state, action) => {
            state.isLoading = false; // Đặt trạng thái tải về false nếu tải danh sách bình luận thất bại
            state.errors = {}; // Xóa lỗi
        });
        builder.addCase(actFetchAllComments.fulfilled, (state, action) => {
            state.isLoading = false; // Đặt trạng thái tải về false nếu tải danh sách bình luận thành công
            state.comments = action.payload.data; // Lưu danh sách bình luận
            state.pagination.total = action.payload.total; // Cập nhật tổng số mục
        });

        builder.addCase(
            actFetchAllCommentsCalcuStarAverage.fulfilled,
            (state, action) => {
                state.isLoading = false; // Đặt trạng thái tải về false nếu tính trung bình đánh giá thành công
                state.commentsCalcuStarAverage = action.payload; // Lưu danh sách bình luận để tính trung bình đánh giá
            }
        );

        builder.addCase(actAddComment.pending, (state, action) => {
            state.isLoading = true; // Đặt trạng thái tải khi đang thêm một bình luận mới
        });
        builder.addCase(actAddComment.rejected, (state, action) => {
            state.isLoading = false; // Đặt trạng thái tải về false nếu thêm bình luận mới thất bại
            state.errors = {}; // Xóa lỗi
            message.error("Thêm đánh giá sản phẩm thất bại!"); // Hiển thị thông báo lỗi
        });
        builder.addCase(actAddComment.fulfilled, (state, action) => {
            state.isLoading = false; // Đặt trạng thái tải về false nếu thêm bình luận mới thành công
            state.comment = action.payload; // Đặt dữ liệu bình luận mới
            state.comments.push(action.payload); // Thêm bình luận mới vào mảng
            state.commentsCalcuStarAverage.push(action.payload); // Thêm bình luận mới vào mảng để tính trung bình đánh giá
            message.success("Thêm đánh giá sản phẩm thành công!"); // Hiển thị thông báo thành công
        });

        builder.addCase(actEditCommentById.pending, (state, action) => {
            state.isLoading = true; // Đặt trạng thái tải khi đang chỉnh sửa một bình luận
        });
        builder.addCase(actEditCommentById.rejected, (state, action) => {
            state.isLoading = false; // Đặt trạng thái tải về false nếu chỉnh sửa bình luận thất bại
            state.errors = {}; // Xóa lỗi
            message.error("Cập nhật đánh giá sản phẩm thất bại!"); // Hiển thị thông báo lỗi
        });
        builder.addCase(actEditCommentById.fulfilled, (state, action) => {
            console.log(action.payload, "edit comment fulfilled ne");
            message.success("Cập nhật đánh giá sản phẩm thành công!"); // Hiển thị thông báo thành công
        });
    },
});

// Export các hành động và reducer từ Redux Slice
export const { setNewPage } = commentSlice.actions;
export const commentReducer = commentSlice.reducer;
