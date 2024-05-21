import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; // Import các hàm createAsyncThunk và createSlice từ Redux Toolkit để tạo các hành động async và slice
import { userApis } from "../../apis/userApis"; // Import các API liên quan đến người dùng
import { message } from "antd"; // Import thư viện message từ Ant Design để hiển thị thông báo
import { ROUTES } from "../../constants/routes"; // Import các route của ứng dụng
import { globalNavigate } from "../../utils/globalHistory"; // Import hàm điều hướng toàn cục

// Trạng thái khởi tạo của slice người dùng
const initialState = {
    isLoading: false, // Trạng thái tải dữ liệu
    users: [], // Danh sách người dùng
    errors: {}, // Lỗi xảy ra
    isLogin: JSON.parse(localStorage.getItem("isLogin")) || false, // Trạng thái đăng nhập từ localStorage (mặc định là false nếu không có)
    userInfo: JSON.parse(localStorage.getItem("userInfo")) || {}, // Thông tin người dùng từ localStorage (mặc định là một object rỗng nếu không có)
};

// Thunk để tạo người dùng mới
export const actCreateNewUser = createAsyncThunk(
    "users/createNewUser", // Tên hành động
    async (formValue, thunkAPI) => {
        // Hàm async nhận formValue và thunkAPI
        try {
            // Lấy tất cả người dùng để kiểm tra với giá trị formValue
            const users = await userApis.getAllUsers();
            const { user, email, phoneNumber } = formValue; // Lấy các giá trị từ formValue
            const foundUser = users.find((u) => u.user === user); // Tìm người dùng có tên đăng nhập trùng khớp
            const foundEmail = users.find((u) => u.email === email); // Tìm người dùng có email trùng khớp
            const foundPhoneNumber = users.find(
                (u) => u.phoneNumber === phoneNumber
            ); // Tìm người dùng có số điện thoại trùng khớp
            // Nếu người dùng, email hoặc số điện thoại đã tồn tại => trả về lỗi
            if (foundUser) {
                return thunkAPI.rejectWithValue("User has been existed!"); // Trả về lỗi nếu người dùng đã tồn tại
            } else if (foundEmail) {
                return thunkAPI.rejectWithValue("Email has been existed!"); // Trả về lỗi nếu email đã tồn tại
            } else if (foundPhoneNumber) {
                return thunkAPI.rejectWithValue(
                    "Number phone has been existed!"
                ); // Trả về lỗi nếu số điện thoại đã tồn tại
            } else {
                // Tạo người dùng mới nếu không có trùng khớp
                await userApis.createNewUser(formValue);
            }
        } catch (error) {
            // Xử lý lỗi (nếu có)
        }
    }
);

// Thunk để đăng nhập
export const actLogin = createAsyncThunk(
    "users/login", // Tên hành động
    async (formValue, thunkAPI) => {
        // Hàm async nhận formValue và thunkAPI
        // Lấy tất cả người dùng
        const users = await userApis.getAllUsers();
        const { user, password } = formValue; // Lấy tên đăng nhập và mật khẩu từ formValue
        // Tìm người dùng có tên đăng nhập và mật khẩu phù hợp
        const foundUser = users.find(
            (u) => u.user === user && u.password === password
        );
        // Xóa thuộc tính confirmPassword không cần thiết
        delete foundUser.confirmPassword;

        if (foundUser) {
            // Nếu tìm thấy người dùng, dispatch hành động loginSuccess
            thunkAPI.dispatch(loginSuccess(foundUser));
        } else {
            // Nếu không tìm thấy, trả về lỗi
            return thunkAPI.rejectWithValue("User or Password incorrect!");
        }
    }
);

// Thunk để lấy tất cả người dùng
export const actFetchAllUsers = createAsyncThunk(
    "users/fetchAllUsers", // Tên hành động
    async (params) => {
        // Hàm async nhận params (nếu có)
        return await userApis.getAllUsers({ params: params }); // Gọi API để lấy tất cả người dùng và trả về kết quả
    }
);

// Thunk để lấy thông tin người dùng theo ID
export const actFetchUserById = createAsyncThunk(
    "users/fetchMyUser", // Tên hành động
    async (userId) => {
        // Hàm async nhận userId
        const user = await userApis.getUserById(userId); // Gọi API để lấy thông tin người dùng theo ID
        return user; // Trả về thông tin người dùng
    }
);

// Thunk để cập nhật người dùng theo ID
export const actUpdateUserById = createAsyncThunk(
    "users/updateUserById", // Tên hành động
    async ({ id, userUpdate }, thunkAPI) => {
        // Hàm async nhận id và userUpdate
        await userApis.updateUserById(id, userUpdate); // Gọi API để cập nhật người dùng theo ID
        thunkAPI.dispatch(setUserInfo(userUpdate)); // Cập nhật thông tin người dùng trong state
        thunkAPI.dispatch(actFetchAllUsers()); // Lấy lại danh sách tất cả người dùng
        return null; // Trả về null vì không cần trả về kết quả cụ thể
    }
);

// Thunk để cập nhật mật khẩu người dùng theo ID
export const actUpdatePasswordById = createAsyncThunk(
    "users/updatePasswordById", // Tên hành động
    async ({ id, userUpdate }, thunkAPI) => {
        // Hàm async nhận id và userUpdate
        await userApis.updateUserById(id, userUpdate); // Gọi API để cập nhật người dùng theo ID
        thunkAPI.dispatch(actFetchAllUsers()); // Lấy lại danh sách tất cả người dùng
        return userUpdate; // Trả về thông tin cập nhật mật khẩu
    }
);

