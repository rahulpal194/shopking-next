import useCanvas from "@/hooks/useCanvas"

export default function CategorySidebar (){
    const { closeCanvas, closeBackdrop } = useCanvas()
    return (
        <aside onClick={closeBackdrop} className="drawer" id="menu">
            <div className="drawer-content">

            </div>
        </aside>
    )
}