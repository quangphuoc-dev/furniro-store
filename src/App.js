import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/DefaultLayout";
import ProductPage from "./pages/ProductPage";
import ProductDetails from "./pages/ProductDetails";
import PaymentPage from "./pages/PaymentPage";
import Cart from "./pages/Cart";
import UserProfilePage from "./pages/UserProfilePage";
import UserPurchaseHistoryPage from "./pages/UserPurchaseHistoryPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserChangePassword from "./pages/UserChangePassword";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="products" element={<ProductPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />
                    <Route
                        path="products/:idProduct"
                        element={<ProductDetails />}
                    />
                    <Route path="payment" element={<PaymentPage />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="user" element={<UserProfilePage />}/>
                    <Route 
                        path="user/changePassword"
                        element={<UserChangePassword />}
                    />
                    <Route 
                        path="user/purchaseHistory"
                        element={<UserPurchaseHistoryPage />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
