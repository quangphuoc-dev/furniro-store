import React from "react";
import YourOrder from "../components/YourOrder";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
// import { actClearCarts } from "../../redux/features/cart/cartSlice";

const CheckoutPage = () => {
  const { order } = useSelector((state) => state.order);
  // console.log(order, "order");

  // Nếu không có đơn hàng, chuyển hướng đến trang chủ
  if (!order?.id) {
    // dispatch(actClearCarts()); // Hành động này nên được gọi ở đây nếu cần
    <Navigate to={ROUTES.HOME_PAGE} />;
  }

  // Tính tổng giá của đơn hàng
  // const handleCalcuTotalPrice = () => {
  //   const ordersInCart = order.carts;
  //   const result = 0;
  //   ordersInCart.forEach((item) => {
  //     return (result += parseFloat(item.price) * item.quantity);
  //   });
  //   console.log(result, "result");
  //   return result;
  // };

  return (
    <div className="check-out-container">
      <div className="check-out">
        {/* Thông báo */}
        <div className="check-out__noti">
          <p>Cảm ơn bạn! Đơn hàng của bạn đã được nhận</p>
        </div>
        {/* Thông tin đơn hàng */}
        <div className="check-out__infor-bill">
          <table>
            <thead>
              <tr>
                <th>MÃ ĐƠN HÀNG:</th>
                <th>NGÀY:</th>
                <th>TỔNG CỘNG:</th>
                <th>PHƯƠNG THỨC THANH TOÁN:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{order?.orderNumber}</td>
                <td>{order?.dateOfBill}</td>
                <td>11111111</td> {/* Placeholder cho tổng giá */}
                <td>{order?.payment}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Thông báo thanh toán */}
        <div className="check-out__payment-link-noti">
          <p>
            Nhân viên của Eunoia sẽ gửi liên kết thanh toán qua email trong vòng 24 giờ tới. Vui lòng làm theo hướng dẫn để thanh toán.
          </p>
        </div>
        {/* Bảng chi tiết đơn hàng */}
        <div className="check-out__order-detail-table">
          <YourOrder isCheckoutPage={true} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
