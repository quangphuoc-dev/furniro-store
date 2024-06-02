import { Input, InputNumber, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import {
    actClearCarts,
    actDeleteProductInCarts,
    actUpdateQuantityOfProduct,
} from "../redux/features/cartSlice";
import { ROUTES } from "../constants/routes";
import { formatNumber } from "../utils/formatNumber";

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { carts } = useSelector((state) => state.cart);

    // Hàm xử lý sự kiện thay đổi số lượng sản phẩm trong giỏ hàng
    const onChangeQuantity = (id, quantity) => {
        dispatch(actUpdateQuantityOfProduct({ id: id, quantity: quantity }));
    };

    // Hàm xử lý sự kiện xóa sản phẩm trong giỏ hàng
    const handleDeleteProductInCarts = (productId) => {
        dispatch(actDeleteProductInCarts(productId));
    };

    // Hàm xử lý sự kiện xóa toàn bộ sản phẩm trong giỏ hàng
    const handleClearCarts = () => {
        dispatch(actClearCarts());
    };

    const handlePayment = () => {
        navigate(ROUTES.PAYMENT_PAGE);
    };

    // Hàm render danh sách sản phẩm trong giỏ hàng
    const renderCartsList = (carts) => {
        return carts.map((cart) => {
            return (
                // <div>
                //     <div className="flex gap-[40px] mx-[32px] items-center">
                //         <span></span>
                //         <span>Product</span>
                //         <span>Price</span>
                //         <span>Quantity</span>
                //         <span>Subtotal</span>
                //         <span></span>
                //     </div>
                //     <div className="flex">
                //         <div className="rounded-[10px] bg-[#F9F1E7] w-[105px] h-[105px]">
                //             <img src={cart.imgURL} />
                //         </div>
                //         <div className="flex flex-col">
                //             <span>{cart.name}</span>
                //             <span>Size: {cart.size}</span>
                //             <span>Color: {cart.color}</span>
                //         </div>
                //         <div>{formatNumber(cart.price)}</div>
                //         <div>
                //             <InputNumber
                //                 min={1}
                //                 max={99}
                //                 value={cart.quantity}
                //                 className="w-[62px] rounded-0"
                //                 onChange={(value) =>
                //                     onChangeQuantity(cart.id, value)
                //                 }
                //             />
                //         </div>
                //         <div>{formatNumber(cart.quantity * cart.price)}</div>
                //         <div>
                //             <CloseOutlined
                //                 onClick={() =>
                //                     handleDeleteProductInCarts(cart.id)
                //                 }
                //             />
                //         </div>
                //     </div>
                // </div>
                <div>
                    <div className="my-[16px]">
                        <div className="flex gap-[20px] items-center">
                            <img
                                src={cart.imgURL}
                                className=" rounded-[10px] bg-[#F9F1E7] w-[105px] h-[105px]"
                                alt=""
                            />
                            <div className="">
                                <span className="text-[16px] text-[#000000] font-[400px]">
                                    {cart.name}
                                </span>
                                <div className="flex gap-4 items-center mt-[8px]">
                                    <span className="text-[16px] text-[#000000] font-[400px] block">
                                        <InputNumber
                                            className="cart-page-shop-table__quantity"
                                            min={1}
                                            max={99}
                                            value={cart.quantity}
                                            style={{
                                                width: 62,
                                                borderRadius: 0,
                                            }}
                                            onChange={(value) =>
                                                onChangeQuantity(cart.id, value)
                                            }
                                        />
                                    </span>
                                    <span>x</span>
                                    <span className=" text-[12px] text-[#b88e2f] font-[500] block">
                                        {formatNumber(cart.price)}
                                    </span>
                                </div>
                            </div>

                            <span className="">
                                <CloseCircleOutlined
                                    onClick={() =>
                                        handleDeleteProductInCarts(cart.id)
                                    }
                                />
                            </span>
                        </div>
                    </div>
                </div>

                // <tr key={cart.id}>
                //     <td className="cart-page-shop-table__img-product">
                //         <img className="w-[50px]" src={cart.imgURL} alt="" />
                //     </td>
                //     <td className="cart-page-shop-table__name-product">
                //         <p className="name">{`${cart.name} - ${cart.material}`}</p>
                //         <p className="color">{`Color: ${cart.color}`}</p>
                //     </td>
                //     <td className="cart-page-shop-table__price-product">{`${formatNumber(
                //         cart.price
                //     )}`}</td>
                //     <td className="cart-page-shop-table__quantity-product">
                //         <div className="cart-page-shop-table__quantity-grp">
                //             <InputNumber
                //                 className="cart-page-shop-table__quantity"
                //                 min={1}
                //                 max={99}
                //                 value={cart.quantity}
                //                 style={{ width: 62, borderRadius: 0 }}
                //                 onChange={(value) =>
                //                     onChangeQuantity(cart.id, value)
                //                 }
                //             />
                //         </div>
                //     </td>
                //     <td className="cart-page-shop-table__subtotal-product">
                //         {formatNumber(cart.quantity * cart.price)}
                //     </td>
                //     <td className="cart-page-shop-table__cancel-btn">
                //         <CloseOutlined
                //             onClick={() => handleDeleteProductInCarts(cart.id)}
                //         />
                //     </td>
                // </tr>
            );
        });
    };

    return (
        // <table className="cart-page-shop-table__shop-table">
        //     <thead className="cart-page-shop-table__thead">
        //         <tr className="cart-page-shop-table__thead-tr">
        //             <th className="cart-page-shop-table__th2"></th>
        //             <th className="cart-page-shop-table__th3">Product</th>
        //             <th className="cart-page-shop-table__th4">Price</th>
        //             <th className="cart-page-shop-table__th5">Quantity</th>
        //             <th className="cart-page-shop-table__th6">Subtotal</th>
        //             <th className="cart-page-shop-table__th1"></th>
        //         </tr>
        //     </thead>

        //     <tbody className="cart-page-shop-table__tbody">
        <div className="flex flex-col">
            <div className="h-[100%]">
                <div>{renderCartsList(carts)}</div>
            </div>
            <div className="basis-1">
                <div className="flex gap-[10px] pt-[24px] border-t-2 justify-center">
                    <button
                        className="h-[30px] w-[87px] rounded-[50px] border-solid border-[1px] border-[#000000] text-[12px] text-[#000000] font-[400] "
                        onClick={() => handleClearCarts()}
                    >
                        Clear
                    </button>
                    <button
                        className="h-[30px] w-[118px] rounded-[50px] border-solid border-[1px] border-[#000000] text-[12px] text-[#000000] font-[400] "
                        onClick={() => handlePayment()}
                    >
                        View Cart
                    </button>
                </div>
            </div>
        </div>

        //     </tbody>

        //     <tfoot>
        //         <tr>
        //             <td colSpan={6}>
        //                 <div className="cart-page-shop-table__tfoot-grp">
        //                     <div className="cart-page-shop-table__tfoot-grp-left">
        //                         <Input placeholder="Coupon code " />
        //                         <button className="cart-page-shop-table__btn-apply-coupon">
        //                             <span>Apply Coupon</span>
        //                         </button>
        //                     </div>
        //                     <div style={{ display: "flex", gap: 40 }}>
        //                         <p
        //                             className="cart-page-shop-table__clear-cart"
        //                             onClick={() => handleClearCarts()}
        //                         >
        //                             clear
        //                         </p>
        //                         <button
        //                             className="cart-page-shop-table__btn-update-cart"
        //                             onClick={handlePayment}
        //                         >
        //                             <span>Update Cart</span>
        //                         </button>
        //                     </div>
        //                 </div>
        //             </td>
        //         </tr>
        //     </tfoot>
        // </table>
    );
};

export default Cart;
