import axios from "axios";

// Định nghĩa đối tượng productApis với các phương thức để gọi API
export const productApis = {
    // Phương thức lấy tất cả sản phẩm với các tham số (params) tùy chọn
    getAllProducts: async (params) => {
        // Gửi yêu cầu GET đến endpoint '/products' với các tham số truyền vào
        const response = await axios.get(
            `${process.env.REACT_APP_BE_URL}products`,
            {
                params: {
                    ...params, // Sao chép các tham số truyền vào
                },
            }
        );
        // Trả về toàn bộ response
        return response;
    },

    // Phương thức lấy thông tin sản phẩm theo ID
    getProductsById: async (productId) => {
        // Gửi yêu cầu GET đến endpoint '/products/{productId}'
        const { data } = await axios.get(
            `${process.env.REACT_APP_BE_URL}products/${productId}`
        );
        // Trả về dữ liệu của sản phẩm
        return data;
    },

    // Phương thức lấy tất cả hình ảnh của sản phẩm
    getAllImgsProduct: async () => {
        // Gửi yêu cầu GET đến endpoint '/imgsProducts'
        const response = await axios.get(
            `${process.env.REACT_APP_BE_URL}imgsProducts`
        );
        // Trả về dữ liệu của response
        return response.data;
    },

    // Phương thức cập nhật thông tin sản phẩm theo ID
    updateProductById: async (idProduct, productUpdate) => {
        console.log(productUpdate, "productUpdate");
        // Gửi yêu cầu PATCH đến endpoint '/products/{idProduct}' với dữ liệu cập nhật
        const response = await axios.patch(
            `${process.env.REACT_APP_BE_URL}products/${idProduct}`,
            productUpdate
        );
        // Trả về toàn bộ response
        return response;
    },
};
