import { useEffect, useState } from "react";
import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import product3 from "../assets/images/product3.png";
import product4 from "../assets/images/product4.png";
import product5 from "../assets/images/product5.png";
import product6 from "../assets/images/product6.png";
import product7 from "../assets/images/product7.png";
import product8 from "../assets/images/product8.png";
import { Link } from "react-router-dom";

function ProductHome() {
    const [listProducts, setListProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/products")
            .then((raw) => raw.json())
            .then((repsponse) => {
                let productsView = [];
                for (let i = 0; i < 8; i++) {
                    productsView.push(repsponse[i]);
                }
                setListProducts(productsView);
            })
            .catch((error) => {
                console.log("error", error);
            });
    }, []);
    return (
        <div className="product-session py-[55px] px-[100px] mb-[70px] flex justify-center flex-col items-center">
            <div className="product-title">
                <span className="text-[40px] text-[#3a3a3a] font-[700] mb-[32px] block">
                    Our Product
                </span>
            </div>
            <div className="product-items grid-cols-4 inline-grid gap-[32px]">
                {listProducts.map((item) => (
                    <div className="hover:cursor-pointer hover:opacity-[0.5]">
                        <div className="relative">
                            <img src={item.imgURL} />
                            {!item.status?.type ? null : item.status?.type ===
                              "NEW" ? (
                                <div className="text-[16px] flex items-center justify-center leading-[1.5] text-[#ffffff] font-[500] rounded-[1000px] bg-[#71e9a3] w-[48px] h-[48px] absolute top-[24px] right-[24px]">
                                    New
                                </div>
                            ) : (
                                <div className="text-[16px] flex items-center justify-center leading-[1.5] text-[#ffffff] font-[500] rounded-[1000px] bg-[#e97171] w-[48px] h-[48px] absolute top-[24px] right-[24px]">
                                    {item.status?.value}
                                </div>
                            )}
                        </div>
                        <div className="bg-[#f4f5f7] h-[145px]">
                            <span className="text-[24px] leading-[1.2] text-[#3a3a3a] font-[600] block pt-[16px] mx-[16px]">
                                {item.name}
                            </span>
                            <p className="text-[16px] leading-[1.5] text-[#898989] font-[500] py-[8px] mx-[16px]">
                                {item.brands}
                            </p>
                            <div>
                                <span className="text-[20px] leading-[1.5] text-[3a3a3a] font-[600] pr-[16px] mx-[16px]">
                                    {item.price}
                                </span>
                                <span className="text-[16px] leading-[1.5] text-[#b0b0b0] font-[400] line-through">
                                    {item.oldPrice}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="product-btn text-[16px] font-[600] border-solid border-[1px] border-[#b88e2f] w-[245px] h-[48px] flex m-auto justify-center items-center mt-[32px] hover:bg-[#b88e2f] hover:text-[#ffffff]">
                <Link to="/products">Show More</Link>
            </div>
        </div>
    );
}

export default ProductHome;
