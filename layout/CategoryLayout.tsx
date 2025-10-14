'use client'
import NestedMenuComponent from "@/components/NestedMenuComponent"
import useCanvas from "@/hooks/useCanvas"
import categories from "@/json/menu_categories.json"
import Image from "next/image"
import Link from "next/link"

export default function CategoryLayout (){
    const {openCanvas , closeCanvas} = useCanvas()
    return(
        <aside className="drawer" id="category">
            <div className="drawer-content left">
                <div className="py-5 flex items-center justify-between px-4 border-b border-slate-100">
                    <Link href="/">
                        <Image className="h-6 w-auto" src={'/images/logo.png'} width={500} height={500} alt="logo"/>
                    </Link>
                    <button type="button" className="icon-close-circle text-lg text-red-500" onClick={() => closeCanvas('category')} aria-label="Close menu"/>
                </div>
                
                <ul className="list-none">
                    {categories.map((category, index) => (
                        <NestedMenuComponent
                            key={`cat-${index}`}
                            item={category}
                            path={`cat-${index}`}
                            parentPaths={['category']}
                        />
                    ))}
                </ul>
            </div>
        </aside>
    )
}