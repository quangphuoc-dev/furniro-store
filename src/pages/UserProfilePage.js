import React from "react";
import ChangePersonalInformation from "../components/ChangePersonalInformation";
import ProfileNav from "../components/ProfileNav";

// Trang cá nhân người dùng, cho phép thay đổi thông tin cá nhân và hiển thị menu điều hướng
const UserProfilePage = () => {
  return (
    <div className="user-profile-wrapper">
      <div className="user-profile-container">
        {/* Phần menu điều hướng */}
        <div className="user-profile-profile-nav">
          <ProfileNav />
        </div>
        {/* Phần thay đổi thông tin cá nhân */}
        <div className="user-profile-change-profile">
          <ChangePersonalInformation />
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
