import ProductItem from "../components/ProductItem";
import ProductInfo from "../components/ProductInfo";
import ProductRelated from "../components/ProductRelated";
import { useEffect } from "react";

function ProductDetails() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <ProductItem />
            {/* <ProductInfo /> */}
            {/* <ProductRelated /> */}
        </div>
    );
}

export default ProductDetails;
