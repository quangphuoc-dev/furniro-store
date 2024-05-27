<div className="relative">
    <div className="absolute right-0 top-0 h-[1023px] w-[417px] bg-slate-50">
        <span className="mt-[24px] mx-[32px] text-[24px] text-[#000000] font-[600] pb-[24px] pr-[110px] border-b-2 block">
            Shopping Cart
        </span>
        <div className="my-[16px]">
            <div className="flex gap-[40px] mx-[32px] items-center">
                <img
                    src={Cart1}
                    className="basis-2/6 rounded-[10px] bg-[#F9F1E7] w-[105px] h-[105px]"
                />
                <div className="basis-3/6">
                    <span className="text-[16px] text-[#000000] font-[400px]">
                        Asgaard sofa
                    </span>
                    <div className="flex gap-4 items-center mt-[8px]">
                        <span className="text-[16px] text-[#000000] font-[400px] block">
                            1 x
                        </span>
                        <span className=" text-[12px] text-[#b88e2f] font-[500] block">
                            Rs. 250,000.00
                        </span>
                    </div>
                </div>
                <span className="basis-1/6">
                    <CloseCircleOutlined />
                </span>
            </div>
        </div>
        {/* <div className="my-[16px]">
            <div className="flex gap-[40px] mx-[32px] items-center">
                <img
                    src={Cart2}
                    className="basis-2/6 rounded-[10px] bg-[#F9F1E7] w-[105px] h-[105px]"
                />
                <div className="basis-3/6">
                    <span className="text-[16px] text-[#000000] font-[400px]">
                        Casaliving Wood
                    </span>
                    <div className="flex gap-4 items-center mt-[8px]">
                        <span className="text-[16px] text-[#000000] font-[400px] block">
                            1 x
                        </span>
                        <span className=" text-[12px] text-[#b88e2f] font-[500] block">
                            Rs. 20,000.00
                        </span>
                    </div>
                </div>
                <span className="basis-1/6">
                    <CloseCircleOutlined />
                </span>
            </div>
        </div>
        <div className="mx-[32px] flex ">
            <span className="basis-1/2 text-[16px] text-[#000000] font-[400]">
                Subtotal
            </span>
            <span className="basis-1/2 text-[16px] text-[#b88e2f] font-[600]">
                Rs. 520,000.00
            </span>
        </div> */}
        <div className="flex gap-[10px] pt-[24px] border-t-2 justify-center">
            <button className="h-[30px] w-[87px] rounded-[50px] border-solid border-[1px] border-[#000000] text-[12px] text-[#000000] font-[400] ">
                Cart
            </button>
            <button className="h-[30px] w-[118px] rounded-[50px] border-solid border-[1px] border-[#000000] text-[12px] text-[#000000] font-[400] ">
                Checkout
            </button>
            <button className="h-[30px] w-[135px] rounded-[50px] border-solid border-[1px] border-[#000000] text-[12px] text-[#000000] font-[400] ">
                Comparison
            </button>
        </div>
    </div>
</div>;
