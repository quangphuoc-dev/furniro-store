// Import các thư viện và module cần thiết
import { Input, InputNumber } from "antd"; // Thư viện Ant Design để tạo các thành phần giao diện
import { CloseOutlined } from "@ant-design/icons"; // Icon đóng từ thư viện Ant Design
import { useDispatch, useSelector } from "react-redux"; // Hook để sử dụng Redux trong React
import React from "react"; // Thư viện React
import {
  actClearCarts,
  actDeleteProductInCarts,
  actUpdateQuantityOfProduct,
} from "../redux/features/cartSlice"; // Các action từ Redux slice cho giỏ hàng

const PaymentTable = () => {
  // Sử dụng hook useDispatch để gửi các action tới Redux store
  const dispatch = useDispatch();
  // Lấy trạng thái giỏ hàng từ Redux store
  const { carts } = useSelector((state) => state.cart);

  // Hàm định dạng số theo dạng có dấu chấm ngăn cách hàng nghìn
  const formatNumber = (num) => {
    let numString = "";
    while (num > 0) {
      let div = num % 1000;
      num = Math.floor(num / 1000);
      if (num !== 0) {
        if (div < 10) {
          div = "00" + div;
        } else if (div < 100) {
          div = "0" + div;
        }
        numString = "." + div + numString;
      } else {
        numString = div + numString;
      }
    }
    return numString;
  };

  // Hàm xử lý khi thay đổi số lượng sản phẩm
  const onChangeQuantity = (id, quantity) => {
    // Gửi action cập nhật số lượng sản phẩm tới Redux store
    dispatch(actUpdateQuantityOfProduct({ id: id, quantity: quantity }));
  };

  // Hàm xử lý khi xóa sản phẩm khỏi giỏ hàng
  const handleDeleteProductInCarts = (productId) => {
    // Gửi action xóa sản phẩm khỏi giỏ hàng tới Redux store
    dispatch(actDeleteProductInCarts(productId));
  };

  // Hàm xử lý khi xóa toàn bộ giỏ hàng
  const handleClearCarts = () => {
    // Gửi action xóa toàn bộ giỏ hàng tới Redux store
    dispatch(actClearCarts());
  };

  // Hàm render danh sách các sản phẩm trong giỏ hàng
  const renderCartsList = (carts) => {
    return carts.map((cart) => {
      return (
        <tr key={cart.id}>
          {/* Hình ảnh sản phẩm */}
          <td className="cart-page-shop-table__img-product">
            <img src={cart.imgURL} alt="" />
          </td>
          {/* Tên và màu sắc sản phẩm */}
          <td className="cart-page-shop-table__name-product">
            <p className="name">{`${cart.name} - ${cart.material}`}</p>
            <p className="color">{`Color: ${cart.color}`}</p>
          </td>
          {/* Giá sản phẩm */}
          <td className="cart-page-shop-table__price-product">{`${formatNumber(
            cart.price
          )}`}</td>
          {/* Số lượng sản phẩm */}
          <td className="cart-page-shop-table__quantity-product">
            <div className="cart-page-shop-table__quantity-grp">
              <InputNumber
                className="cart-page-shop-table__quantity"
                min={1}
                max={99}
                value={cart.quantity}
                style={{ width: 62, borderRadius: 0 }}
                onChange={(value) => onChangeQuantity(cart.id, value)}
              />
            </div>
          </td>
          {/* Tổng giá của sản phẩm (giá x số lượng) */}
          <td className="cart-page-shop-table__subtotal-product">
            {formatNumber(cart.quantity * cart.price)}
          </td>
          {/* Nút xóa sản phẩm */}
          <td className="cart-page-shop-table__cancel-btn">
            <CloseOutlined
              onClick={() => handleDeleteProductInCarts(cart.id)}
            />
          </td>
        </tr>
      );
    });
  };

  return (
    <table className="cart-page-shop-table__shop-table">
      <thead className="cart-page-shop-table__thead">
        <tr className="cart-page-shop-table__thead-tr">
          <th className="cart-page-shop-table__th2"></th>
          <th className="cart-page-shop-table__th3">Product</th>
          <th className="cart-page-shop-table__th4">Price</th>
          <th className="cart-page-shop-table__th5">Quantity</th>
          <th className="cart-page-shop-table__th6">Subtotal</th>
          <th className="cart-page-shop-table__th1"></th>
        </tr>
      </thead>

      <tbody className="cart-page-shop-table__tbody">
        {renderCartsList(carts)}
      </tbody>

      <tfoot>
        <tr>
          <td colSpan={6}>
            <div className="cart-page-shop-table__tfoot-grp">
              <div className="cart-page-shop-table__tfoot-grp-left">
                {/* Ô nhập mã giảm giá */}
                <Input placeholder="Coupon code " />
                <button className="cart-page-shop-table__btn-apply-coupon">
                  <span>Apply Coupon</span>
                </button>
              </div>
              <div style={{ display: "flex", gap: 40 }}>
                {/* Nút xóa toàn bộ giỏ hàng */}
                <p
                  className="cart-page-shop-table__clear-cart"
                  onClick={() => handleClearCarts()}
                >
                  clear
                </p>
                {/* Nút cập nhật giỏ hàng */}
                <button className="cart-page-shop-table__btn-update-cart">
                  <span>Update Cart</span>
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default PaymentTable;
