import { useEffect, useState } from "react";
import category1 from "../assets/images/category1.png";
import category2 from "../assets/images/category2.png";
import category3 from "../assets/images/category3.png";
import { useNavigate, useParams } from "react-router-dom";

function Category() {
    const [listBrands, setListBrands] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch("http://localhost:4000/brands")
            .then((raw) => raw.json())
            .then((response) => {
                setListBrands(response);
            })
            .catch((error) => {
                console.log("error", error);
            });
    }, []);

    const onViewProductsByCategory = () => {
        alert("1");
        // navigate(`/products/${category}`);
    };

    return (
        <div className="category py-[55px] px-[130px] flex flex-col justify-center items-center">
            <div className="header-category mb-[48px]">
                <span className="text-[32px] text-[#333333] font-[700] block text-center">
                    Browse The Range
                </span>
                <p className="text-[20px] text-[#666666] font-[400]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <div>
                <div className="content-category flex flex-row items-center justify-center gap-[24px]">
                    {listBrands.map((item) => (
                        <div
                            className="hover:cursor-pointer hover:opacity-[0.5]"
                            onClick={onViewProductsByCategory}
                        >
                            <img
                                className="w-[381px] h-[480px] "
                                src={item.imgURL}
                            />
                            <span className="mt-[30px] block text-[24px] text-[#333333] font-[600] text-center">
                                {item.name}
                            </span>
                        </div>
                    ))}

                    {/* <div>
                        <img src={category2} />
                        <span className="mt-[30px] block text-[24px] text-[#333333] font-[600] text-center">
                            Living
                        </span>
                    </div>
                    <div>
                        <img src={category3} />
                        <span className="mt-[30px] block text-[24px] text-[#333333] font-[600] text-center">
                            Bedroom
                        </span>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Category;
