import { Link } from "react-router-dom";
import Logo from "../assets/images/header-logo.png";
import {
    UserOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from "@ant-design/icons";

function Header() {
    
    return (
        <header className="h-[100px] flex flex-row items-center px-10">
            <div className="header-logo basis-1/4 px-10 flex">
                <img className="m-auto" src={Logo} />
            </div>
            <div className="header-menu basis-2/4 px-10 text-center">
                <ul className="menu-item grid grid-cols-4">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link>

                    </li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="header-icon basis-1/4 px-10  text-center">
                <ul className="icon-item grid grid-cols-3">
                    <li><Link to="/user">
                    <UserOutlined />

                    </Link>
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
