import Link from "next/link";

export default function RequestReturn (){
    return (
        <section>
            <h3 className="text-primary text-lg font-bold mb-6 leading-tight flex items-center gap-4">
                <Link href={""}><i className="icon-undo text-2xl"></i> </Link>Request Return</h3>
            <div className="db-table-responsive mb-6">
                <div className="max-md:overflow-x-auto">
                    <table className="db-table">
                        <thead className="db-table-head">
                            <tr className="border-b-2 border-gray-200">
                                <th className="p-4" scope="colgroup">Order ID: <span>#16532478965</span></th>
                            </tr>
                            <tr className="db-table-head-tr">
                                <th className="db-table-head-th text-justify">Product</th>
                                <th className="db-table-head-th">Quantity</th>
                                <th className="db-table-head-th">Price</th>
                                <th className="db-table-head-th text-start">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="db-table-body">
                            <tr className="db-table-body-tr">
                                <td className="db-table-body-td font-medium">
                                    <div className="flex gap-3 items-center">
                                        <input type="checkbox" name="product" className="custom-checkbox flex-shrink-0"/>
                                        <div className="w-13 h-13 rounded-lg flex-shrink-0">
                                            <img className="w-full h-full object-cover rounded-lg" src="/images/productDetails/thumb3.png" alt="" />
                                        </div>
                                        <p className="flex-auto text-sm font-medium leading-tight max-w-36 w-full text-wrap">Polar Fleece Full Zip-up Sweatshirt</p>
                                    </div>
                                </td>
                                <td className="db-table-body-td">
                                    <div className="flex items-center gap-1 w-20 p-1 rounded-full bg-[#F7F7FC]">
                                        <button type="button" className="text-[#A0A3BD] icon-circle-minus text-lg leading-none"></button>
                                        <input type="number" value={1} className="text-center w-full h-5 text-sm font-medium"/>
                                        <button type="button" className="text-[#A0A3BD] icon-circle-plus text-lg leading-none"></button>
                                    </div>
                                </td>
                                <td className="db-table-body-td">$5020</td>
                                <td className="db-table-body-td table-cell">$5020</td>
                            </tr>
                        </tbody>
                    </table>
                </div> 
            </div>    
            <div className="rounded-2xl shadow-card p-4 mb-6">
                <div className="mb-4 flex flex-col">
                    <label htmlFor="" className="font-medium">Return Reason</label>
                    <div className="relative">
                        <select className="appearance-none px-3 w-full h-12 border border-[#D9DBE9] rounded-lg outline-none focus-within:rounded-b-none focus-within:border-primary/50">
                            <option value="">--</option>
                            <option value="">Option 1</option>
                            <option value="">Option 2</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 top-1/2 -translate-y-1/2 right-3 flex items-center text-gray-500">
                            <i className="icon-chevron-down text-base"></i>
                        </div>
                    </div>

                </div>
                <div className="mb-4 flex flex-col">
                    <label htmlFor="" className="font-medium">Return Note</label>
                    <textarea className="h-28 p-3 border border-[#D9DBE9] rounded-lg outline-none focus-within:border-primary/50"></textarea>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className="font-medium">Attachment</label>
                    <input type="file" className="h-12 border border-[#D9DBE9] rounded-lg"></input>
                </div>
            </div>
            <button className="bg-primary px-6 rounded-full h-12 leading-12 text-base font-bold text-white">Request Return</button>
        </section>
    )
}