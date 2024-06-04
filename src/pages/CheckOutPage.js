import React from "react";
import YourOrder from "../components/YourOrder";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { Card, Icon, Badge, Result } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
// import { actClearCarts } from "../../redux/features/cart/cartSlice";

const CheckoutPage = () => {
    const { order } = useSelector((state) => state.order);
    console.log(order, "order");

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
            
            <div className="check-out my-5">
            <div>
                <Result
                    status="success"
                    title="Cảm ơn bạn! Đơn hàng của bạn đã được nhận"
                />
            </div>
                {/* Thông tin đơn hàng */}
                <div className="check-out__infor-bill flex justify-center gap-10 py-2">
                    <div className="flex flex-col">
                        <span>MÃ ĐƠN HÀNG</span>
                        <span>NGÀY</span>
                        <span>TỔNG CỘNG</span>
                        <span>PHƯƠNG THỨC THANH TOÁN</span>
                    </div>
                    <div className="flex flex-col">
                        <div>:</div>
                        <div>:</div>
                        <div>:</div>
                        <div>:</div>
                    </div>
                    <div className="flex flex-col">
                        <span>{order?.orderNumber}</span>
                        <span>{order?.dateOfBill}</span>
                        <span>{order?.total}</span>
                        <span>{order?.payment}</span>
                    </div>
                </div>
                {/* Thông báo thanh toán */}
                <div className="check-out__payment-link-noti flex justify-center py-2">
                    <p>
                        Nhân viên của Furniro sẽ gửi liên kết thanh toán qua
                        email trong vòng 24 giờ tới. Vui lòng làm theo hướng dẫn
                        để thanh toán.
                    </p>
                </div>
                {/* Bảng chi tiết đơn hàng */}
                {/* <div className="check-out__order-detail-table">
                    <YourOrder isCheckoutPage={true} />
                </div> */}
            </div>
        </div>
    );
};

export default CheckoutPage;
