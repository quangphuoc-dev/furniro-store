import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";

function Layout() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
