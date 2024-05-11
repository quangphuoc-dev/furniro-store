import {
    FilterOutlined,
    AppstoreOutlined,
    BorderlessTableOutlined
} from '@ant-design/icons';

function ToolbarProduct () {
    return (
        <div className="tool-bar h-[100px] bg-[#f9f1e7] flex justify-evenly">
            <div className="tool-bar-item flex ">
                <div>
                    <span>
                        <FilterOutlined />
                        Filter
                    </span>    
                    <span><AppstoreOutlined /></span>    
                    <span><BorderlessTableOutlined /></span>  
                </div>                  
                <div>
                    <p>Showing 1-16 of 32 results</p>
                </div>
            </div>
            <div className="tool-bar-item">
                <div>
                    Show
                    <span>16</span>
                </div>
                <div>
                    Short by
                    <span>Default</span>
                </div>
            </div>
        </div>
    )
}

export default ToolbarProduct;