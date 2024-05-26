<div className="flex flex-col justify-center items-center gap-2 ">
    <div className="border-solid border-2 border-[#000000] rounded-[10px] p-5 bg-[#faf3ea]">
        <div>
            <span className="text-[36px] text-[#000000] font-[600] text-center block">
                Đăng nhập
            </span>
        </div>
        {/* Form đăng nhập */}
        <div>
            <Controller
                control={control}
                name="user"
                render={({ field }) => (
                    <Input type="text" placeholder="Account" {...field} />
                )}
            />
            {errorsValidate.user && (
                <span style={{ color: "red" }}>
                    {errorsValidate.user?.message}
                </span>
            )}
            <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
                    <Input.Password
                        type="password"
                        placeholder="Password"
                        autoComplete="on"
                        value={value}
                        onChange={onChange}
                    />
                )}
            />
            {errorsValidate.password && (
                <span style={{ color: "red" }}>
                    {errorsValidate.password?.message}
                </span>
            )}
        </div>
        <div className="flex justify-center">
            <Button
                className="bg-[#b88e2f] text-[#ffffff] h-[55px] w-[237px] border-solid border-[#b88e2f] border-2 rounded-[10px] my-3"
                onClick={handleSubmit(onValid)} // Chỉnh sửa: sử dụng handleSubmit để xử lý sự kiện onClick
            >
                Login
            </Button>
        </div>
        <div className="flex gap-3 justify-end">
            <p>Bạn chưa có tài khoản?</p>
            <span
                style={{ cursor: "pointer", color: "blue" }}
                onClick={handleRedirectToRegisterPage}
            >
                Đăng kí
            </span>
        </div>
    </div>
</div>;
