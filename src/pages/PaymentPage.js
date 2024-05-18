import QualityDefault from "../components/QualityDefault";

function PaymentPage() {
    return (
        <div>
            <div className="my-[56px] mx-[100px] flex justify-center gap-[24px]">
                <div className="billing-form flex flex-col my-[35px] mx-[74px]">
                    <span className="text-[36px] text-[#000000] font-600">
                        Biiling details
                    </span>
                    <div className="flex flex-col">
                        <label className="text-[16px] text-[#000000] font-500 my-[12px]">
                            Họ và tên
                        </label>
                        <input className="border-[1px] border-solid border-[#9f9f9f] rounded-[10px] w-[453px] h-[45px]" />
                        <label className="text-[16px] text-[#000000] font-500 my-[12px]">
                            Số điện thoại
                        </label>
                        <input className="border-[1px] border-solid border-[#9f9f9f] rounded-[10px] w-[453px] h-[45px]" />
                        <label className="text-[16px] text-[#000000] font-500 my-[12px]">
                            Tỉnh/ Thành phố
                        </label>
                        <input className="border-[1px] border-solid border-[#9f9f9f] rounded-[10px] w-[453px] h-[45px]" />
                        <label className="text-[16px] text-[#000000] font-500 my-[12px]">
                            Quận/ Huyện
                        </label>
                        <input className="border-[1px] border-solid border-[#9f9f9f] rounded-[10px] w-[453px] h-[45px]" />
                        <label className="text-[16px] text-[#000000] font-500 my-[12px]">
                            Xã/ Phường
                        </label>
                        <input className="border-[1px] border-solid border-[#9f9f9f] rounded-[10px] w-[453px] h-[45px]" />
                        <label className="text-[16px] text-[#000000] font-500 my-[12px]">
                            Địa chỉ cụ thể
                        </label>
                        <input className="border-[1px] border-solid border-[#9f9f9f] rounded-[10px] w-[453px] h-[45px]" />
                    </div>
                    <span className="text-[16px] text-[#000000] font-500 my-[12px]">
                        Loại địa chỉ:
                    </span>
                    <div className="flex gap-2">
                        <button className="border-[1px] border-solid border-[#9f9f9f] rounded-[10px] w-[200px] h-[45px]">
                            Nhà Riêng
                        </button>
                        <button className="border-[1px] border-solid border-[#9f9f9f] rounded-[10px] w-[200px] h-[45px]">
                            Văn phòng
                        </button>
                    </div>
                </div>
                <div className="billing-info">
                    <div className="my-[87px] mx-[37px]">
                        <div className="flex justify-between gap-[250px] my-4">
                            <span className="text-[24px] text-[#000000] font-500">
                                Product
                            </span>
                            <span className="text-[24px] text-[#000000] font-500">
                                Subtotal
                            </span>
                        </div>
                        <div className="flex justify-between my-4">
                            <span className="text-[16px] text-[#9f9f9f] font-[400]">
                                Tên sản phẩm
                            </span>
                            <span className="text-[16px] text-[#9f9f9f] font-[400]">
                                948.000
                            </span>
                        </div>
                        <div className="flex justify-between my-4">
                            <span className="text-[16px] text-[#000000] font-[400]">
                                Total
                            </span>
                            <span className="text-[24px] text-[#b88e2f] font-[700]">
                                948.000
                            </span>
                        </div>
                        <div className="flex justify-center border-t-2">
                            <button className="border-[1px] border-solid border-[#000000] w-[318px] h-[64px] rounded-[15px] text-[20px] text-[#000000] font-[400] my-[40px]">
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <QualityDefault />
        </div>
    );
}

export default PaymentPage;
