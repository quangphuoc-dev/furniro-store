// Import các thành phần cần thiết từ các thư viện
import { Button, Input, Radio } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import * as Yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { actCreateNewUser } from "../redux/features/userSlice";

const RegisterPage = () => {
    // Khởi tạo dispatch để gọi các hành động Redux
    const dispatch = useDispatch();
    // Khởi tạo navigate để điều hướng giữa các trang
    const navigate = useNavigate();

    // Biểu thức chính quy để kiểm tra số điện thoại
    const phoneValidation = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    // Biểu thức chính quy để kiểm tra định dạng email
    const emailValidation =
        /^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(.[a-z0-9]{2,4}){1,2}$/;

    // Định nghĩa schema validation sử dụng Yup
    const schema = Yup.object().shape({
        fullName: Yup.string().required("Please input your full name"),
        age: Yup.number()
            .positive()
            .integer()
            .required("Please input your age"),
        gender: Yup.string().required("Please input your gender"),
        user: Yup.string().required("Please input your user"),
        password: Yup.string()
            .required("Please input your password")
            .min(6, "Password length should be at least 6 characters")
            .max(12, "Password cannot exceed more than 12 characters"),
        confirmPassword: Yup.string()
            .required("Please input confirm password")
            .oneOf([Yup.ref("password")], "Passwords do not match"),
        address: Yup.string().required("Please input your address"),
        phoneNumber: Yup.string()
            .required("Please input your phone number")
            .matches(phoneValidation, "Invalid phone number"),
        email: Yup.string()
            .required("Please input your email")
            .matches(emailValidation, "Invalid email format"),
    });

    // Sử dụng useForm từ react-hook-form để quản lý trạng thái form
    const methods = useForm({
        defaultValues: {
            fullName: "",
            age: "",
            gender: "",
            user: "",
            password: "",
            confirmPassword: "",
            address: "",
            phoneNumber: "",
            email: "",
        },
        resolver: yupResolver(schema), // Sử dụng yupResolver để tích hợp Yup với react-hook-form
    });

    // Destructure các phương thức và trạng thái từ useForm
    const {
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = methods;

    // Hàm xử lý khi form hợp lệ
    const onValid = (formValue) => {
        dispatch(actCreateNewUser(formValue));
        reset(); // Reset form sau khi gửi
    };

    // Hàm chuyển hướng đến trang đăng nhập
    const handleRedirectToLoginPage = () => {
        navigate(ROUTES.LOGIN_PAGE);
    };

    return (
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
                                <Input
                                    type="text"
                                    placeholder="Full Name"
                                    {...field}
                                />
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
                                <Input
                                    type="number"
                                    placeholder="Age"
                                    {...field}
                                />
                            )}
                        />
                        {errors.age && (
                            <span style={{ color: "red" }}>
                                {errors.age.message}
                            </span>
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
                                <Input
                                    type="text"
                                    placeholder="User"
                                    {...field}
                                />
                            )}
                        />
                        {errors.user && (
                            <span style={{ color: "red" }}>
                                {errors.user.message}
                            </span>
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
                                <Input
                                    type="text"
                                    placeholder="Address"
                                    {...field}
                                />
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
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    {...field}
                                />
                            )}
                        />
                        {errors.email && (
                            <span style={{ color: "red" }}>
                                {errors.email.message}
                            </span>
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
        </div>
    );
};

export default RegisterPage;
