import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import reviews from "../review";

const PrevArrow = ({ onClick }) => (
    <div className="absolute w-8 h-8 bg-[#0050c7] rounded-full z-[999] top-[40%] left-[-12px] cursor-pointer flex flex-row items-center justify-center" onClick={onClick}>
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="1"><path d="M11.326 12.1737C11.326 12.0881 11.3092 12.0033 11.2764 11.9241C11.2437 11.845 11.1957 11.773 11.1351 11.7125L7.24834 7.82613L11.1351 3.9398C11.2574 3.81746 11.3262 3.65154 11.3262 3.47852C11.3262 3.30551 11.2574 3.13958 11.1351 3.01724C11.0128 2.8949 10.8468 2.82617 10.6738 2.82617C10.5008 2.82617 10.3349 2.8949 10.2125 3.01724L5.86493 7.36485C5.80433 7.42541 5.75626 7.49732 5.72346 7.57647C5.69066 7.65562 5.67378 7.74045 5.67378 7.82613C5.67378 7.9118 5.69066 7.99664 5.72346 8.07579C5.75626 8.15494 5.80433 8.22685 5.86493 8.28741L10.2125 12.635C10.3037 12.7263 10.42 12.7884 10.5465 12.8136C10.6731 12.8388 10.8042 12.8259 10.9234 12.7765C11.0426 12.7271 11.1445 12.6435 11.2162 12.5362C11.2878 12.4289 11.326 12.3028 11.326 12.1737Z" fill="#ffffff"></path></g></svg>
    </div>
);

const NextArrow = ({ onClick }) => (
    <div className="absolute w-8 h-8 bg-[#0050c7] rounded-full z-[999] top-[40%] left-auto right-[-12px] cursor-pointer rotate-180 flex flex-row items-center justify-center" onClick={onClick} style={{ left: "auto" }}>
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="1"><path d="M11.326 12.1737C11.326 12.0881 11.3092 12.0033 11.2764 11.9241C11.2437 11.845 11.1957 11.773 11.1351 11.7125L7.24834 7.82613L11.1351 3.9398C11.2574 3.81746 11.3262 3.65154 11.3262 3.47852C11.3262 3.30551 11.2574 3.13958 11.1351 3.01724C11.0128 2.8949 10.8468 2.82617 10.6738 2.82617C10.5008 2.82617 10.3349 2.8949 10.2125 3.01724L5.86493 7.36485C5.80433 7.42541 5.75626 7.49732 5.72346 7.57647C5.69066 7.65562 5.67378 7.74045 5.67378 7.82613C5.67378 7.9118 5.69066 7.99664 5.72346 8.07579C5.75626 8.15494 5.80433 8.22685 5.86493 8.28741L10.2125 12.635C10.3037 12.7263 10.42 12.7884 10.5465 12.8136C10.6731 12.8388 10.8042 12.8259 10.9234 12.7765C11.0426 12.7271 11.1445 12.6435 11.2162 12.5362C11.2878 12.4289 11.326 12.3028 11.326 12.1737Z" fill="#ffffff"></path></g></svg>
    </div>
);

const ReviewSection = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
  };

    return (
        <div className="w-full flex flex-col gap-[32px] items-center justify-center">
            <div className="max-w-[800px]">
                <div className="w-full text-black text-center text-[48px] font-bold pt-16 section-heading">OUR HAPPY CUSTOMERS</div>
            </div>

            <div className="w-full flex items-center justify-center relative overflow-hidden">
                <div className="w-[90%] max-w-[800px] relative bg-[rgb(240,238,237)] rounded-[83.5px_0px_83.5px_0px]">
                    <Slider {...settings}>
                        {reviews.map(review => (
                            <div key={review.id}>
                                <div className="w-full flex flex-col gap-[12px] items-center justify-center p-[24px] rounded-[83.5px_0px_83.5px_0px] min-h-auto">
                                    <div className=" font-medium text-[16px] leading-[24px] text-[#14141f] text-center">
                                        {review.reviewText}
                                    </div>
                                    <div className="flex flex-col gap-[4px] items-start justify-start">
                                        <div className="w-full font-bold text-[16px] leading-[24px] text-[#14141f] text-center m-0">
                                            {review.author}
                                        </div>
                                        <p className=" font-medium text-[14px] leading-[22px] text-[#66707d] m-0">
                                            {review.authorPost}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default ReviewSection;
