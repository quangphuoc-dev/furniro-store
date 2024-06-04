import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/DefaultLayout";
import ProductPage from "./pages/ProductPage";
import ProductDetails from "./pages/ProductDetails";
import PaymentPage from "./pages/PaymentPage";
import UserProfilePage from "./pages/UserProfilePage";
import UserPurchaseHistoryPage from "./pages/UserPurchaseHistoryPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserAddressPage from "./pages/UserAddressPage";
import UserPasswordPage from "./pages/UserPasswordPage";
import { GlobalHistory } from "./utils/globalHistory";
import { ROUTES } from "./constants/routes";
import CheckOutPage from "./pages/CheckOutPage";
import OrderPage from "./pages/OrderPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

function App() {
    return (
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" element={<Layout />}>
        //             <Route index element={<HomePage />} />
        //             <Route path="products" element={<ProductPage />} />
        //             <Route path="login" element={<LoginPage />} />
        //             <Route path="register" element={<RegisterPage />} />
        //             <Route
        //                 path="products/:idProduct"
        //                 element={<ProductDetails />}
        //             />
        //             <Route path="payment" element={<PaymentPage />} />
        //             <Route path="cart" element={<Cart />} />
        //             <Route path="user" element={<UserProfilePage />}/>
        //             <Route
        //                 path="user/purchaseHistory"
        //                 element={<UserPurchaseHistoryPage />}
        //             />
        //             <Route
        //                 path="user/address"
        //                 element={<UserAddressPage />}
        //             />
        //             <Route
        //                 path="user/password"
        //                 element={<UserPasswordPage />}
        //             />
        //         </Route>
        //     </Routes>
        // </BrowserRouter>
        <BrowserRouter>
            <GlobalHistory />
            <Routes>
                <Route element={<Layout />}>
                    <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
                    <Route
                        path={ROUTES.PRODUCT_PAGE}
                        element={<ProductPage />}
                    />
                    <Route
                        path={ROUTES.DETAIL_PRODUCT_PAGE}
                        element={<ProductDetails />}
                    />
                    <Route
                        path={ROUTES.PAYMENT_PAGE}
                        element={<PaymentPage />}
                    />
                    <Route
                        path={ROUTES.CHECK_OUT_PAGE}
                        element={<CheckOutPage />}
                    />
                    <Route
                        path={ROUTES.USER_PROFILE_PAGE}
                        element={<UserProfilePage />}
                    />
                    <Route
                        path={ROUTES.USER_PASSWORD_PAGE}
                        element={<UserPasswordPage />}
                    />
                    <Route
                        path={ROUTES.USER_PURCHASE_HISTORY_PAGE}
                        element={<UserPurchaseHistoryPage />}
                    />
                    <Route path={ROUTES.ORDER_PAGE} element={<OrderPage />} />
                    <Route
                        path={ROUTES.USER_ADDRESS_PAGE}
                        element={<UserAddressPage />}
                    />
                    <Route path={ROUTES.BLOG_PAGE} element={<BlogPage />} />
                    <Route path={ROUTES.CONTACT_PAGE} element={<ContactPage />} />
                </Route>
                <Route path={ROUTES.LOGIN_PAGE} element={<LoginPage />} />
                <Route path={ROUTES.REGISTER_PAGE} element={<RegisterPage />} />
                <Route path="/" element={<Navigate to={ROUTES.HOME_PAGE} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
