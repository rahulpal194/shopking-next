import useCanvas from "@/hooks/useCanvas"
import Link from "next/link"

export default function NestedMenuComponent ({ item, path = '', parentPaths }:any){
    const { openCanvas, closeCanvas } = useCanvas()
    const currentId = path
    const allPaths = [parentPaths, currentId]
    
    if (item.children) {
        return (
            <li className="category-item px-4">
                <button className="category-menu" onClick={() => openCanvas(currentId)}>
                    <span className="text-sm font-medium capitalize">
                        {item.title}
                    </span>
                    <i className="icon-chevron-right"></i>
                </button>
                <aside className="drawer" id={currentId}>
                    <div className="drawer-content">
                        <div className="py-5 flex items-center justify-between px-4 border-b border-slate-100">
                            <button className="flex items-center gap-2 w-full" onClick={() => closeCanvas(currentId)}>
                                <div className="flex-1 flex gap-3 items-center ">
                                    <i className="icon-chevron-right rotate-180"></i>
                                    <span className="text-base font-medium capitalize">
                                        {item.title}
                                    </span>
                                </div>
                                <i className="icon-close-circle text-lg text-red-500"></i>
                            </button>
                            
                        </div>
                        <ul className="list-none">
                            {item.children.map((child:any, index:number) => (
                                <NestedMenuComponent
                                    key={`${currentId}-${index}`}
                                    item={child}
                                    path={`${currentId}-${index}`}
                                    parentPaths={allPaths}
                                />
                            ))}
                        </ul>
                    </div>
                </aside>
            </li>
        )}
    
    return (
        <li className="category-item px-4">
            <Link href={item.route} className="category-menu">
                <span className="text-sm font-medium capitalize">
                    {item.title}
                </span>
            </Link>
        </li>
    )
}