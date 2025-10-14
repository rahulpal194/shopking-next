'use client'
import Link from "next/link";
import products from "@/json/products.json"
import ProductCard from "@/components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter } from "@/store/features/filterSlice";
import { useState } from "react";
import PaginationComponent from "@/components/PaginationComponent";
export default function Product (){
    const dispatch = useDispatch()
    const {isFilterActive} = useSelector((state:any)=>state.filter)
    const handleFilter =(open:boolean)=>{
         dispatch(toggleFilter(open))
    }

    const [openIndex, setOpenIndex] = useState(null);
    const toggleSection = (index:any) => {
      setOpenIndex(openIndex === index ? null : index);
    }

    const filterOptions = [
        {title : 'Product Type',
            options:[
                {label:"Tops & T-shirt" , type:'checkbox'},
                {label:"Pants & Tights" , type:'checkbox'},
                {label:"Hoodies & Sweatshirts" , type:'checkbox'},
                {label:"Jackets & Vesets" , type:'checkbox'},
                {label:"Shorts" , type:'checkbox'}
        ]},
        {title : 'Sort By',
            options:[
                {label:"Newest" , type:'checkbox'},
                {label:"Price Low To High" , type:'checkbox'},
                {label:"Price High To Low" , type:'checkbox'},
                {label:"Top Rated" , type:'checkbox'},
           ]},
    ]
    
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
                            <div className="max-md:h-dvh max-md:overflow-y-auto relative">
                                {filterOptions.map((filteroption,index)=>(
                                    <div key={index} className="filter-group border-b border-gray-100 transition-all duration-300">
                                        <button type="button" onClick={()=>toggleSection(index)} className="filter-btn group flex items-center justify-between w-full py-5 px-4 ltr:md:pl-0 rtl:pr-0 active">
                                            <span className="text-lg font-semibold capitalize transition-all duration-500 group-hover:text-primary">{filteroption.title}</span>
                                            <i className="icon-chevron-down text-base font-semibold transition-all duration-500 group-hover:text-primary"></i>
                                        </button>
                                        <div id="productType" className={`${openIndex==index? 'max-h-96':'max-h-0'} filter-list overflow-hidden transition-all duration-300`}>
                                            <div className="w-full mb-6 flex flex-col gap-4 px-6 md:px-0">
                                                {filteroption.options.map((option)=>(
                                                    <label htmlFor="topsShirt" className="flex items-center gap-3 cursor-pointer group">
                                                        <input type="checkbox" name="producttype" id="topsShirt" className="custom-checkbox" value="Tops_&_T-shirt"/>
                                                        <span className="font-medium capitalize transition-all duration-500 group-hover:text-primary">{option.label}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="md:px-5 py-5 flex flex-col items-center">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {products.map((product)=>(
                                <ProductCard key={product.id} product={product}/>
                            ))}
                        </div>
                        <PaginationComponent/>
                    </div>
                </div>
             </div>
        </section>
     )
}