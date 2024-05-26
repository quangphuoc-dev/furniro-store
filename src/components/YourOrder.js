// Import các thư viện và module cần thiết
import React from "react"; // Import React để tạo component
import { useDispatch } from "react-redux"; // Import useDispatch để dispatch các action của Redux
import { actDeleteProductInCarts } from "../redux/features/cartSlice"; // Import action để xóa sản phẩm trong giỏ hàng từ Redux slice
import { Select } from "antd/es"; // Import component Select từ Ant Design
import { Controller } from "react-hook-form"; // Import Controller từ React Hook Form để quản lý form

// Khai báo component YourOrder nhận props từ parent component
const YourOrder = (props) => {
  const dispatch = useDispatch(); // Sử dụng hook useDispatch để lấy hàm dispatch của Redux
  const cartsList = JSON.parse(localStorage.getItem("key_carts_list")); // Lấy danh sách sản phẩm trong giỏ hàng từ localStorage

  // Giải cấu trúc props nhận từ parent
  const { isCheckoutPage, control, errors } = props;

  // Hàm định dạng số thành chuỗi có dấu phân cách
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

  // Hàm tính tổng tiền hóa đơn
  const getTotalMoneyInBill = () => {
    if (!cartsList) {
        return 0;
      }
    const totalMoneyInBill = cartsList.reduce((total, cart) => {
      return total + parseFloat(cart.price) * parseFloat(cart.quantity);
    }, 0);
    return formatNumber(totalMoneyInBill);
  };

  // Hàm xử lý khi xóa sản phẩm khỏi giỏ hàng
  const handleDeleteProductInYourOrder = (id) => {
    dispatch(actDeleteProductInCarts(id));
  };

  // Hàm render các sản phẩm trong giỏ hàng
  const renderProductInYourOrder = (cartsList) => {
    if (!cartsList || cartsList.length === 0) {
        return null; // Trả về null nếu cartsList không tồn tại hoặc rỗng
      }
    return cartsList.map((product) => {
      return (
        <React.Fragment key={product.id}>
          <tr>
            <td>
              <p>
                {product.name} × {product.quantity}
              </p>
              <p>Color: {product.color}</p>
              <p>Material: {product.material}</p>
              {!!isCheckoutPage ? (
                ""
              ) : (
                <p
                  style={{
                    color: "#b37e6b",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={() => handleDeleteProductInYourOrder(product.id)}
                >
                  Del
                </p>
              )}
            </td>
            <td>
              <h3>{formatNumber(product.price * product.quantity)}</h3>
            </td>
          </tr>
        </React.Fragment>
      );
    });
  };

  // JSX để render giao diện
  return (
    <div className="your-order-container">
      <div className="your-order">
        <div
          className={`${
            !!isCheckoutPage
              ? "your-order__order-detail"
              : "your-order__your-order"
          }`}
        >
          {!!isCheckoutPage ? <h3>Order details</h3> : <h3>Your order</h3>}
        </div>
        <div
          className={`${
            !!isCheckoutPage
              ? "your-order__order-detail-table-grp"
              : "your-order__your-order-table-grp"
          }`}
        >
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {renderProductInYourOrder(cartsList)}
              <tr>
                <td>
                  <h3>Subtotal</h3>
                </td>
                <td>
                  <h3>{getTotalMoneyInBill()}</h3>
                </td>
              </tr>

              {!isCheckoutPage && (
                <tr>
                  <td>
                    <h3>Shipping</h3>
                  </td>
                  <td>
                    <Controller
                      control={control}
                      name="feeShip"
                      render={({ field }) => {
                        return (
                          <Select
                            {...field}
                            allowClear
                            style={{
                              width: 200,
                            }}
                            options={[
                              {
                                value: 0,
                                label: "Normal Shipping - 0đ",
                              },
                              {
                                value: 30000,
                                label: "Fast Shipping - 30.000đ",
                              },
                            ]}
                          />
                        );
                      }}
                    />
                    {!!errors.feeShip?.message && (
                      <p style={{ color: "red", padding: "0px 10px" }}>
                        {errors.feeShip?.message}
                      </p>
                    )}
                  </td>
                </tr>
              )}

              {!isCheckoutPage && (
                <tr>
                  <td>
                    <h3>Payment</h3>
                  </td>
                  <td>
                    <Controller
                      control={control}
                      name="payment"
                      render={({ field }) => {
                        return (
                          <Select
                            {...field}
                            allowClear
                            style={{
                              width: 200,
                            }}
                            options={[
                              {
                                value: "Ship COD",
                                label: "Ship COD",
                              },
                              {
                                value: "Direct Bank Transfer",
                                label: "Direct Bank Transfer",
                              },
                            ]}
                          />
                        );
                      }}
                    />
                    {!!errors.payment?.message && (
                      <p style={{ color: "red", padding: "0px 10px" }}>
                        {errors.payment?.message}
                      </p>
                    )}
                  </td>
                </tr>
              )}
              {!!isCheckoutPage && (
                <tr>
                  <td>
                    <h3>Payment method</h3>
                  </td>
                  <td>
                    <h3>Credit card payment</h3>
                  </td>
                </tr>
              )}
              <tr>
                <td>
                  <h3>Total</h3>
                </td>
                <td>
                  <h3>{getTotalMoneyInBill()}</h3>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default YourOrder;
