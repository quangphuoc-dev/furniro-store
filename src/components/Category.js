import category1 from "../img/category1.png";
import category2 from "../img/category2.png";
import category3 from "../img/category3.png";

function Category() {
    return (
        <div className="category py-[55px] px-[130px] flex flex-col">
            <div className="header-category mb-[48px]">
                <span className="text-[32px] text-[#333333] font-[700]">
                    Browse The Range
                </span>
                <p className="text-[20px] text-[#666666] font-[400]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <div className="content-category flex flex-row items-center justify-center gap-[24px]">
                <div className="">
                    <img src={category1} />
                    <span className="mt-[30px] block text-[24px] text-[#333333] font-[600]">Dining</span>
                </div>
                <div>
                    <img src={category2} />
                    <span className="mt-[30px] block text-[24px] text-[#333333] font-[600]">Living</span>
                </div>
                <div>
                    <img src={category3} />
                    <span className="mt-[30px] block text-[24px] text-[#333333] font-[600]">Bedroom</span>
                </div>
            </div>
        </div>
    );
}

export default Category;
