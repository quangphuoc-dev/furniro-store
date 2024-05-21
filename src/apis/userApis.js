import axios from "axios"; // Import thư viện axios để thực hiện các yêu cầu HTTP

export const userApis = {
    // Hàm tạo người dùng mới
    createNewUser: async (user) => {
        // Gửi yêu cầu POST tới endpoint /users với dữ liệu người dùng
        return await axios.post(`${process.env.REACT_APP_BE_URL}users`, user);
    },

    // Hàm lấy tất cả người dùng với các tham số tùy chọn
    getAllUsers: async (params) => {
        // Gửi yêu cầu GET tới endpoint /users với các tham số truy vấn nếu có
        const { data } = await axios.get(
            `${process.env.REACT_APP_BE_URL}users`,
            {
                params: params, // Truyền các tham số truy vấn vào yêu cầu
            }
        );
        return data; // Trả về dữ liệu người dùng từ phản hồi của API
    },

    // Hàm lấy thông tin người dùng theo ID
    getUserById: async (userId) => {
        // Gửi yêu cầu GET tới endpoint /users/{userId} với ID người dùng
        const response = await axios.get(
            `${process.env.REACT_APP_BE_URL}users/${userId}`
        );
        return response.data; // Trả về dữ liệu người dùng từ phản hồi của API
    },

    // Hàm cập nhật thông tin người dùng theo ID
    updateUserById: async (userId, userUpdate) => {
        // Gửi yêu cầu PATCH tới endpoint /users/{userId} với dữ liệu cập nhật
        return await axios.patch(
            `${process.env.REACT_APP_BE_URL}users/${userId}`,
            userUpdate // Dữ liệu cập nhật của người dùng
        );
    },
};
