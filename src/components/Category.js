import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Category() {
    const [listBrands, setListBrands] = useState([]);
    const [products, setProducts] = useState([]);
    const [brandsWithOneProduct, setBrandsWithOneProduct] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:4000/products")
            .then((raw) => raw.json())
            .then((response) => {
                // Lọc danh sách sản phẩm để chỉ lấy một sản phẩm cho mỗi thương hiệu
                const uniqueBrands = Array.from(
                    new Set(response.map((product) => product.brandId))
                );
                const brandsWithOneProduct = uniqueBrands.map((brandId) =>
                    response.find((product) => product.brandId === brandId)
                );
                setBrandsWithOneProduct(brandsWithOneProduct);
            })
            .catch((error) => {
                console.log("error", error);
            });
    }, []);

    // Hàm điều hướng tới trang danh sách sản phẩm theo brandId
    const onViewProductsByBrandId = (brandId) => {
        navigate(`/products?brandId=${brandId}`);
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
                    {brandsWithOneProduct.map((item) => (
                        <div
                            key={item.id}
                            className="hover:cursor-pointer hover:opacity-[0.5]"
                            onClick={() => onViewProductsByBrandId(item.id)}
                        >
                            <img
                                className="w-[381px] h-[480px]"
                                src={item.imgURL}
                                alt={item.name}
                            />
                            <span className="mt-[30px] block text-[24px] text-[#333333] font-[600] text-center">
                                {item.brandsName}
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
