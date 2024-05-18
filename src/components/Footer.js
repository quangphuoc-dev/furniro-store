import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="px-[100px] py-[40px] border-t-4">
            <div className="flex flex-col text-left">
                <div className="basis-1/3 my-5">
                    <div className="grid grid-cols-4">
                        <div className="">
                            <a
                                href="#"
                                className="font-[700] text-[24px] text-[#000000] block mb-[32px]"
                            >
                                Furniro.
                            </a>
                            <p className="text-[16px] text-[#9f9f9f] text-[400]">
                                400 University Drive Suite 200 Coral <br />{" "}
                                Gables,
                                <br />
                                FL 33134 USA
                            </p>
                        </div>
                        <div>
                            <a
                                href="#"
                                className="font-[500] text-[16px] text-[#9f9f9f] block mb-[32px] "
                            >
                                Link
                            </a>
                            <ul className="">
                                <li className="text-[16px] text-[#000000] font-[500] mb-[45px]">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="text-[16px] text-[#000000] font-[500] mb-[45px]">
                                    <Link to="/products">Product</Link>
                                </li>
                                <li className="text-[16px] text-[#000000] font-[500] mb-[45px]">
                                    About
                                </li>
                                <li className="text-[16px] text-[#000000] font-[500] mb-[45px]">
                                    Contact
                                </li>
                            </ul>
                        </div>
                        <div>
                            <a
                                href="#"
                                className="font-[500] text-[16px] text-[#9f9f9f] block mb-[32px]"
                            >
                                Help
                            </a>
                            <ul className="">
                                <li className="text-[16px] text-[#000000] font-[500] mb-[45px]">
                                    Payment Options
                                </li>
                                <li className="text-[16px] text-[#000000] font-[500] mb-[45px]">
                                    Returns
                                </li>
                                <li className="text-[16px] text-[#000000] font-[500] mb-[45px]">
                                    Privacy Policies
                                </li>
                            </ul>
                        </div>
                        <div>
                            <a
                                href="#"
                                className="font-[500] text-[16px] text-[#9f9f9f] block mb-[32px]"
                            >
                                Newsletter
                            </a>
                            <div>
                                <input
                                    className="border-b-4 mr-[40px]"
                                    placeholder="Enter Your Email Address"
                                />
                                <a className="border-b-4 uppercase">Subcribe</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-[16px] text-[#000000] font-[400] py-5 text-left border-t-4">
                    2023 furino. All rights reverved
                </p>
            </div>
        </footer>
    );
}

export default Footer;
