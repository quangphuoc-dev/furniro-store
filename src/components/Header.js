import Logo from "../img/header-logo.png";
import {
    UserOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from "@ant-design/icons";

function Header() {
    return (
        // <header className="h-[100px] bg-[#fff] grid grid-cols-3 content-center	justify-evenly	">
        //     <div className="header-logo flex">
        //         <img className="h-[54px]" src={Logo}></img>
        //     </div>
        //     <div className="menu">
        //         <ul className="grid grid-cols-4">
        //             <li>Home</li>
        //             <li>Shop</li>
        //             <li>About</li>
        //             <li>Contact</li>
        //         </ul>
        //     </div>
        //     <div className="header-icon">
        //         <ul className="grid grid-cols-4 ">
        //             <li>
        //                 <UserOutlined />
        //             </li>
        //             <li>
        //                 <SearchOutlined />
        //             </li>
        //             <li>
        //                 <HeartOutlined />
        //             </li>
        //             <li>
        //                 <ShoppingCartOutlined />
        //             </li>
        //         </ul>
        //     </div>
        // </header>

        <header className="h-[100px] flex flex-row items-center px-10">
            <div className="header-logo basis-1/4 px-10 flex">
                <img className="m-auto" src={Logo} />
            </div>
            <div className="header-menu basis-2/4 px-10">
                <ul className="menu-item grid grid-cols-4">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="header-icon basis-1/4 px-10">
                <ul className="icon-item grid grid-cols-3">
                    <li>
                        <UserOutlined />
                    </li>
                    <li>
                        <SearchOutlined />
                    </li>
                    <li>
                        <ShoppingCartOutlined />
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
