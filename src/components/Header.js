import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/header-logo.png";
import {
    UserOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from "@ant-design/icons";

// import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { useState } from "react";
import { Button, Drawer } from "antd";
import Cart from "./Cart";

function Header() {
    // const carts = useSelector() lay du lieu cart tu store
    // const items: MenuProps["items"] = [
    //     {
    //         label: <a href="http://localhost:3000/login">Login</a>,
    //         key: "0",
    //     },
    //     {
    //         type: "divider",
    //     },
    //     {
    //         label: <a href="http://localhost:3000/register">Register</a>,
    //         key: "1",
    //     },
    // ];

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <header className="h-[100px] flex flex-row items-center px-10">
            <div className="header-logo basis-1/4 px-10 flex">
                <Link to="/">
                    <img className="m-auto" src={Logo} />
                </Link>
            </div>
            <div className="header-menu basis-2/4 px-10 text-center">
                <ul className="menu-item grid grid-cols-4">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="header-icon basis-1/4 px-10  text-center">
                <ul className="icon-item grid grid-cols-3">
                    <li>
                        {/* <Dropdown menu={{ items }}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space> */}
                        <Link to="/user">
                            <UserOutlined />
                        </Link>
                        {/* </Space>
                            </a>
                        </Dropdown> */}
                    </li>
                    <li>
                        <SearchOutlined />
                    </li>
                    <li className="relative">
                        <ShoppingCartOutlined />
                        <>
                            <Button
                                type="primary"
                                onClick={() => {
                                    showDrawer()
                                }}
                            >
                                Open
                            </Button>
                            <Drawer
                                title="Shopping Cart"
                                onClose={onClose}
                                open={open}
                            >
                                < Cart closeDrawer={onClose} />
                            </Drawer>
                        </>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
