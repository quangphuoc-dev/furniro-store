import BannerImg from '../assets/images/banner.png';

function Banner () {
    return (
        <div style={{backgroundImage: `url(${BannerImg})`}} className="banner-session w-full h-[718px] bg-cover bg-bottom flex items-center justify-end p-[58px]">
            {/* <img className='' src={BannerImg}/> */}
            <div className='bg-[#fff3e3] flex flex-col py-[62px] px-[42px] items-start'>
                <h3 className='font-[600] text-[16px] text-[#333333] mb-[4px]'>New Arrival</h3>
                <span className='text-[52px] text-[#b88e2f] font-[700] leading-[1.25] text-start mb-[17px]'>Discover Our <br/>New Collection</span>
                <p className='text-[18px] leading-[1.33] text-[#333333] font-[500] mb-[46px] text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br/> elit tellus, luctus nec ullamcorper mattis.</p>
                <button className='py-[25px] px-[72px] bg-[#b88e2f] text-[16px] text-[#ffffff] font-[700] w-[222px] h-[74px]'>Buy Now</button>
            </div>
        </div>
    )
}

export default Banner;