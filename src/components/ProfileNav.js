import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { useSelector } from "react-redux";

// Component hiển thị thanh điều hướng hồ sơ người dùng
const ProfileNav = () => {
  // Lấy thông tin người dùng từ kho Redux
  const userInfo = useSelector((state) => state.user.userInfo);
  const navigate = useNavigate();

  return (
    <div className="profile-nav-wrapper">
      <div className="profile-nav">
        {/* Hiển thị ảnh đại diện của người dùng */}
        <div className="profile-nav__avatar-grp">
          {!!userInfo?.avatarURL ? (
            <img
              src={userInfo?.avatarURL}
              alt=""
              className="profile-nav__avatar-grp--avatar"
            />
          ) : (
            <img
              src="https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
              alt=""
              className="profile-nav__avatar-grp--avatar"
            />
          )}

          {/* Hiển thị tên người dùng */}
          <div>
            <p className="profile-nav__avatar-grp--user-name">
              {userInfo?.user}
            </p>
          </div>
        </div>

        {/* Hiển thị danh sách các tùy chọn thông tin hồ sơ */}
        <div className="profile-nav__list-information-grp">
          <ul className="profile-nav__list-information">
            {/* Tùy chọn thay đổi hồ sơ */}
            <li
              className="profile-nav__list-information--change-profile"
              onClick={() => {
                navigate(ROUTES.USER_PROFILE_PAGE);
              }}
            >
              Thay đổi hồ sơ
            </li>
            {/* Tùy chọn thay đổi mật khẩu */}
            <li
              className="profile-nav__list-information--change-password"
              onClick={() => {
                navigate(ROUTES.USER_CHANGE_PASSWORD_PAGE);
              }}
            >
              Thay đổi mật khẩu
            </li>
            {/* Tùy chọn xem lịch sử mua hàng */}
            <li
              className="profile-nav__list-information--purchase-history"
              onClick={() => {
                navigate(ROUTES.USER_PURCHASE_HISTORY_PAGE);
              }}
            >
              Xem lịch sử mua hàng
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileNav;
