import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Provider } from "react-redux";


function Layout({children}) {
    return (
        <div >
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}

export default Layout;