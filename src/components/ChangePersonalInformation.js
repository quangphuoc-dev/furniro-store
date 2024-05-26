import React, { useEffect } from "react";
import { Button, DatePicker, Input, Radio } from "antd";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { actFetchUserById, actUpdateUserById } from "../redux/features/userSlice";
import dayjs from "dayjs";

// Component cho phép người dùng thay đổi thông tin cá nhân
const ChangePersonalInformation = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  // Định nghĩa các biểu thức chính xác sử dụng Yup
  const phoneValidation = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
  const emailValidation = /^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(.[a-z0-9]{2,4}){1,2}$/;
  const schema = Yup.object().shape({
    fullName: Yup.string().required("Please input your full name"),
    age: Yup.string().required("Please input your age"),
    email: Yup.string()
      .required("Please input your email")
      .matches(emailValidation, "type email was wrong"),
    phoneNumber: Yup.string()
      .required("Please input your phone number")
      .matches(phoneValidation, "type phone number was wrong"),
    gender: Yup.string().required("Please input your gender"),
    dateOfBirth: Yup.string().required("Please input your date of birth"),
  });

  const methods = useForm({
    defaultValues: {
      fullName: "",
      age: "",
      email: "",
      phoneNumber: "",
      gender: "",
      dateOfBirth: "",
    },
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = methods;

  // Xử lý khi form hợp lệ được gửi
  const onValid = (formValue) => {
    dispatch(
      actUpdateUserById({
        id: userInfo.id,
        userUpdate: formValue,
      })
    );
  };

  useEffect(() => {
    dispatch(actFetchUserById(userInfo.id));
    reset({ ...userInfo }); // Đặt lại form về giá trị của userInfo
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="change-pass-word-wrapper">
      <div className="change-pass-word-container">
        <div className="change-pass-word-container__title">
          <h3>My Profile</h3>
        </div>
        <form className="change-pass-word-form" onSubmit={handleSubmit(onValid)}>
          <div className="change-pass-word-form__name">
            <Controller
              control={control}
              name="fullName"
              render={({ field }) => {
                return <Input placeholder="Full name..." {...field} />;
              }}
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <span style={{ color: "red" }}>{errors.fullName?.message}</span>
          </div>

          {/* Các trường thông tin khác */}
          {/* ... */}

          <div className="change-pass-word-form__btn-save">
            <Button htmlType="submit">Save</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePersonalInformation;