// Tạo slice người dùng
export const userSlice = createSlice({
    name: "user", // Tên slice
    initialState: initialState, // Trạng thái khởi tạo của slice
    reducers: {
        // Đặt trạng thái tải dữ liệu
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        // Đăng nhập thành công
        loginSuccess: (state, action) => {
            state.isLoading = false; // Đặt trạng thái tải dữ liệu thành false
            state.isLogin = true; // Đặt trạng thái đăng nhập thành true
            state.userInfo = action.payload; // Cập nhật thông tin người dùng trong state
            message.success("Login success!"); // Hiển thị thông báo đăng nhập thành công
            localStorage.setItem("isLogin", true); // Lưu trạng thái đăng nhập vào localStorage
            localStorage.setItem("userInfo", JSON.stringify(action.payload)); // Lưu thông tin người dùng vào localStorage
            globalNavigate(ROUTES.HOME_PAGE); // Điều hướng đến trang chủ
        },
        // Đăng nhập thất bại
        loginFailure: (state, action) => {
            state.isLoading = false; // Đặt trạng thái tải dữ liệu thành false
            state.isLogin = false; // Đặt trạng thái đăng nhập thành false
            state.userInfo = null; // Xóa thông tin người dùng trong state
            message.error("User or Password was wrong!"); // Hiển thị thông báo đăng nhập thất bại
            localStorage.setItem("isLogin", false); // Lưu trạng thái đăng nhập vào localStorage
            localStorage.setItem("userInfo", JSON.stringify({})); // Xóa thông tin người dùng trong localStorage
        },
        // Đăng xuất
        logout: (state, action) => {
            state.isLogin = false; // Đặt trạng thái đăng nhập thành false
            localStorage.setItem("isLogin", false); // Lưu trạng thái đăng nhập vào localStorage
            localStorage.setItem("userInfo", JSON.stringify(null)); // Xóa thông tin người dùng trong localStorage
            globalNavigate(ROUTES.HOME_PAGE); // Điều hướng đến trang chủ
        },
        // Đặt thông tin người dùng
        setUserInfo: (state, action) => {
            state.userInfo = action.payload; // Cập nhật thông tin người dùng trong state
            localStorage.setItem("userInfo", JSON.stringify(action.payload)); // Lưu thông tin người dùng vào localStorage
        },
    },
    extraReducers: (builder) => {
        // Thêm các case bổ sung cho các hành động async
        builder.addCase(actCreateNewUser.pending, (state, action) => {
            state.isLoading = true; // Đặt trạng thái tải dữ liệu thành true khi hành động đang chờ xử lý
        });
        builder.addCase(actCreateNewUser.rejected, (state, action) => {
            state.errors = {}; // Xóa lỗi trước đó
            // Hiển thị lỗi từ thunkAPI.rejectWithValue
            message.error(action.payload);
            state.isLoading = false; // Đặt trạng thái tải dữ liệu thành false khi hành động bị từ chối
        });
        builder.addCase(actCreateNewUser.fulfilled, (state, action) => {
            state.users = action.payload; // Cập nhật danh sách người dùng trong state
            message.success("Create new user success!"); // Hiển thị thông báo tạo người dùng thành công
            state.isLoading = false; // Đặt trạng thái tải dữ liệu thành false
            globalNavigate(ROUTES.LOGIN_PAGE); // Điều hướng đến trang đăng nhập
        });

        builder.addCase(actLogin.pending, (state, action) => {
            state.isLoading = true; // Đặt trạng thái tải dữ liệu thành true khi hành động đang chờ xử lý
        });
        builder.addCase(actLogin.rejected, (state, action) => {
            state.errors = {}; // Xóa lỗi trước đó
            message.error("User or Password incorrect!"); // Hiển thị thông báo lỗi
            state.isLoading = false; // Đặt trạng thái tải dữ liệu thành false khi hành động bị từ chối
            console.log("login failure", action.payload); // Log lỗi
        });

        builder.addCase(actFetchAllUsers.fulfilled, (state, action) => {
            state.users = action.payload; // Cập nhật danh sách người dùng trong state khi hành động thành công
        });

        builder.addCase(actFetchUserById.fulfilled, (state, action) => {
            state.userInfo = action.payload; // Cập nhật thông tin người dùng trong state khi hành động thành công
        });

        builder.addCase(actUpdateUserById.fulfilled, (state, action) => {
            message.success("Update profile success!"); // Hiển thị thông báo cập nhật hồ sơ thành công
            state.userInfo = action.payload; // Cập nhật thông tin người dùng trong state khi hành động thành công
        });

        builder.addCase(actUpdatePasswordById.fulfilled, (state, action) => {
            // Cập nhật mật khẩu trong thông tin người dùng
            state.userInfo.password = action.payload.password;
            state.userInfo.confirmPassword = action.payload.confirmPassword;
            localStorage.setItem("userInfo", JSON.stringify(state.userInfo)); // Lưu thông tin người dùng vào localStorage
            message.success("Update password success!!!"); // Hiển thị thông báo cập nhật mật khẩu thành công
        });
    },
});

// Export các hành động và reducer của slice người dùng
export const { setLoading, loginSuccess, loginFailure, logout, setUserInfo } =
    userSlice.actions;
export const userReducer = userSlice.reducer;
