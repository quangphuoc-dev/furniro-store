import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Category from "./components/Category";
import Product from "./components/Product";

function App() {
    return (
        <div className="App">
            <Header />
            <Banner />
            {/* xử lý router */}
            <Category />
            <Product />
            <Footer />
        </div>
    );
}

export default App;
