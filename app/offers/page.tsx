import React from "react"
import products from '@/json/products.json'
import ProductCard from "@/components/ProductCard"
export default function offers (){
    return (
        <section className="container mb-20">
            <div className="flex flex-wrap items-center gap-x-2 mb-3 sm:mb-6">
                <h2 className="text-xl sm:text-4xl font-bold">Offer Products</h2>
                <span className="text-[22px] font-medium">(0 Products Found)</span>
            </div> 
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 border-t border-[#EFF0F6] pt-3 sm:pt-6">
                {products.map((product)=>(
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </section>
    )
}