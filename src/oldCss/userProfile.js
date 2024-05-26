<div className="flex justify-center">
    <div className=" border-2 border-[#000000] border-solid">
        <div className="flex flex-col m-5">
            <div className="border-b-2">
                <span className="text-[36px] text-[#000000] font-[600] block">
                    Hồ Sơ Của Tôi
                </span>
                <span className="text-[16px] text-[#9f9f9f] font-[400] block mb-4">
                    Quản lý thông tin hồ sơ để bảo mật tài khoản
                </span>
            </div>
            <div className="flex gap-[100px] mt-4">
                <div className="content flex flex-col gap-3">
                    <div className="flex gap-4">
                        <span className="text-[18px] text-[#9f9f9f] font-[400] block min-w-[120px]">
                            Tên đăng nhập
                        </span>
                        <span className="text-[18px] text-[#000000] font-[400] block">
                            quangphuoctp
                        </span>
                    </div>
                    <div className="flex gap-4">
                        <span className="block min-w-[120px]">Tên</span>
                        <input
                            className="block bg-[#ffffff] border-solid border-[#9f9f9f] border-[1px] rounded-[10px]"
                            type="text"
                        />
                    </div>
                    <div className="flex gap-4">
                        <span className="block min-w-[120px]">Email:</span>
                        <span>tranphamquangphuoc99@gmail.com</span>
                        <a href="#">Thay đổi</a>
                    </div>
                    <div className="flex gap-4">
                        <span className="block min-w-[120px]">
                            Số điện thoại
                        </span>
                        <span>0779095590</span>
                        <a href="#">Thay đổi</a>
                    </div>
                    <div className="flex gap-4">
                        <span className="block min-w-[120px]">Giới tính</span>
                        <div>
                            <Radio.Group onChange={onChange} value={value}>
                                <Radio value={1}>Nam</Radio>
                                <Radio value={2}>Nữ</Radio>
                                <Radio value={3}>Khác</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <span className="block min-w-[120px]">Năm sinh</span>
                        <div>
                            <input type="number" />
                        </div>
                    </div>
                    <div>
                        <button>Lưu</button>
                    </div>
                </div>
                <div className="avt">
                    <img />
                    <button>Chọn Ảnh</button>
                    <p>Dung lượng file tối đa 1 MB</p>
                    <p>Định dạng: .JPEG, .PNG</p>
                </div>
            </div>
        </div>
    </div>
</div>;
