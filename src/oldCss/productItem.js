<div className="product-item px-[100px] py-[40px] flex gap-[82px]">
    <div className="product-img flex-1 flex gap-[32px] ">
        <div className="flex flex-col gap-[32px]">
            {Array.isArray(productItem.listImg) &&
                productItem.listImg.map((image, index) => (
                    <img
                        key={index}
                        src={image.imgUrl}
                        alt={`thumbnail-${index}`}
                        onClick={() => setCurrentImage(image.imgUrl)}
                        className={
                            currentImage === image.imgUrl
                                ? "active w-[80px] h-[80px]"
                                : "w-[80px] h-[80px]"
                        }
                    />
                ))}
            {/* <img
                        className="bg-[#F9F1E7] w-[76px] h-[80px]"
                        src={productItem?.listImg?.imgProduct1}
                    />
                    <img
                        className="bg-[#F9F1E7] w-[76px] h-[80px]"
                        src={productItem?.listImg?.imgProduct2}
                    />
                    <img
                        className="bg-[#F9F1E7] w-[76px] h-[80px]"
                        src={productItem?.listImg?.imgProduct3}
                    />
                    <img
                        className="bg-[#F9F1E7] w-[76px] h-[80px]"
                        src={productItem?.listImg?.imgProduct4}
                    /> */}
        </div>
        <div>
            <Image
                width={500}
                height={500}
                // src={productItem.imgURL}
                src={currentImage}
                alt="current"
            />
        </div>
    </div>
    <div className="product-info flex-1">
        <span className="text-[42px] text-[#000000] font-[400] block mb-[16px]">
            {productItem.name}
        </span>
        <span className="text-[24px] text-[#9f9f9f] font-[500] mb-[16px]">
            {productItem.price}
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
            <span className="justify-items-center border-l-4 pl-5">
                5 Customer Review
            </span>
        </div>
        <p className="text-[13px] text-[#000000] font-[400] mb-[24px]">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
        </p>
        <span className="text-[14px] text-[#9f9f9f] font-[400] my-[8px] block">
            Size
        </span>
        <div className="flex gap-3">
            <span className="bg-[#F9F1E7] text-[13px] text-[#000000] font-[400] rounded-[5px] w-[30px] h-[30px] text-center">
                {productItem?.size?.size1}
            </span>
            <span className="bg-[#F9F1E7] text-[13px] text-[#000000] font-[400] rounded-[5px] w-[30px] h-[30px] text-center">
                {productItem?.size?.size2}
            </span>
            <span className="bg-[#F9F1E7] text-[13px] text-[#000000] font-[400] rounded-[5px] w-[30px] h-[30px] text-center">
                {productItem?.size?.size3}
            </span>
            <span className="bg-[#F9F1E7] text-[13px] text-[#000000] font-[400] rounded-[5px] w-[30px] h-[30px] text-center">
                {productItem?.size?.size4}
            </span>
            <span className="bg-[#F9F1E7] text-[13px] text-[#000000] font-[400] rounded-[5px] w-[30px] h-[30px] text-center">
                {productItem?.size?.size5}
            </span>
            <span className="bg-[#F9F1E7] text-[13px] text-[#000000] font-[400] rounded-[5px] w-[30px] h-[30px] text-center">
                {productItem?.size?.size6}
            </span>
            <span className="bg-[#F9F1E7] text-[13px] text-[#000000] font-[400] rounded-[5px] w-[30px] h-[30px] text-center">
                {productItem?.size?.size7}
            </span>
            <span className="bg-[#F9F1E7] text-[13px] text-[#000000] font-[400] rounded-[5px] w-[30px] h-[30px] text-center">
                {productItem?.size?.size8}
            </span>
            <span className="bg-[#F9F1E7] text-[13px] text-[#000000] font-[400] rounded-[5px] w-[30px] h-[30px] text-center">
                {productItem?.size?.size9}
            </span>
        </div>
        <span className="text-[14px] text-[#9f9f9f] font-[400] my-[8px] block">
            Color
        </span>
        <div className="mb-[8px] flex gap-3">
            <span className="text-[24px] text-[#000000] font-[500] mb-[8px]">
                {productItem.color}
            </span>
            {/* <span className="bg-[#816dfa] w-[30px] h-[30px] rounded-[50px] block"></span>
                    <span className="bg-[#000000] w-[30px] h-[30px] rounded-[50px] block"></span>
                    <span className="bg-[#b88e2f] w-[30px] h-[30px] rounded-[50px] block"></span> */}
        </div>
        <div className="flex gap-[16px] pb-[60px] border-b-4 mt-[32px]">
            <div className="flex justify-evenly items-center rounded-[10px] border-2 border-solid border-[#9f9f9f] bg-[#ffffff] w-[123px] h-[64px]">
                <span className="text-[20px] text-[#000000] font-[400]">-</span>
                <span className="text-[20px] text-[#000000] font-[400]">1</span>
                <span className="text-[20px] text-[#000000] font-[400]">+</span>
            </div>
            <button className="text-[20px] text-[#000000] font-[400] rounded-[10px] border-2 border-solid border-[#9f9f9f] bg-[#ffffff] w-[215px] h-[64px]">
                Add To Cart
            </button>
            <button className="text-[20px] text-[#000000] font-[400] rounded-[10px] border-2 border-solid border-[#9f9f9f] bg-[#ffffff] w-[215px] h-[64px]">
                Favourite
            </button>
        </div>
        <div className="flex gap-[16px] mt-[40px]">
            <div className="flex flex-col gap-[12px]">
                <span className="text-[16px] text-[#9f9f9f] font-[400]">
                    SKU
                </span>
                <span className="text-[16px] text-[#9f9f9f] font-[400]">
                    Category
                </span>
                <span className="text-[16px] text-[#9f9f9f] font-[400]">
                    Tags
                </span>
                <span className="text-[16px] text-[#9f9f9f] font-[400]">
                    Share
                </span>
            </div>
            <div className="flex flex-col gap-[12px]">
                <span className="text-[16px] text-[#9f9f9f] font-[400]">:</span>
                <span className="text-[16px] text-[#9f9f9f] font-[400]">:</span>
                <span className="text-[16px] text-[#9f9f9f] font-[400]">:</span>
                <span className="text-[16px] text-[#9f9f9f] font-[400]">:</span>
            </div>
            <div className="flex flex-col gap-[12px]">
                <span className="text-[16px] text-[#9f9f9f] font-[400]">
                    SS001
                </span>
                <span className="text-[16px] text-[#9f9f9f] font-[400]">
                    Sofas
                </span>
                <span className="text-[16px] text-[#9f9f9f] font-[400]">
                    Sofa, Chair, Home, Shop
                </span>
                <div className="text-[16px] text-[#9f9f9f] font-[400]">
                    <span className="w-[20px] h-[20px] mr-[16px]">
                        <FacebookOutlined />
                    </span>
                    <span className="w-[20px] h-[20px] mr-[16px]">
                        <LinkedinOutlined />
                    </span>
                    <span className="w-[20px] h-[20px]">
                        <TwitterOutlined />
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>;
