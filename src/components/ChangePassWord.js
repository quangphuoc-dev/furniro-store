import { Button, Form, Input } from "antd";
import React from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { actUpdatePasswordById } from "../redux/features/userSlice";

// Component để thay đổi mật khẩu người dùng
const ChangePassWord = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  // Schema để xác thực dữ liệu nhập vào
  const schema = Yup.object().shape({
    newPassword: Yup.string()
      .required("Please input your password")
      .min(6, "Password length should be at least 6 characters")
      .max(12, "Password cannot exceed more than 12 characters"),
    confirmPassword: Yup.string()
      .required("Please input confirm password")
      .oneOf([Yup.ref("newPassword")], "Password do not match"),
  });

  const methods = useForm({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = methods;

  // Xử lý khi form được submit
  const onValid = (formValueChangePassword) => {
    // Kiểm tra mật khẩu hiện tại có đúng không
    if (userInfo.password !== formValueChangePassword.currentPassword) {
      return alert("Current password is incorrect!");
    } else {
      // Nếu đúng thì dispatch action để cập nhật mật khẩu mới
      const formValuePasswordUpdate = {
        password: formValueChangePassword.newPassword,
        confirmPassword: formValueChangePassword.confirmPassword,
      };
      dispatch(
        actUpdatePasswordById({
          id: userInfo.id,
          userUpdate: formValuePasswordUpdate,
        })
      );
    }
    // Reset form sau khi submit thành công hoặc không thành công
    reset("");
  };

  return (
    <div className="change-pass-word-wrapper">
      <div className="change-pass-word-container">
        <div className="change-pass-word-container__title">
          <h3>Change your password</h3>
        </div>
        {/* Form nhập liệu để thay đổi mật khẩu */}
        <Form
          className="change-pass-word-form"
          onSubmitCapture={handleSubmit(onValid)}
        >
          {/* Input để nhập mật khẩu hiện tại */}
          <div className="change-pass-word-form__current-password">
            <Controller
              control={control}
              name="currentPassword"
              render={({ field }) => {
                return <Input placeholder="Current password..." {...field} />;
              }}
            />
          </div>

          {/* Input để nhập mật khẩu mới */}
          <div className="change-pass-word-form__new-password">
            <Controller
              control={control}
              name="newPassword"
              render={({ field }) => {
                return <Input placeholder="New password..." {...field} />;
              }}
            />
            {!!errors.newPassword?.message && (
              <i style={{ color: "red", padding: "0px 10px" }}>
                {errors.newPassword?.message}
              </i>
            )}
          </div>

          {/* Input để xác nhận mật khẩu mới */}
          <div className="change-pass-word-form__confirm-password">
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field }) => {
                return <Input placeholder="Confirm password..." {...field} />;
              }}
            />
            {!!errors.confirmPassword?.message && (
              <i style={{ color: "red", padding: "0px 10px" }}>
                {errors.confirmPassword?.message}
              </i>
            )}
          </div>

          {/* Button để lưu thay đổi */}
          <div className="change-pass-word-form__btn-save">
            <Button htmlType="submit">Save</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ChangePassWord;
