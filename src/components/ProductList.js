import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import product3 from "../assets/images/product3.png";
import product4 from "../assets/images/product4.png";
import product5 from "../assets/images/product5.png";
import product6 from "../assets/images/product6.png";
import product7 from "../assets/images/product7.png";
import product8 from "../assets/images/product8.png";

function ProductList() {
    return (
        <div className="flex justify-center flex-col items-center">
            <div className="toolbar"></div>
            <div className="flex justify-center flex-col">
                <div className="product-items inline-grid grid-cols-4 gap-[32px] py-[55px] px-[100px] mb-[70px]">
                    <div>
                        <div className="relative">
                            <img src={product1} />
                            <div className="text-[16px] flex items-center justify-center leading-[1.5] text-[#ffffff] font-[500] rounded-[1000px] bg-[#e97171] w-[48px] h-[48px] absolute top-[24px] right-[24px]">
                                -30%
                            </div>
                        </div>
                        <div className="bg-[#f4f5f7]   h-[145px]">
                            <span className="text-[24px] leading-[1.2] text-[#3a3a3a] font-[600] block pt-[16px]">
                                Syltherine
                            </span>
                            <p className="text-[16px] leading-[1.5] text-[#898989] font-[500] py-[8px]">
                                Stylish cafe chair
                            </p>
                            <div>
                                <span className="text-[20px] leading-[1.5] text-[3a3a3a] font-[600] pr-[16px]">
                                    Rp 2.500.000
                                </span>
                                <span className="text-[16px] leading-[1.5] text-[#b0b0b0] font-[400] line-through">
                                    Rp 3.500.000
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <img src={product2} />
                        </div>
                        <div className="bg-[#f4f5f7]   h-[145px]">
                            <span className="text-[24px] leading-[1.2] text-[#3a3a3a] font-[600] block pt-[16px]">
                                Leviosa
                            </span>
                            <p className="text-[16px] leading-[1.5] text-[#898989] font-[500] py-[8px]">
                                Stylish cafe chair
                            </p>
                            <div className="mx-[16px]">
                                <span className="text-[20px] leading-[1.5] text-[3a3a3a] font-[600] pr-[16px] block text-left">
                                    Rp 2.500.000
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <img src={product3} />
                            <div className="text-[16px] flex items-center justify-center leading-[1.5] text-[#ffffff] font-[500] rounded-[1000px] bg-[#e97171] w-[48px] h-[48px] absolute top-[24px] right-[24px]">
                                -50%
                            </div>
                        </div>
                        <div className="bg-[#f4f5f7]   h-[145px]">
                            <span className="text-[24px] leading-[1.2] text-[#3a3a3a] font-[600] block pt-[16px]">
                                Lolito
                            </span>
                            <p className="text-[16px] leading-[1.5] text-[#898989] font-[500] py-[8px]">
                                Luxury big sofa
                            </p>
                            <div>
                                <span className="text-[20px] leading-[1.5] text-[3a3a3a] font-[600] pr-[16px]">
                                    Rp 7.000.000
                                </span>
                                <span className="text-[16px] leading-[1.5] text-[#b0b0b0] font-[400] line-through">
                                    Rp 14.000.000
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <img src={product4} />
                            <div className="text-[16px] flex items-center justify-center leading-[1.5] text-[#ffffff] font-[500] rounded-[1000px] bg-[#2ec1ac] w-[48px] h-[48px] absolute top-[24px] right-[24px]">
                                -30%
                            </div>
                        </div>
                        <div className="bg-[#f4f5f7]   h-[145px]">
                            <span className="text-[24px] leading-[1.2] text-[#3a3a3a] font-[600] block pt-[16px]">
                                Respira
                            </span>
                            <p className="text-[16px] leading-[1.5] text-[#898989] font-[500] py-[8px]">
                                Outdoor bar table and stool
                            </p>
                            <div className="mx-[16px]">
                                <span className="text-[20px] leading-[1.5] text-[3a3a3a] font-[600] pr-[16px] block text-left">
                                    Rp 500.000
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <img src={product5} />
                        </div>
                        <div className="bg-[#f4f5f7]   h-[145px]">
                            <span className="text-[24px] leading-[1.2] text-[#3a3a3a] font-[600] block pt-[16px]">
                                Grifo
                            </span>
                            <p className="text-[16px] leading-[1.5] text-[#898989] font-[500] py-[8px]">
                                Night lamp
                            </p>
                            <div className="mx-[16px]">
                                <span className="text-[20px] leading-[1.5] text-[3a3a3a] font-[600] pr-[16px] block text-left">
                                    Rp 1.500.000
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <img src={product6} />
                            <div className="text-[16px] flex items-center justify-center leading-[1.5] text-[#ffffff] font-[500] rounded-[1000px] bg-[#2ec1ac] w-[48px] h-[48px] absolute top-[24px] right-[24px]">
                                -30%
                            </div>
                        </div>
                        <div className="bg-[#f4f5f7]   h-[145px]">
                            <span className="text-[24px] leading-[1.2] text-[#3a3a3a] font-[600] block pt-[16px]">
                                Muggo
                            </span>
                            <p className="text-[16px] leading-[1.5] text-[#898989] font-[500] py-[8px]">
                                Small mug
                            </p>
                            <div className="mx-[16px]">
                                <span className="text-[20px] leading-[1.5] text-[3a3a3a] font-[600] pr-[16px] block text-left">
                                    Rp 150.000
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <img src={product7} />
                            <div className="text-[16px] flex items-center justify-center leading-[1.5] text-[#ffffff] font-[500] rounded-[1000px] bg-[#e97171] w-[48px] h-[48px] absolute top-[24px] right-[24px]">
                                -50%
                            </div>
                        </div>
                        <div className="bg-[#f4f5f7]   h-[145px]">
                            <span className="text-[24px] leading-[1.2] text-[#3a3a3a] font-[600] block pt-[16px]">
                                Pingky
                            </span>
                            <p className="text-[16px] leading-[1.5] text-[#898989] font-[500] py-[8px]">
                                Cute bed set
                            </p>
                            <div>
                                <span className="text-[20px] leading-[1.5] text-[3a3a3a] font-[600] pr-[16px]">
                                    Rp 7.000.000
                                </span>
                                <span className="text-[16px] leading-[1.5] text-[#b0b0b0] font-[400] line-through">
                                    Rp 14.000.000
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <img src={product8} />
                            <div className="text-[16px] flex items-center justify-center leading-[1.5] text-[#ffffff] font-[500] rounded-[1000px] bg-[#2ec1ac] w-[48px] h-[48px] absolute top-[24px] right-[24px]">
                                -30%
                            </div>
                        </div>
                        <div className="bg-[#f4f5f7]   h-[145px]">
                            <span className="text-[24px] leading-[1.2] text-[#3a3a3a] font-[600] block pt-[16px]">
                                Potty
                            </span>
                            <p className="text-[16px] leading-[1.5] text-[#898989] font-[500] py-[8px]">
                                Minimalist flower pot
                            </p>
                            <div className="mx-[16px]">
                                <span className="text-[20px] leading-[1.5] text-[3a3a3a] font-[600] pr-[16px] block text-left">
                                    Rp 500.000
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <img src={product1} />
                            <div className="text-[16px] flex items-center justify-center leading-[1.5] text-[#ffffff] font-[500] rounded-[1000px] bg-[#e97171] w-[48px] h-[48px] absolute top-[24px] right-[24px]">
                                -30%
                            </div>
                        </div>
                        <div className="bg-[#f4f5f7]   h-[145px]">
                            <span className="text-[24px] leading-[1.2] text-[#3a3a3a] font-[600] block pt-[16px]">
                                Syltherine
                            </span>
                            <p className="text-[16px] leading-[1.5] text-[#898989] font-[500] py-[8px]">
                                Stylish cafe chair
                            </p>
                            <div>
                                <span className="text-[20px] leading-[1.5] text-[3a3a3a] font-[600] pr-[16px]">
                                    Rp 2.500.000
                                </span>
                                <span className="text-[16px] leading-[1.5] text-[#b0b0b0] font-[400] line-through">
                                    Rp 3.500.000
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <img src={product2} />
                        </div>
                        <div className="bg-[#f4f5f7]   h-[145px]">
                            <span className="text-[24px] leading-[1.2] text-[#3a3a3a] font-[600] block pt-[16px]">
                                Leviosa
                            </span>
                            <p className="text-[16px] leading-[1.5] text-[#898989] font-[500] py-[8px]">
                                Stylish cafe chair
                            </p>
                            <div className="mx-[16px]">
                                <span className="text-[20px] leading-[1.5] text-[3a3a3a] font-[600] pr-[16px] block text-left">
                                    Rp 2.500.000
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <img src={product3} />
                            <div className="text-[16px] flex items-center justify-center leading-[1.5] text-[#ffffff] font-[500] rounded-[1000px] bg-[#e97171] w-[48px] h-[48px] absolute top-[24px] right-[24px]">
                                -50%
                            </div>
                        </div>
                        <div className="bg-[#f4f5f7]   h-[145px]">
                            <span className="text-[24px] leading-[1.2] text-[#3a3a3a] font-[600] block pt-[16px]">
                                Lolito
                            </span>
                            <p className="text-[16px] leading-[1.5] text-[#898989] font-[500] py-[8px]">
                                Luxury big sofa
                            </p>
                            <div>
                                <span className="text-[20px] leading-[1.5] text-[3a3a3a] font-[600] pr-[16px]">
                                    Rp 7.000.000
                                </span>
                                <span className="text-[16px] leading-[1.5] text-[#b0b0b0] font-[400] line-through">
                                    Rp 14.000.000
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <img src={product4} />
                            <div className="text-[16px] flex items-center justify-center leading-[1.5] text-[#ffffff] font-[500] rounded-[1000px] bg-[#2ec1ac] w-[48px] h-[48px] absolute top-[24px] right-[24px]">
                                -30%
                            </div>
                        </div>
                        <div className="bg-[#f4f5f7]   h-[145px]">
                            <span className="text-[24px] leading-[1.2] text-[#3a3a3a] font-[600] block pt-[16px]">
                                Respira
                            </span>
                            <p className="text-[16px] leading-[1.5] text-[#898989] font-[500] py-[8px]">
                                Outdoor bar table and stool
                            </p>
                            <div className="mx-[16px]">
                                <span className="text-[20px] leading-[1.5] text-[3a3a3a] font-[600] pr-[16px] block text-left">
                                    Rp 500.000
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <img src={product5} />
                        </div>
                        <div className="bg-[#f4f5f7]   h-[145px]">
                            <span className="text-[24px] leading-[1.2] text-[#3a3a3a] font-[600] block pt-[16px]">
                                Grifo
                            </span>
                            <p className="text-[16px] leading-[1.5] text-[#898989] font-[500] py-[8px]">
                                Night lamp
                            </p>
                            <div className="mx-[16px]">
                                <span className="text-[20px] leading-[1.5] text-[3a3a3a] font-[600] pr-[16px] block text-left">
                                    Rp 1.500.000
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <img src={product6} />
                            <div className="text-[16px] flex items-center justify-center leading-[1.5] text-[#ffffff] font-[500] rounded-[1000px] bg-[#2ec1ac] w-[48px] h-[48px] absolute top-[24px] right-[24px]">
                                -30%
                            </div>
                        </div>
                        <div className="bg-[#f4f5f7]   h-[145px]">
                            <span className="text-[24px] leading-[1.2] text-[#3a3a3a] font-[600] block pt-[16px]">
                                Muggo
                            </span>
                            <p className="text-[16px] leading-[1.5] text-[#898989] font-[500] py-[8px]">
                                Small mug
                            </p>
                            <div className="mx-[16px]">
                                <span className="text-[20px] leading-[1.5] text-[3a3a3a] font-[600] pr-[16px] block text-left">
                                    Rp 150.000
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <img src={product7} />
                            <div className="text-[16px] flex items-center justify-center leading-[1.5] text-[#ffffff] font-[500] rounded-[1000px] bg-[#e97171] w-[48px] h-[48px] absolute top-[24px] right-[24px]">
                                -50%
                            </div>
                        </div>
                        <div className="bg-[#f4f5f7]   h-[145px]">
                            <span className="text-[24px] leading-[1.2] text-[#3a3a3a] font-[600] block pt-[16px]">
                                Pingky
                            </span>
                            <p className="text-[16px] leading-[1.5] text-[#898989] font-[500] py-[8px]">
                                Cute bed set
                            </p>
                            <div>
                                <span className="text-[20px] leading-[1.5] text-[3a3a3a] font-[600] pr-[16px]">
                                    Rp 7.000.000
                                </span>
                                <span className="text-[16px] leading-[1.5] text-[#b0b0b0] font-[400] line-through">
                                    Rp 14.000.000
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <img src={product8} />
                            <div className="text-[16px] flex items-center justify-center leading-[1.5] text-[#ffffff] font-[500] rounded-[1000px] bg-[#2ec1ac] w-[48px] h-[48px] absolute top-[24px] right-[24px]">
                                -30%
                            </div>
                        </div>
                        <div className="bg-[#f4f5f7]   h-[145px]">
                            <span className="text-[24px] leading-[1.2] text-[#3a3a3a] font-[600] block pt-[16px]">
                                Potty
                            </span>
                            <p className="text-[16px] leading-[1.5] text-[#898989] font-[500] py-[8px]">
                                Minimalist flower pot
                            </p>
                            <div className="mx-[16px]">
                                <span className="text-[20px] leading-[1.5] text-[3a3a3a] font-[600] pr-[16px] block text-left">
                                    Rp 500.000
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pagination flex justify-center gap-[38px] mb-[85px]">
                <button className="bg-[#b88e2f] rounded-[10px] w-[60px] h-[60px] flex justify-center items-center">
                    1
                </button>
                <button className="bg-[#b88e2f] rounded-[10px] w-[60px] h-[60px] flex justify-center items-center">
                    2
                </button>
                <button className="bg-[#b88e2f] rounded-[10px] w-[60px] h-[60px] flex justify-center items-center">
                    3
                </button>
                <button className="bg-[#b88e2f] rounded-[10px] w-[98px] h-[60px] flex justify-center items-center">
                    Next
                </button>
            </div>
        </div>
    );
}

export default ProductList;
