<div className="flex flex-col justify-center items-center gap-2">
    <div className="border-solid border-2 border-[#000000] rounded-[10px] p-5 bg-[#faf3ea]">
        <div>
            <span className="text-[36px] text-[#000000] font-[600] text-center block">
                Đăng ký
            </span>
        </div>
        {/* Form đăng ký */}
        <form onSubmit={handleSubmit(onValid)}>
            <div>
                <Controller
                    control={control}
                    name="fullName"
                    render={({ field }) => (
                        <Input type="text" placeholder="Full Name" {...field} />
                    )}
                />
                {errors.fullName && (
                    <span style={{ color: "red" }}>
                        {errors.fullName.message}
                    </span>
                )}
            </div>
            <div>
                <Controller
                    control={control}
                    name="age"
                    render={({ field }) => (
                        <Input type="number" placeholder="Age" {...field} />
                    )}
                />
                {errors.age && (
                    <span style={{ color: "red" }}>{errors.age.message}</span>
                )}
            </div>
            <div>
                <Controller
                    control={control}
                    name="gender"
                    render={({ field }) => (
                        <Radio.Group {...field}>
                            <Radio value="male">Male</Radio>
                            <Radio value="female">Female</Radio>
                        </Radio.Group>
                    )}
                />
                {errors.gender && (
                    <span style={{ color: "red" }}>
                        {errors.gender.message}
                    </span>
                )}
            </div>
            <div>
                <Controller
                    control={control}
                    name="user"
                    render={({ field }) => (
                        <Input type="text" placeholder="User" {...field} />
                    )}
                />
                {errors.user && (
                    <span style={{ color: "red" }}>{errors.user.message}</span>
                )}
            </div>
            <div>
                <Controller
                    control={control}
                    name="password"
                    render={({ field }) => (
                        <Input.Password
                            type="password"
                            placeholder="Password"
                            {...field}
                        />
                    )}
                />
                {errors.password && (
                    <span style={{ color: "red" }}>
                        {errors.password.message}
                    </span>
                )}
            </div>
            <div>
                <Controller
                    control={control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <Input.Password
                            type="password"
                            placeholder="Confirm Password"
                            {...field}
                        />
                    )}
                />
                {errors.confirmPassword && (
                    <span style={{ color: "red" }}>
                        {errors.confirmPassword.message}
                    </span>
                )}
            </div>
            <div>
                <Controller
                    control={control}
                    name="address"
                    render={({ field }) => (
                        <Input type="text" placeholder="Address" {...field} />
                    )}
                />
                {errors.address && (
                    <span style={{ color: "red" }}>
                        {errors.address.message}
                    </span>
                )}
            </div>
            <div>
                <Controller
                    control={control}
                    name="phoneNumber"
                    render={({ field }) => (
                        <Input
                            type="text"
                            placeholder="Phone Number"
                            {...field}
                        />
                    )}
                />
                {errors.phoneNumber && (
                    <span style={{ color: "red" }}>
                        {errors.phoneNumber.message}
                    </span>
                )}
            </div>
            <div>
                <Controller
                    control={control}
                    name="email"
                    render={({ field }) => (
                        <Input type="email" placeholder="Email" {...field} />
                    )}
                />
                {errors.email && (
                    <span style={{ color: "red" }}>{errors.email.message}</span>
                )}
            </div>
            <div className="flex justify-center">
                <Button
                    className="bg-[#b88e2f] text-[#ffffff] h-[55px] w-[237px] border-solid border-[#b88e2f] border-2 rounded-[10px] my-3"
                    htmlType="submit"
                >
                    Register
                </Button>
            </div>
        </form>
        <div className="flex gap-3 justify-end">
            <p>Already have an account?</p>
            <span
                style={{ cursor: "pointer", color: "blue" }}
                onClick={handleRedirectToLoginPage}
            >
                Login
            </span>
        </div>
    </div>
</div>;
