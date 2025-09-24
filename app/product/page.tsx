'use client'
import Link from "next/link";
import products from "@/json/products.json"
import ProductCard from "@/components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter } from "@/store/features/filterSlice";
import { useState } from "react";
export default function Product (){
    const dispatch = useDispatch()
    const {isFilterActive} = useSelector((state:any)=>state.filter)
    const handleFilter =(open:boolean)=>{
         dispatch(toggleFilter(open))
    }

    const [active, setActive] = useState()
    return (
        <section className="container my-10">
             <div className="mb-8">
                 <ul className="flex flex-wrap items-center">
                     <li className="after:content-['\e00a'] after:font-icon after:text-sm after:mx-2 last:after:hidden">
                         <Link href={''} className="text-base font-medium capitalize transition-all duration-500 hover:text-primary">Home</Link>
                     </li>
                     <li className="after:content-['\e00a'] after:font-icon after:text-sm after:mx-2 last:after:hidden">
                         <Link href={''} className="text-base font-medium capitalize transition-all duration-500 hover:text-primary">Men</Link>
                     </li>
                     <li className="after:content-['\e00a'] after:font-icon after:text-sm after:mx-2 last:after:hidden">
                         <span className="text-base font-medium capitalize text-text text-paragraph">Clothing</span>
                     </li>
                 </ul>
             </div>
             <div>
                <div className="flex items-center gap-2 justify-between mb-6">
                    <div className="flex items-center flex-wrap gap-x-2">
                        <h2 className="text-xl sm:text-4xl font-bold">Hoodies & Sweatshirts</h2>
                        <span className="text-base sm:text-[22px] font-medium">(125 Products Found)</span>
                    </div>
                    <button onClick={()=>handleFilter(true)} className="md:hidden flex items-center justify-center flex-shrink-0 w-8.5 h-8.5 rounded-full border border-primary text-primary"><i className="icon-filter"></i></button>
                </div>
                <div className="flex items-start border-t border-[#EFF0F6]">
                    <div className={`max-md:fixed max-md:inset-0 max-md:z-100 max-md:bg-black/50 transition-all duration-500 ${isFilterActive ? 'max-md:opacity-100 max-md:visible': 'max-md:opacity-0 max-md:invisible'} `}>
                        <div className={`w-[270px] md:border-r md:border-gray-100 bg-white max-md:w-full max-md:max-w-xs transition-all duration-500  ${isFilterActive ? 'max-md:translate-x-0': 'max-md:-translate-x-full'}`}>
                            <div className="max-md:h-dvh max-md:overflow-y-auto">
                                <div className="filter-group border-b border-gray-100">
                                    <button type="button" className="filter-btn group flex items-center justify-between w-full py-5 px-4 ltr:md:pl-0 rtl:pr-0 active">
                                        <span className="text-lg font-semibold capitalize transition-all duration-500 group-hover:text-primary">Product Type</span>
                                        <i className="icon-chevron-up text-base font-semibold transition-all duration-500 group-hover:text-primary"></i>
                                    </button>
                                    <div id="productType" className="h-auto overflow-hidden transition-all duration-500">
                                        <div className="w-full mb-6 flex flex-col gap-4 px-6 md:px-0">
                                            <label htmlFor="topsShirt" className="flex items-center gap-3 cursor-pointer group">
                                                <input type="checkbox" name="producttype" id="topsShirt" className="custom-checkbox" value="Tops_&_T-shirt"/>
                                                <span className="font-medium capitalize transition-all duration-500 group-hover:text-primary">Tops & T-shirt</span>
                                            </label>
                                            <label htmlFor="pantsTights" className="flex items-center gap-3 cursor-pointer group">
                                                <input type="checkbox" name="producttype" id="pantsTights" className="custom-checkbox" value="Pants_&_Tights"/>
                                                <span className="font-medium capitalize transition-all duration-500 group-hover:text-primary">Pants & Tights</span>
                                            </label>
                                            <label htmlFor="hoddiesSweat" className="flex items-center gap-3 cursor-pointer group">
                                                <input type="checkbox" name="producttype" id="hoddiesSweat" className="custom-checkbox" value="Hoodies_&_Sweatshirts"/>
                                                <span className="font-medium capitalize transition-all duration-500 group-hover:text-primary">Hoodies & Sweatshirts</span>
                                            </label>
                                            <label htmlFor="jacket" className="flex items-center gap-3 cursor-pointer group">
                                                <input type="checkbox" name="producttype" id="jacket" className="custom-checkbox" value="Jackets_&_Vesets"/>
                                                <span className="font-medium capitalize transition-all duration-500 group-hover:text-primary">Jackets & Vesets</span>
                                            </label>
                                            <label htmlFor="shorts" className="flex items-center gap-3 cursor-pointer group">
                                                <input type="checkbox" name="producttype" id="shorts" className="custom-checkbox" value="Shorts"/>
                                                <span className="font-medium capitalize transition-all duration-500 group-hover:text-primary">Shorts</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="filter-group border-b border-gray-100">
                                    <button type="button" className="filter-btn group flex items-center justify-between w-full py-5 px-4 ltr:md:pl-0 rtl:pr-0">
                                        <span className="text-lg font-semibold capitalize transition-all duration-500 group-hover:text-primary">Sort By</span>
                                        <i className="icon-chevron-down text-base font-semibold transition-all duration-500 group-hover:text-primary"></i>
                                    </button>
                                    <div id="sortBy" className="h-auto overflow-hidden transition-all duration-500" >
                                        <div className="w-full mb-6 flex flex-col gap-4 px-6 md:px-0">
                                            <label htmlFor="sortByNewest" className="flex items-center gap-3 cursor-pointer group">
                                                <input type="radio" name="sortby" id="sortByNewest" className="custom-radio" value="latest"/>
                                                <span className="font-medium capitalize transition-all duration-500 group-hover:text-primary">Newest</span>
                                            </label>
                                            <label htmlFor="priceLowToHigh" className="flex items-center gap-3 cursor-pointer group">
                                                <input type="radio" name="sortby" id="priceLowToHigh" className="custom-radio" value="price_low_to_high"/>
                                                <span className="font-medium capitalize transition-all duration-500 group-hover:text-primary">Price Low To High</span>
                                            </label>
                                            <label htmlFor="priceHighToLow" className="flex items-center gap-3 cursor-pointer group">
                                                <input type="radio" name="sortby" id="priceHighToLow" className="custom-radio" value="price_high_to_low"/>
                                                <span className="font-medium capitalize transition-all duration-500 group-hover:text-primary">Price High To Low</span>
                                            </label>
                                            <label htmlFor="topRated" className="flex items-center gap-3 cursor-pointer group">
                                                <input type="radio" name="sortby" id="topRated" className="custom-radio" value="top_rated"/>
                                                <span className="font-medium capitalize transition-all duration-500 group-hover:text-primary">Top Rated</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="filter-group border-b border-gray-100">
                                    <button type="button" className="filter-btn group flex items-center justify-between w-full py-5 px-4 ltr:md:pl-0 rtl:pr-0">
                                        <span className="text-lg font-semibold capitalize transition-all duration-500 group-hover:text-primary">Price</span>
                                        <i className="icon-chevron-down text-base font-semibold transition-all duration-500 group-hover:text-primary"></i>
                                    </button>
                                    <div id="price" className="h-auto overflow-hidden transition-all duration-500" >
                                        <div className="flex items-center gap-3 px-2">
                                            <input type="number" className="appearance-none w-full h-9 px-3 font-medium rounded-lg bg-[#EFF0F6]"/>
                                            <input type="number" className="appearance-none w-full h-9 px-3 font-medium rounded-lg bg-[#EFF0F6]"/>
                                        </div>
                                        <div className="range-slider"> 
                                             <span className="range-progress"></span>
                                            <input onChange={(e)=>console.log(e.target.value)} type="range" multiple max={500} min={0}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="filter-group border-b border-gray-100">
                                    <button type="button" className="filter-btn group flex items-center justify-between w-full py-5 px-4 ltr:md:pl-0 rtl:pr-0">
                                        <span className="text-lg font-semibold capitalize transition-all duration-500 group-hover:text-primary">Size</span>
                                        <i className="icon-chevron-down text-base font-semibold transition-all duration-500 group-hover:text-primary"></i>
                                    </button>
                                    <div id="size" className="h-auto overflow-hidden transition-all duration-500" >
                                        <div className="w-full mb-6 flex flex-col gap-4 px-6 md:px-0">
                                            <label htmlFor="sizeS" className="flex items-center gap-3 cursor-pointer group">
                                                <input type="checkbox" name="size" id="sizeS" className="custom-checkbox" value="s"/>
                                                <span className="font-medium capitalize transition-all duration-500 group-hover:text-primary">S</span>
                                            </label>
                                            <label htmlFor="sizeM" className="flex items-center gap-3 cursor-pointer group">
                                                <input type="checkbox" name="size" id="sizeM" className="custom-checkbox" value="m"/>
                                                <span className="font-medium capitalize transition-all duration-500 group-hover:text-primary">M</span>
                                            </label>
                                            <label htmlFor="sizeL" className="flex items-center gap-3 cursor-pointer group">
                                                <input type="checkbox" name="size" id="sizeL" className="custom-checkbox" value="l"/>
                                                <span className="font-medium capitalize transition-all duration-500 group-hover:text-primary">L</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="filter-group border-b border-gray-100">
                                    <button type="button" className="filter-btn group flex items-center justify-between w-full py-5 px-4 ltr:md:pl-0 rtl:pr-0">
                                        <span className="text-lg font-semibold capitalize transition-all duration-500 group-hover:text-primary">Color</span>
                                        <i className="icon-chevron-down text-base font-semibold transition-all duration-500 group-hover:text-primary"></i>
                                    </button>
                                    <div id="color" className="h-auto overflow-hidden transition-all duration-500" >
                                        <div className="w-full mb-6 flex flex-col gap-4 px-6 md:px-0">
                                            <label htmlFor="colorwhite" className="flex items-center gap-3 cursor-pointer group">
                                                <input type="checkbox" name="color" id="colorwhite" className="custom-checkbox" value="white"/>
                                                <span className="font-medium capitalize transition-all duration-500 group-hover:text-primary">White</span>
                                            </label>
                                            <label htmlFor="colorblack" className="flex items-center gap-3 cursor-pointer group">
                                                <input type="checkbox" name="color" id="colorblack" className="custom-checkbox" value="black"/>
                                                <span className="font-medium capitalize transition-all duration-500 group-hover:text-primary">black</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:px-5 py-5">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {products.map((product)=>(
                                <ProductCard key={product.id} product={product}/>
                            ))}
                        </div>
                    </div>
                </div>
             </div>
        </section>
     )
}