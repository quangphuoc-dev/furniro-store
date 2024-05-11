import Category from "../components/Category";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";
import Banner from "../components/Banner";
import Layout from "../components/DefaultLayout";

function HomePage() {
    return (
        <Layout>
            <Banner />
            <Category />
            <Product />
        </Layout>
    
    );
}

export default HomePage;
