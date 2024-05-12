import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Provider } from "react-redux";


function Layout() {
    return (
        <div >
            <Header/>
            <main><Outlet/></main>
            <Footer/>
        </div>
    )
}

export default Layout;