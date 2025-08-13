import React, { useState } from "react";
import products from "../product.jsx";
import ProductCard from "./ProductCard.jsx";

const NewArrvial = () => {
    const [viewAll, setViewAll] = useState(false);
    const newArrivalProducts = viewAll ? products.filter(product => product.category === "new") : products.filter(product => product.category === "new").slice(0, 4);

    return (
        <div className="w-full max-w-[1240px] mx-auto flex flex-col gap-[55px] items-start justify-center">
            <div className="w-full text-black text-center text-[48px] font-bold pt-16 section-heading">NEW ARRIVALS</div>

            <ProductCard products={newArrivalProducts}/>

            {!viewAll && (
                <div className="w-full flex items-center justify-center">
                    <div onClick={() => setViewAll(true)} className="text-center rounded-[62px] border border-black/10 px-[54px] py-4 cursor-pointer">View All</div>
                </div>
            )}
        </div>
    );
};

export default NewArrvial;