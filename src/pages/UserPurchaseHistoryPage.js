import React from "react";
import ProfileNav from "../components/ProfileNav";
import PurchaseHistory from "../components/PurchanseHistory";

// Trang để hiển thị lịch sử mua hàng của người dùng
const UserPurchaseHistoryPage = () => {
    return (
        <div className="user-purchase-history-wrapper">
            <div className="user-purchase-history-container">
                {/* Component ProfileNav để hiển thị thanh điều hướng người dùng */}
                <div className="user-purchase-history-profile-nav">
                    <ProfileNav />
                </div>
                {/* Component PurchaseHistory để hiển thị lịch sử mua hàng */}
                <div className="user-purchase-history-change-profile">
                    <PurchaseHistory />
                </div>
            </div>
        </div>
    );
};

export default UserPurchaseHistoryPage;
