import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchAllCheckoutBills } from "../redux/features/checkoutSlice";
import CartPurchase from "../components/CartPurchanse";

// Component hiển thị lịch sử mua hàng của người dùng
const PurchaseHistory = () => {
  const dispatch = useDispatch();
  const { checkoutBills } = useSelector((state) => state.checkout);
  const [cartsInCheckoutBills, setCartsInCheckoutBills] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sao chép mảng checkoutBills để tránh thay đổi trực tiếp trên state
  const checkoutBillsClone = [...checkoutBills];

  // Mở modal hiển thị chi tiết đơn hàng khi người dùng nhấn xem chi tiết
  const showModal = (id) => {
    setIsModalOpen(true);

    // Tìm index của đơn hàng trong mảng checkoutBills
    const indexThisBills = checkoutBillsClone.findIndex((bill) => {
      return bill.id === id;
    });
    // Lấy thông tin giỏ hàng trong đơn hàng và set state
    setCartsInCheckoutBills(checkoutBills[indexThisBills].carts);
  };

  // Đóng modal
  const handleOk = () => {
    setIsModalOpen(false);
  };

  // Đóng modal khi click nút hủy
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Khi component được render, fetch danh sách đơn hàng
  useEffect(() => {
    dispatch(actFetchAllCheckoutBills());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Render danh sách đơn hàng
  const renderPurchaseList = (checkoutBills) => {
    return checkoutBills.map((bill) => {
      return (
        <React.Fragment key={bill.id}>
          <tr>
            <td className="purchase-history-table__code-purchase">
              <p>{bill.orderNumber}</p>
            </td>
            <td className="purchase-history-table__date-of-bill">
              <p>{bill.dateOfBill}</p>
            </td>
            <td className="purchase-history-table__subtotal-product">
              {bill.fullName}
            </td>
            <td className="purchase-history-table__bill">
              <p onClick={() => showModal(bill.id)}>Xem chi tiết đơn hàng</p>
            </td>
          </tr>
        </React.Fragment>
      );
    });
  };

  return (
    <div className="purchase-history-wrapper">
      <div className="purchase-history">
        <div className="purchase-history-table">
          <div className="purchase-history-table__table-grp">
            <table className="purchase-history-table__shop-table">
              <thead className="purchase-history-table__thead">
                <tr className="purchase-history-table__thead-tr">
                  <th className="purchase-history-table__th1">Order number</th>
                  <th className="purchase-history-table__th3">Date</th>
                  <th className="purchase-history-table__th4">Mr/Ms</th>
                  <th className="purchase-history-table__th2">Product</th>
                </tr>
              </thead>
              <tbody className="purchase-history-table__tbody">
                {/* Render danh sách đơn hàng */}
                {renderPurchaseList(checkoutBills)}
                {/* Hiển thị component CartPurchase để hiển thị thông tin chi tiết đơn hàng */}
                <CartPurchase
                  handleOk={handleOk}
                  handleCancel={handleCancel}
                  isModalOpen={isModalOpen}
                  cartsInCheckoutBills={cartsInCheckoutBills}
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseHistory;
