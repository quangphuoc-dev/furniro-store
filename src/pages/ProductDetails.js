import { Outlet } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import Layout from "../components/DefaultLayout";

function ProductDetails () {
    return (
    <Layout>
                <ProductItem />

    </Layout>

    )
}

export default ProductDetails;