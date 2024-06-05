import { GiTrophyCup } from "react-icons/gi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

function QualityDefault() {
    return (
        <div>
            <div className="grid grid-cols-4 h-[270px] bg-[#faf3ea] gap-[10px] justify-center items-center">
                <div className="quality-item flex justify-center gap-2">
                    <div className="w-[60px] h-[60px] text-[60px]">
                        <GiTrophyCup />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[25px] text-[#242424] font-[600]">
                            High Quality
                        </span>
                        <span className="text-[20px] text-[#898989] font-[500]">
                            crafted from top materials
                        </span>
                    </div>
                </div>
                <div className="quality-item flex justify-center gap-2">
                    <div className="w-[60px] h-[60px] text-[60px]">
                        <IoMdCheckmarkCircleOutline />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[25px] text-[#242424] font-[600]">
                            Warranty Protection
                        </span>
                        <span className="text-[20px] text-[#898989] font-[500]">
                            Over 2 years
                        </span>
                    </div>
                </div>
                <div className="quality-item flex justify-center gap-2">
                    <div className="w-[60px] h-[60px] text-[60px]">
                        <FaShippingFast />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[25px] text-[#242424] font-[600]">
                            Free Shipping
                        </span>
                        <span className="text-[20px] text-[#898989] font-[500]">
                            Order over 150 $
                        </span>
                    </div>
                </div>
                <div className="quality-item flex justify-center gap-2">
                    <div className="w-[60px] h-[60px] text-[60px]">
                        <BiSupport />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[25px] text-[#242424] font-[600]">
                            24 / 7 Support
                        </span>
                        <span className="text-[20px] text-[#898989] font-[500]">
                            Dedicated support
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QualityDefault;
