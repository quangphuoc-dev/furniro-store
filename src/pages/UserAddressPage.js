function UserAddressPage() {
    return (
        <div>
            <div>
                <div className="border-b-2">
                    <span className="header-address mx-[30px] text-[36px] text-[#000000] font-600 my-6 block">
                        Địa chỉ của tôi
                    </span>
                </div>
                <div>
                    <div className="px-[30px] my-3">
                        <span className="text-[20px] text-[#000000] font-500">
                            Địa chỉ
                        </span>
                    </div>
                    <div className="address-item mx-[30px] flex justify-between border-t-2">
                        <div className="flex flex-col">
                            <span className="text-[20px] text-[#000000] font-500 my-2">
                                Trần Phạm Quang Phước
                            </span>
                            <span className="text-[16px] text-[#9f9f9f] font-400">
                                (+84) 779095590
                            </span>
                            <span className="text-[16px] text-[#9f9f9f] font-400">
                                63 đường số 6, thôn Nhị Dinh 1
                            </span>
                            <span className="text-[16px] text-[#9f9f9f] font-400">
                                Xã Điện Phước, Thị Xã Điện Bàn, Quảng Nam
                            </span>
                            <span className="border-[1px] border-solid border-[#b88e2f] text-[#b88e2f] w-[80px] text-center block mt-3 mb-8">
                                Mặc định
                            </span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex gap-4">
                                <span className="text-[16px] text-[#000000] font-500">
                                    Cập nhật
                                </span>
                                <span className="text-[16px] text-[#000000] font-500">
                                    Xóa
                                </span>
                            </div>
                            <button className="border-[1px] border-solid border-[#9f9f9f] text-[#9f9f9f] ">
                                Thiết lập mặc định
                            </button>
                        </div>
                    </div>
                    <div className="address-item mx-[30px] flex justify-between border-t-2">
                        <div className="flex flex-col">
                            <span className="text-[20px] text-[#000000] font-500 my-2">
                                Trần Phạm Quang Phước
                            </span>
                            <span className="text-[16px] text-[#9f9f9f] font-400">
                                (+84) 779095590
                            </span>
                            <span className="text-[16px] text-[#9f9f9f] font-400">
                                63 đường số 6, thôn Nhị Dinh 1
                            </span>
                            <span className="text-[16px] text-[#9f9f9f] font-400">
                                Xã Điện Phước, Thị Xã Điện Bàn, Quảng Nam
                            </span>
                            <span className="border-[1px] border-solid border-[#b88e2f] text-[#b88e2f] w-[80px] text-center block mt-3 mb-8">
                                Mặc định
                            </span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex gap-4">
                                <span className="text-[16px] text-[#000000] font-500">
                                    Cập nhật
                                </span>
                                <span className="text-[16px] text-[#000000] font-500">
                                    Xóa
                                </span>
                            </div>
                            <button className="border-[1px] border-solid border-[#9f9f9f] text-[#9f9f9f] ">
                                Thiết lập mặc định
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserAddressPage;
