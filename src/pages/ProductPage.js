import Product from "../components/Product";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BannerShop from "../assets/images/banner-shop.png"
import ToolbarProduct from "../components/ToolbarProduct";
import ProductList from "../components/ProductList";
import Layout from "../components/DefaultLayout";

function ProductPage() {
    return (
        <Layout>
            <div>
            {/* <Header /> */}
            <div style={{backgroundImage: `url(${BannerShop})`}} className="banner-shop w-full h-[316px] bg-cover bg-bottom flex">
                <div className="text-center m-auto">
                    <span className="text-[48px] text-[#000000] font-[500] ">Shop</span>
                    <p className="text-[16px] text-[#000000] font-[500]">Home Shop </p>
                </div>
            </div>
            <ToolbarProduct />
            <ProductList />
            {/* <Footer /> */}
        </div>
        </Layout>
    )
}

export default ProductPage;