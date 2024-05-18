import Test from "../assets/images/banner-shop.png";

function UserPurchaseHistoryPage() {
    return (
        <div className="flex flex-col justify-center">
            <div className="flex justify-center gap-4 bg-slate-400">
                <span>Tất cả</span>
                <span>Chờ thanh toán</span>
                <span>Vận chuyển</span>
                <span>Chờ giao hàng</span>
                <span>Hoàn thành</span>
                <span>Đã hủy</span>
                <span>Trả hàng/Hoàn tiền</span>
            </div>
            <div className="flex justify-center bg-slate-300">
                <input
                    className="border-solid border-[1px] border-[#000000]"
                    type="text"
                    placeholder="Tìm kiếm"
                />
            </div>
            <div className="bg-slate-200">
                <div className="flex justify-between">
                    <div className="flex gap-3">
                        <span className="text-[#ffffff] bg-[#b88e2f] font-[600]">Yêu thích</span>
                        <span>Tên sản phẩm</span>
                        <span className="text-[#ffffff] bg-[#b88e2f] font-[600]">Xem sản phẩm</span>
                    </div>
                    <div className="flex gap-3">
                        <span>Trạng thái giao hàng</span>
                        <span className="text-[#b88e2f] font-[600]">Hoàn thành</span>
                    </div>
                </div>
                <div className="flex justify-between gap-4">
                    <div className="flex justify-center gap-3">
                        <div className="">
                            <img className="w-[80px] h-[80px]" src={Test} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[20px] font-[600]">Tên sản phẩm</span>
                            <span className="font-[400] text-slate-300">Phân loại hàng: </span>
                            <span className="text-[20px] font-[600]">Số lượng:</span>
                            <span className="border-[1px] border-solid border-[#000000]">Trả hàng miễn phí 15 ngày</span>
                        </div>
                    </div>

                    <div className="">
                        <span>Giá tiền</span>
                    </div>
                </div>
                <div className="">
                    <div className="flex justify-end gap-3">
                        <span>Thành tiền:</span>
                        <span className="text-[#b88e2f] font-[6000] text-[20px]">Số tiền</span>
                    </div>
                    <div className="flex justify-end gap-3">
                        <button className="border-[1px] border-solid border-[#ffffff] bg-[#b88e2f] text-[#ffffff]">Mua Lại</button>
                        <button className="border-[1px] border-solid border-[#000000]">Liên Hệ</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPurchaseHistoryPage;
