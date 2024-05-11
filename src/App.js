import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/DefaultLayout";
import ProductPage from "./pages/ProductPage";
import ProductDetails from "./pages/ProductDetails";

function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />} />
                    <Route index element={<HomePage/>}/>
                    <Route path="products" element={<ProductPage />} />
                    <Route 
                        path="products/productdetails"
                        element={<ProductDetails />}/>
                </Routes>
            </BrowserRouter>
    );
}

export default App;
