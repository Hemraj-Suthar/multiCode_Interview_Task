import React from "react";

const ProductCard = ({products}) => {

    return (
        <div className="w-full grid gap-[20px] [grid-template-columns:repeat(auto-fill,minmax(295px,1fr))] place-items-center">
            {products.map(product => (
                <div key={product.id} className="flex flex-col gap-4 items-start justify-start animate-[iAjNNh_0.5s_ease-in-out]">
                    <div className="w-[295px] h-[298px]" style={{ backgroundImage: `url(${product.image})` }}></div>
                    <div className="flex flex-col gap-[9px] items-start justify-start product-content">
                        <div className="text-black text-[20px] font-bold overflow-hidden text-ellipsis line-clamp-1t product-title">{product.title}</div>
                        <div className="flex gap-[6px] items-center justify-start">
                            {Array.from({ length: product.ratingIconQuantity }).map((_, index) => (
                                <React.Fragment key={index}>
                                    {product.ratingIcon}
                                </React.Fragment>
                            ))}
                            <div className="text-black text-[14px] font-normal">
                                {product.rating}/
                                <span className="text-black/60">5</span>
                            </div>
                        </div>
                        <div className="text-black text-5 font-bold product-price">{product.price}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;
