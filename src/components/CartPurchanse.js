import { InputNumber, Modal } from "antd";
import React from "react";

// Component hiển thị modal chi tiết đơn hàng
const CartPurchase = (props) => {
  const { handleOk, handleCancel, isModalOpen, cartsInCheckoutBills } = props;

  // Hàm định dạng số
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

  // Render danh sách sản phẩm trong modal
  const renderCartsModal = (cartsInCheckoutBills) => {
    return cartsInCheckoutBills.map((cart) => {
      return (
        <tr key={cart.id}>
          <td className="cart-page-shop-table__img-product">
            <img src={cart.imgURL} alt="img product" />
          </td>
          <td className="cart-page-shop-table__name-product">
            <p className="name">{cart.name}</p>
            <p className="material">{`Material: ${cart.material}`}</p>
            <p className="color">{`Color: ${cart.color}`}</p>
          </td>
          <td className="cart-page-shop-table__price-product">
            {formatNumber(cart.price)}
          </td>
          <td className="cart-page-shop-table__quantity-product">
            <InputNumber
              className="cart-page-shop-table__quantity"
              value={cart.quantity}
              readOnly
            />
          </td>
          <td className="cart-page-shop-table__subtotal-product">
            {formatNumber(cart.price * cart.quantity)}
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      {/* Modal hiển thị thông tin chi tiết đơn hàng */}
      <Modal visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className="modal-title">
          <p>Detail Purchase</p>
        </div>
        {/* Bảng hiển thị thông tin sản phẩm trong đơn hàng */}
        <table className="cart-page-shop-table__shop-table">
          <thead className="cart-page-shop-table__thead">
            <tr className="cart-page-shop-table__thead-tr">
              <th className="cart-page-shop-table__th2">Img</th>
              <th className="cart-page-shop-table__th3">Product</th>
              <th className="cart-page-shop-table__th4">Price</th>
              <th className="cart-page-shop-table__th5">Quantity</th>
              <th className="cart-page-shop-table__th6">Subtotal</th>
            </tr>
          </thead>
          <tbody className="cart-page-shop-table__tbody">
            {/* Render danh sách sản phẩm */}
            {renderCartsModal(cartsInCheckoutBills)}
          </tbody>
        </table>
      </Modal>
    </div>
  );
};

export default CartPurchase;
