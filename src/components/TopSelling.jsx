import React from "react";
import products from "../product";
import ProductCard from "./ProductCard";

const TopSelling = () => {
    const topSelling = products.filter(product => product.category === "topSelling");

    return (
        <div className="w-full flex flex-row items-center justify-center">
            <div className="w-full max-w-[1240px] flex flex-col gap-[55px] items-start justify-start">
                <div className="w-full text-black text-center text-[48px] font-bold pt-16">TOP SELLING</div>

                <ProductCard products={topSelling}/>
            </div>
        </div>
    );
};

export default TopSelling;