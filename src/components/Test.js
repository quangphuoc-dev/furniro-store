<div className="flex justify-center flex-col">
    <div className="product-products inline-grid grid-cols-4 gap-[32px] py-[55px] px-[100px] mb-[70px]">
        <div
            className="hover:cursor-pointer hover:opacity-[0.5]"
            onClick={() => {
                handleProductClick(product.id);
            }}
        >
            <div className="relative">
                <img src={product.imgURL} />
                {!product.status?.type ? null : product.status?.type ===
                  "NEW" ? (
                    <div className="text-[16px] flex products-center justify-center leading-[1.5] text-[#ffffff] font-[500] rounded-[1000px] bg-[#71e9a3] w-[48px] h-[48px] absolute top-[24px] right-[24px]">
                        New
                    </div>
                ) : (
                    <div className="text-[16px] flex products-center justify-center leading-[1.5] text-[#ffffff] font-[500] rounded-[1000px] bg-[#e97171] w-[48px] h-[48px] absolute top-[24px] right-[24px]">
                        {product.status?.value}
                    </div>
                )}
            </div>
            <div className="bg-[#f4f5f7]   h-[145px]">
                <span className="text-[24px] leading-[1.2] text-[#3a3a3a] font-[600] block pt-[16px]">
                    {product.name}
                </span>
                <p className="text-[16px] leading-[1.5] text-[#898989] font-[500] py-[8px]">
                    {product.brands}
                </p>
                <div>
                    <span className="text-[20px] leading-[1.5] text-[3a3a3a] font-[600] pr-[16px]">
                        {product.price}
                    </span>
                    <span className="text-[16px] leading-[1.5] text-[#b0b0b0] font-[400] line-through">
                        {product.oldPrice}
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>;
