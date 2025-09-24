export default function RequestReturn (){
    return (
        <section>
            <div className="rounded-2xl shadow-card mb-6">
                <div className="p-4 border-b border-[#D9DBE9]">
                    <h3 className="text-base font-semibold">Order ID: <span>#16532478965</span></h3>
                </div>
            </div>
            <div className="rounded-2xl shadow-card p-4">
                <div className="mb-4">
                    <label htmlFor="">Return Reason</label>
                </div>
                <div className="mb-4 flex flex-col">
                    <label htmlFor="">Return Note</label>
                    <textarea className="h-28 border border-[#D9DBE9] rounded-lg"></textarea>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="">Attachment</label>
                    <input type="file" className="h-12 border border-[#D9DBE9] rounded-lg"></input>
                </div>
            </div>
        </section>
    )
}