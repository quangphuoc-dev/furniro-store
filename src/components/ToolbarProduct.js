// import {
//     FilterOutlined,
//     AppstoreOutlined,
//     BorderlessTableOutlined,
// } from "@ant-design/icons";
import { Select } from "antd";

function ToolbarProduct() {
    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log("search:", value);
    };

    // Filter `option.label` match the user type `input`
    const filterOption = (input, option) =>
        (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

    return (
        <div className="tool-bar h-[100px] bg-[#f9f1e7] flex justify-evenly items-center gap-[348px]">
            <div className="grid grid-cols-2 justify-evenly items-center ">
                {/* <div className="flex justify-evenly">
                    <span>
                        <FilterOutlined />
                        <span className="pl-[8px] text-[16px] text-[#000000] font-[400]">
                            Filter
                        </span>
                    </span>
                    <span>
                        <AppstoreOutlined />
                    </span>
                    <span>
                        <BorderlessTableOutlined />
                    </span>
                </div> */}
                <div>
                    <p className="pl-[32px] border-l-4 text-[16px] text-[#000000] font-[400]">
                        Showing 1-16 of 32 results
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="flex flex-cols-2 justify-center items-center">
                    <span className="block mr-[8px] text-[20px] text-[#000000] font-[400]">
                        Show
                    </span>
                    {/* <span className="rounded-0 bg-[#ffffff]  text-[20px] text-[#9f9f9f] font-[400] h-[55px] w-[55px] flex justify-center items-center">
                        16
                    </span> */}
                    <Select
                        className="rounded-0 bg-[#ffffff]  text-[20px] text-[#9f9f9f] font-[400] h-[55px] w-[188px] flex justify-center items-center"
                        showSearch
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={filterOption}
                        defaultValue="16"
                        options={[
                            {
                                value: "8",
                                label: "8",
                            },
                            {
                                value: "16",
                                label: "16",
                            },
                            {
                                value: "32",
                                label: "32",
                            },
                            {
                                value: "48",
                                label: "48",
                            },
                        ]}
                    />
                </div>
                <div className="flex flex-cols-2 justify-center items-center">
                    <span className="block mr-[8px] text-[20px] text-[#000000] font-[400]">
                        Short by
                    </span>
                    {/* <span className="rounded-0 bg-[#ffffff]  text-[20px] text-[#9f9f9f] font-[400] h-[55px] w-[188px] flex justify-center items-center">
                    </span> */}
                    <Select
                        className="rounded-0 bg-[#ffffff]  text-[20px] text-[#9f9f9f] font-[400] h-[55px] w-[188px] flex justify-center items-center"
                        showSearch
                        placeholder="Brand Name"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={filterOption}
                        defaultValue="All"
                        options={[
                            {
                                value: "All",
                                label: "All",
                            },
                            {
                                value: "adidas",
                                label: "Adidas",
                            },
                            {
                                value: "nike",
                                label: "Nike",
                            },
                            {
                                value: "mlb",
                                label: "MLB",
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}

export default ToolbarProduct;
