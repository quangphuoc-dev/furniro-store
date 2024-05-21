import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productApis } from "../../apis/productApis";

// Trạng thái ban đầu của slice sản phẩm
const initialState = {
    isLoading: false, // Trạng thái tải dữ liệu
    products: [], // Mảng chứa danh sách sản phẩm
    productInfo: {}, // Thông tin chi tiết của một sản phẩm
    imgsProducts: [], // Mảng chứa danh sách hình ảnh sản phẩm
    errors: {}, // Lỗi trong quá trình lấy dữ liệu
    pagination: {
        // Thông tin phân trang
        currentPage: 1,
        limitPerPage: 8,
        total: 8,
    },
    searchKey: "", // Từ khóa tìm kiếm
    params: {
        // Các tham số lọc và sắp xếp sản phẩm
        _sort: null,
        _order: null,
        material: null,
        price_lte: null,
        price_gte: null,
    },
    filter: "", // Bộ lọc hiện tại
};

// Hành động bất đồng bộ để lấy tất cả sản phẩm
export const actFetchAllProducts = createAsyncThunk(
    "products/fetchAllProducts",
    async (params = {}) => {
        const response = await productApis.getAllProducts({
            ...params,
        });
        return {
            data: response.data,
            total: response.headers.get("X-Total-Count"),
        };
    }
);

// Hành động bất đồng bộ để lấy sản phẩm theo ID
export const actFetchProductById = createAsyncThunk(
    "products/fetchProductById",
    async (productId) => {
        const product = await productApis.getProductsById(productId);
        return product;
    }
);

// Hành động bất đồng bộ để lấy tất cả hình ảnh sản phẩm
export const actFetchAllImgsProducts = createAsyncThunk(
    "products/fetchAllImgsProducts",
    async () => {
        const data = await productApis.getAllImgsProduct();
        return data;
    }
);

// Hành động bất đồng bộ để cập nhật sản phẩm theo ID
export const actUpdateProductById = createAsyncThunk(
    "products/updateProductById",
    async ({ id, productUpdate }, thunkAPI) => {
        await productApis.updateProductById(id, productUpdate);
        return productUpdate;
    }
);

// Tạo một slice cho sản phẩm
const productSlice = createSlice({
    name: "products",
    initialState: initialState, // Trạng thái ban đầu
    reducers: {
        // Các reducers để xử lý các hành động đồng bộ
        actSetLoading: (state, action) => {
            state.isLoading = action.payload; // Đặt trạng thái tải dữ liệu
        },
        setNewPage: (state, action) => {
            state.pagination = {
                ...state.pagination,
                currentPage: action.payload, // Đặt trang hiện tại mới
            };
        },
        setSearchKey: (state, action) => {
            state.searchKey = action.payload; // Đặt từ khóa tìm kiếm mới
        },
        filterReducer: (state, action) => {
            state.filter = action.payload; // Đặt bộ lọc mới

            // Thiết lập các tham số lọc và sắp xếp dựa trên bộ lọc
            switch (action.payload) {
                case "Name: A-Z":
                    state.params._sort = "name";
                    state.params._order = "asc";
                    break;
                case "Name: Z-A":
                    state.params._sort = "name";
                    state.params._order = "desc";
                    break;
                case "Price: Low to High":
                    state.params._sort = "price";
                    state.params._order = "asc";
                    break;
                case "Price: High to Low":
                    state.params._sort = "price";
                    state.params._order = "desc";
                    break;
                case "less than 1.500.000đ":
                    state.params.price_gte = 0;
                    state.params.price_lte = 1499999;
                    state.params._sort = "price";
                    state.params._order = "asc";
                    break;
                case "1.500.000đ - 5.000.000đ":
                    state.params.price_gte = 1500000;
                    state.params.price_lte = 5000000;
                    state.params._sort = "price";
                    state.params._order = "asc";
                    break;
                case "5.000.000đ - 10.000.000đ":
                    state.params.price_gte = 5000000;
                    state.params.price_lte = 10000000;
                    state.params._sort = "price";
                    state.params._order = "asc";
                    break;
                case "greater than 10.000.000đ":
                    state.params.price_gte = 10000000;
                    state.params.price_lte = 9000000000000000;
                    state.params._sort = "price";
                    state.params._order = "asc";
                    break;
                default:
                    state.params._sort = "brands";
                    state.params._order = "asc";
                    break;
            }
            console.log({ ...state.params }, "state.params in filter reducer");
            if (action.payload === "material") {
                state.params.material_like = action.payload.value;
            }
        },

        // Đặt lại các tham số lọc
        deleteFilterReducer: (state, action) => {
            state.params = {
                _sort: null,
                _order: null,
                price_lte: null,
                price_gte: null,
            };
        },
    },
    // Các extraReducers để xử lý các hành động bất đồng bộ
    extraReducers: (builder) => {
        builder.addCase(actFetchAllProducts.pending, (state, action) => {
            state.isLoading = true; // Đặt trạng thái tải dữ liệu khi bắt đầu lấy sản phẩm
        });
        builder.addCase(actFetchAllProducts.rejected, (state, action) => {
            state.errors = {}; // Đặt lỗi nếu có lỗi xảy ra
            state.isLoading = false; // Tắt trạng thái tải dữ liệu
        });
        builder.addCase(actFetchAllProducts.fulfilled, (state, action) => {
            state.products = action.payload.data; // Đặt dữ liệu sản phẩm
            state.pagination.total = action.payload.total; // Đặt tổng số sản phẩm
            state.isLoading = false; // Tắt trạng thái tải dữ liệu
        });

        builder.addCase(actFetchProductById.fulfilled, (state, action) => {
            state.productInfo = action.payload; // Đặt thông tin sản phẩm theo ID
        });

        builder.addCase(actFetchAllImgsProducts.fulfilled, (state, action) => {
            state.imgsProducts = action.payload; // Đặt danh sách hình ảnh sản phẩm
        });

        builder.addCase(actUpdateProductById.fulfilled, (state, action) => {
            state.productInfo = action.payload; // Đặt thông tin sản phẩm đã cập nhật
        });
    },
});

// Xuất các hành động đồng bộ và reducer
export const {
    actSetLoading,
    setNewPage,
    setSearchKey,
    filterReducer,
    deleteFilterReducer,
    setParams,
} = productSlice.actions;
export const productReducer = productSlice.reducer;
