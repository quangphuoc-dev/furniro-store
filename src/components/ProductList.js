import React, { useEffect } from "react";
import { Col, Pagination, Row, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  actFetchAllProducts,
  filterReducer,
  setNewPage,
} from "../redux/features/productSlice";
import SpinFC from "antd/es/spin";
import { globalNavigate } from "../utils/globalHistory"; // Import globalNavigate

const ProductList = () => {
  const dispatch = useDispatch();
  const { isLoading, products, pagination, searchKey, params } = useSelector(
    (state) => state.product
  );

  // Fetch danh sách sản phẩm khi component được render
  useEffect(() => {
    dispatch(
      actFetchAllProducts({
        _page: 1,
        _limit: pagination.limitPerPage,
        q: params.search,
        ...params,
      })
    );
    return () => {
      dispatch(setNewPage(1)); // Reset trang về 1 khi component unmount
    };
    // eslint-disable-next-line
  }, []);

  // Xử lý thay đổi trang
  const handleChangePage = (newPage) => {
    dispatch(setNewPage(newPage));
    dispatch(
      actFetchAllProducts({
        _page: newPage,
        _limit: pagination.limitPerPage,
        q: searchKey,
        ...params,
      })
    );
  };

  // Fetch lại danh sách sản phẩm khi thay đổi từ khóa tìm kiếm
  useEffect(() => {
    dispatch(
      actFetchAllProducts({
        _page: 1,
        _limit: pagination.limitPerPage,
        q: searchKey,
        ...params,
      })
    );
    // eslint-disable-next-line
  }, [searchKey]);

  // Xử lý thay đổi filter
  const handleFilterChange = async (valueFilter) => {
    dispatch(filterReducer(valueFilter));
  };

  // Fetch lại danh sách sản phẩm khi thay đổi filter
  const { filter } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(
      actFetchAllProducts({
        _page: 1,
        _limit: pagination.limitPerPage,
        q: searchKey,
        ...params,
      })
    );
    // eslint-disable-next-line
  }, [filter]);

  // Hiển thị loading khi đang fetch dữ liệu
  if (isLoading) {
    return <SpinFC />;
  }

  // Render danh sách sản phẩm
  const renderProducts = (products) => {
    return products.map((product) => {
      return (
        <div
          className="hover:cursor-pointer hover:opacity-[0.5]"
          onClick={() => {
            handleProductClick(product.id);
          }}
          key={product.id}
        >
          <div className="relative">
            <img src={product.imgURL} />
            {!product.status?.type ? null : product.status?.type === "NEW" ? (
              <div className="text-[16px] flex items-center justify-center leading-[1.5] text-[#ffffff] font-[500] rounded-[1000px] bg-[#71e9a3] w-[48px] h-[48px] absolute top-[24px] right-[24px]">
                New
              </div>
            ) : (
              <div className="text-[16px] flex items-center justify-center leading-[1.5] text-[#ffffff] font-[500] rounded-[1000px] bg-[#e97171] w-[48px] h-[48px] absolute top-[24px] right-[24px]">
                {product.status?.value}
              </div>
            )}
          </div>
          <div className="bg-[#f4f5f7] p-[8px] flex flex-col justify-between gap-[4px]  h-[150px]">
            <span className="text-[20px] h-[40px] leading-[1.2] text-[#3a3a3a] font-[600] block">
              {product.name}
            </span>
            <p className="text-[16px] leading-[1.5] text-[#898989] font-[500] ">
              {product.brandsName}
            </p>
            <div>
              <span className="text-[20px] leading-[1.5] text-[3a3a3a] font-[600] pr-[16px]">
                {product.price}
              </span>
              <span className="text-[16px] leading-[1.5] text-[#b0b0b0] font-[400] line-through">
                {product.oldPrice}
              </span>
            </div>
          </div>
        </div>
      );
    });
  };

  // Xử lý khi click vào sản phẩm để chuyển đến trang detailProduct
  const handleProductClick = (productId) => {
    globalNavigate(`/products/${productId}`); // Sử dụng globalNavigate để điều hướng đến trang detailProduct
  };

  return (
    <div className="list-product">
      {/* Filter Options */}
      <div className="list-product__filter-grp">
        {/* Dropdown filter giá */}
        <Select
          defaultValue="Lọc theo giá:"
          style={{ width: 188 }}
          onChange={handleFilterChange}
          options={[
            { value: "dưới 1.500.000đ", label: "Dưới 1.500.000đ" },
            {
              value: "1.500.000đ - 5.000.000đ",
              label: "1.500.000đ - 5.000.000đ",
            },
            {
              value: "5.000.000đ - 10.000.000đ",
              label: "5.000.000đ - 10.000.000đ",
            },
            {
              value: "trên 10.000.000đ",
              label: "Trên 10.000.000đ",
            },
          ]}
        />

        {/* Dropdown sắp xếp */}
        <Select
          defaultValue="Sắp xếp theo:"
          style={{ width: 150 }}
          onChange={handleFilterChange}
          options={[
            { value: "Tên: A-Z", label: "Tên: A-Z" },
            { value: "Tên: Z-A", label: "Tên: Z-A" },
            {
              value: "Giá: Thấp đến cao",
              label: "Giá: Thấp đến cao",
            },
            {
              value: "Giá: Cao đến thấp",
              label: "Giá: Cao đến thấp",
            },
          ]}
        />
      </div>

      {/* Danh sách sản phẩm */}
      <div className="product-items inline-grid grid-cols-4 gap-[32px] py-[55px] px-[100px] mb-[70px]">
        {renderProducts(products)}
      </div>

      {/* Pagination */}
      <div className="flex flex-row justify-center items-center">
        <Pagination
          pageSize={pagination.limitPerPage}
          current={pagination.currentPage}
          total={pagination.total}
          onChange={handleChangePage}
        />
      </div>
    </div>
  );
};

export default ProductList;
