import BannerShop from "../assets/images/banner-shop.png";
import ToolbarProduct from "../components/ToolbarProduct";
import ProductList from "../components/ProductList";
import QualityDefault from "../components/QualityDefault";
import { RightOutlined } from "@ant-design/icons"
import { useEffect } from "react";

function ProductPage() {
    useEffect(()=>{
        window.scrollTo(0,0)
    }, [])

    return (
        <div>
            <div
                style={{ backgroundImage: `url(${BannerShop})` }}
                className="banner-shop w-full h-[316px] bg-cover bg-bottom flex"
            >
                <div className="text-center m-auto">
                    <span className="text-[48px] text-[#000000] font-[500] ">
                        Products
                    </span>
                    <p className="text-[16px] text-[#000000] font-[500]">
                        Home 
                        <span><RightOutlined /></span>
                        Shop
                    </p>
                </div>
            </div>
            {/* <ToolbarProduct /> */}
            <ProductList />
            <QualityDefault />
        </div>
    );
}

export default ProductPage;
