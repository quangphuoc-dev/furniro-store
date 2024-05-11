import AsgaardImg1 from "../assets/images/Asgaard sofa.png";
import AsgaardImg2 from "../assets/images/Asgaard sofa2.png";
import AsgaardImg3 from "../assets/images/Asgaard sofa3.png";
import AsgaardImg4 from "../assets/images/Asgaard sofa4.png";
import AsgaardImg5 from "../assets/images/Asgaard sofa5.png";
import {
    StarOutlined,
    FacebookOutlined,
    LinkedinOutlined,
    TwitterOutlined,
} from "@ant-design/icons";

function ProductItem() {
    return (
        <div className="product-item px-[100px] py-[40px] flex gap-[82px]">
            <div className="product-img flex-1 flex gap-[32px] ">
                <div className="flex flex-col gap-[32px]">
                    <img className="bg-[#F9F1E7]" src={AsgaardImg2} />
                    <img className="bg-[#F9F1E7]" src={AsgaardImg3} />
                    <img className="bg-[#F9F1E7]" src={AsgaardImg4} />
                    <img className="bg-[#F9F1E7]" src={AsgaardImg5} />
                </div>
                <div>
                    <img className="bg-[#F9F1E7] h-[500px]" src={AsgaardImg1} />
                </div>
            </div>
            <div className="product-info flex-1">
                <span className="text-[42px] text-[#000000] font-[400] block mb-[16px]">
                    Asgaard sofa
                </span>
                <span className="text-[24px] text-[#9f9f9f] font-[500] mb-[16px]">
                    Rs. 250,000.00
                </span>
                <div className="flex mb-[16px]">
                    <div className="justify-items-center pr-5 flex gap-1">
                        <span>
                            <StarOutlined />
                        </span>
                        <span>
                            <StarOutlined />
                        </span>
                        <span>
                            <StarOutlined />
                        </span>
                        <span>
                            <StarOutlined />
                        </span>
                        <span>
                            <StarOutlined />
                        </span>
                    </div>
                    <span className="justify-items-center border-l-4 pl-5">5 Customer Review</span>
                </div>
                <p className="text-[13px] text-[#000000] font-[400] mb-[24px]">
                    Setting the bar as one of the loudest speakers in its class,
                    the Kilburn is a compact, stout-hearted hero with a
                    well-balanced audio which boasts a clear midrange and
                    extended highs for a sound.
                </p>
                <span className="text-[14px] text-[#9f9f9f] font-[400] mb-[8px] block">Size</span>
                <div className="flex gap-3">
                    <span className="bg-[#b88e2f] text-[13px] text-[#000000] font-[400] rounded-[5px] w-[30px] h-[30px] text-center">L</span>
                    <span className="bg-[#F9F1E7] text-[13px] text-[#000000] font-[400] rounded-[5px] w-[30px] h-[30px] text-center">XL</span>
                    <span className="bg-[#F9F1E7] text-[13px] text-[#000000] font-[400] rounded-[5px] w-[30px] h-[30px] text-center">XS</span>
                    
                </div>
                <span className="text-[14px] text-[#9f9f9f] font-[400] mb-[8px] block">Color</span>
                <div className="mb-[8px] flex gap-3">
                    <span className="bg-[#816dfa] w-[30px] h-[30px] rounded-[50px] block"></span>
                    <span className="bg-[#000000] w-[30px] h-[30px] rounded-[50px] block"></span>
                    <span className="bg-[#b88e2f] w-[30px] h-[30px] rounded-[50px] block"></span>
                </div>
                <div className="flex gap-[16px] pb-[60px] border-b-4 mt-[32px]">
                    <div className="flex justify-evenly items-center rounded-[10px] border-2 border-solid border-[#9f9f9f] bg-[#ffffff] w-[123px] h-[64px]">
                        <span className="text-[20px] text-[#000000] font-[400]">-</span>
                        <span className="text-[20px] text-[#000000] font-[400]">1</span>
                        <span className="text-[20px] text-[#000000] font-[400]">+</span>
                    </div>
                    <button className="text-[20px] text-[#000000] font-[400] rounded-[10px] border-2 border-solid border-[#9f9f9f] bg-[#ffffff] w-[215px] h-[64px]">Add To Cart</button>
                    <button className="text-[20px] text-[#000000] font-[400] rounded-[10px] border-2 border-solid border-[#9f9f9f] bg-[#ffffff] w-[215px] h-[64px]">+ Compare</button>
                </div>
                <div className="flex gap-[16px] mt-[40px]">
                    <div className="flex flex-col gap-[12px]">
                        <span className="text-[16px] text-[#9f9f9f] font-[400]">SKU</span>
                        <span className="text-[16px] text-[#9f9f9f] font-[400]">Category</span>
                        <span className="text-[16px] text-[#9f9f9f] font-[400]">Tags</span>
                        <span className="text-[16px] text-[#9f9f9f] font-[400]">Share</span>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                        <span className="text-[16px] text-[#9f9f9f] font-[400]">:</span>
                        <span className="text-[16px] text-[#9f9f9f] font-[400]">:</span>
                        <span className="text-[16px] text-[#9f9f9f] font-[400]">:</span>
                        <span className="text-[16px] text-[#9f9f9f] font-[400]">:</span>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                        <span className="text-[16px] text-[#9f9f9f] font-[400]">SS001</span>
                        <span className="text-[16px] text-[#9f9f9f] font-[400]">Sofas</span>
                        <span className="text-[16px] text-[#9f9f9f] font-[400]">Sofa, Chair, Home, Shop</span>
                        <div className="text-[16px] text-[#9f9f9f] font-[400]">
                            <span className="w-[20px] h-[20px] mr-[16px]"><FacebookOutlined /></span>
                            <span className="w-[20px] h-[20px] mr-[16px]"><LinkedinOutlined /></span>
                            <span className="w-[20px] h-[20px]"><TwitterOutlined /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
