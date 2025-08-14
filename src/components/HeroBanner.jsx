import React from "react";

const HeroBanner = () => {

    return (
        <div className="flex items-center justify-center w-full mt-[78px] bg-[rgb(242,240,241)] hero">
            <div className="max-w-[1240px] px-[0] py-[103px] flex flex-col gap-[48px] items-start justify-center hero-inner">
                <div className="flex flex-col gap-[32px] items-start justify-start hero-top">
                    <div className="text-black text-[64px] font-bold leading-[64px] relative max-w-[577px] hero-top-heading">
                        FIND CLOTHES THAT MATCHES YOUR STYLE
                        <div className="absolute top-[-35px] right-[-100px] [@media(max-width:990px)]:hidden">
                            <svg className="w-[104px] h-[104px]" xmlns="http://www.w3.org/2000/svg" width="104" height="104" viewBox="0 0 104 104" fill="none"><path d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z" fill="black"></path></svg>
                        </div>
                        <div className="absolute top-auto right-auto bottom-[-75px] left-[-90px] [@media(max-width:990px)]:hidden">
                            <svg className="w-[56px] h-[56px]" xmlns="http://www.w3.org/2000/svg" width="104" height="104" viewBox="0 0 104 104" fill="none"><path d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z" fill="black"></path></svg>
                        </div>
                    </div>
                    <div className="text-[rgba(0, 0, 0, 0.6)] text-[16px] text-center font-normal leading-[22px] max-w-[545px] hero-top-title">
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </div>
                    <div className="text-white text-[16px] font-medium cursor-pointer px-[54px] py-[16px] rounded-[62px] bg-black hero-top-btn">
                        Shop Now
                    </div>
                </div>

                <div className="flex gap-[16px] hero-bottom">
                    <div className="flex flex-col items-start justify-start pl-[16px] border-0">
                        <div className="text-black text-[40px] font-bold hero-bottom-number">
                            200+
                        </div>
                        <div className="text-[rgba(0, 0, 0, 0.6)] text-[16px] font-normal leading-[22px] hero-bottom-text">
                            International Brands
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pl-[16px] border-l border-[rgba(0,0,0,0.1)]">
                        <div className="text-black text-[40px] font-bold hero-bottom-number">
                            2000+
                        </div>
                        <div className="text-[rgba(0, 0, 0, 0.6)] text-[16px] font-normal leading-[22px] hero-bottom-text">
                            High-Quality Products
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pl-[16px] border-l border-[rgba(0,0,0,0.1)]">
                        <div className="text-black text-[40px] font-bold hero-bottom-number">
                            30,000+
                        </div>
                        <div className="text-[rgba(0, 0, 0, 0.6)] text-[16px] font-normal leading-[22px] hero-bottom-text">
                            Happy Customers
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;