import BannerShop from "../assets/images/banner-shop.png";
import ToolbarProduct from "../components/ToolbarProduct";
import ProductList from "../components/ProductList";
import QualityDefault from "../components/QualityDefault";

function ProductPage() {
    return (
        <div>
            {/* <Header /> */}
            <div
                style={{ backgroundImage: `url(${BannerShop})` }}
                className="banner-shop w-full h-[316px] bg-cover bg-bottom flex"
            >
                <div className="text-center m-auto">
                    <span className="text-[48px] text-[#000000] font-[500] ">
                        Shop
                    </span>
                    <p className="text-[16px] text-[#000000] font-[500]">
                        Home Shop{" "}
                    </p>
                </div>
            </div>
            <ToolbarProduct />
            <ProductList />
            <QualityDefault />
            {/* <Footer /> */}
        </div>
    );
}

export default ProductPage;
