import React from "react";
import { InputNumber, Space } from "antd";
import Banner1 from "../assets/images/product1.png";
const onChange = (value) => {
    console.log("changed", value);
};

function OrderPage() {
    return (
        <div>
            <div className="flex justify-center text-[36px]">Giỏ hàng</div>
            <div className="flex justify-between h-[55px] bg-[#c9c5c5] items-center px-[20px] my-2">
                <div>
                    <span>Sản phẩm</span>
                </div>
                <div className="flex gap-[60px]">
                    <span>Đơn giá</span>
                    <span>Số lượng</span>
                    <span>Số tiền</span>
                    <span>Thao tác</span>
                </div>
            </div>
            <div className="flex justify-between bg-slate-400 items-center px-[20px] my-2 py-[20px]">
                <div>
                    <div className="flex gap-4">
                        <div>
                            <img className="w-[80px] h-[80px]" src={Banner1} />
                        </div>
                        <div className="flex flex-col mt-1">
                            <span className="block my-1 text-[20px] font-[500]">
                                Tên sản phẩm
                            </span>
                            <div className="flex gap-2">
                                <span className="block my-1 text-[16px] font-[400]">
                                    Size:
                                </span>
                                <span className="block my-1 text-[16px] font-[400]">
                                    40
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-[60px]">
                    <span>294.000</span>
                    <div>
                        <InputNumber
                            min={1}
                            max={100000}
                            defaultValue={1}
                            onChange={onChange}
                        />
                    </div>
                    <span>294.000</span>
                    <div>Xóa</div>
                </div>
            </div>
            <div className="flex justify-between bg-slate-400 items-center px-[20px] my-2 py-[20px]">
                <div>
                    <div className="flex gap-4">
                        <div>
                            <img className="w-[80px] h-[80px]" src={Banner1} />
                        </div>
                        <div className="flex flex-col mt-1">
                            <span className="block my-1 text-[20px] font-[500]">
                                Tên sản phẩm
                            </span>
                            <div className="flex gap-2">
                                <span className="block my-1 text-[16px] font-[400]">
                                    Size:
                                </span>
                                <span className="block my-1 text-[16px] font-[400]">
                                    40
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-[60px]">
                    <span>294.000</span>
                    <div>
                        <InputNumber
                            min={1}
                            max={100000}
                            defaultValue={1}
                            onChange={onChange}
                        />
                    </div>
                    <span>294.000</span>
                    <div>Xóa</div>
                </div>
            </div>
            <div className="flex justify-between bg-slate-400 items-center px-[20px] my-2 py-[20px]">
                <div>
                    <div className="flex gap-4">
                        <div>
                            <img className="w-[80px] h-[80px]" src={Banner1} />
                        </div>
                        <div className="flex flex-col mt-1">
                            <span className="block my-1 text-[20px] font-[500]">
                                Tên sản phẩm
                            </span>
                            <div className="flex gap-2">
                                <span className="block my-1 text-[16px] font-[400]">
                                    Size:
                                </span>
                                <span className="block my-1 text-[16px] font-[400]">
                                    40
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-[60px]">
                    <span>294.000</span>
                    <div>
                        <InputNumber
                            min={1}
                            max={100000}
                            defaultValue={1}
                            onChange={onChange}
                        />
                    </div>
                    <span>294.000</span>
                    <div>Xóa</div>
                </div>
            </div>
            <div className="flex justify-end items-center h-[55px] gap-6 px-[20px]">
                <div className="flex gap-2">
                    <span>Tổng thanh toán:</span>
                    <span>298.000</span>
                </div>
                <button className="bg-[#e0cd1f] text-[#ffffff] py-2 px-11 rounded-l">
                    Mua hàng
                </button>
            </div>
        </div>
    );
}

export default OrderPage;
