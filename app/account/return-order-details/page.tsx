import Link from "next/link";

export default function ReturnOrderDetails (){
    return (
        <section>
            <h3 className="text-primary text-lg font-bold mb-6 leading-tight flex items-center gap-4"><Link href={""}><i className="icon-undo text-2xl"></i> </Link>Return Order Details</h3>
            <div className="db-table-responsive mb-6">
                <div className="max-md:overflow-x-auto">
                    <table className="db-table">
                        <thead className="db-table-head">
                            <tr className="border-b-2 border-gray-200">
                                <th className="p-3 sm:p-4" scope="colgroup">Order ID: <span>#16532478965</span></th>
                            </tr>
                            <tr className="db-table-head-tr">
                                <th className="db-table-head-th">Product</th>
                                <th className="db-table-head-th">Quantity</th>
                                <th className="db-table-head-th">Price</th>
                                <th className="db-table-head-th text-start">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="db-table-body">
                            <tr className="db-table-body-tr">
                                <td className="db-table-body-td font-medium">
                                    <div className="flex gap-3 items-center">
                                        <div className="w-13 h-13 rounded-lg flex-shrink-0">
                                            <img className="w-full h-full object-cover rounded-lg" src="/images/productDetails/thumb3.png" alt="" />
                                        </div>
                                        <p className="text-sm font-medium leading-tight max-w-36 w-full text-wrap">Polar Fleece Full Zip-up Sweatshirt</p>
                                    </div>
                                </td>
                                <td className="db-table-body-td">1</td>
                                <td className="db-table-body-td">$5020</td>
                                <td className="db-table-body-td table-cell">$5020</td>
                            </tr>
                        </tbody>
                    </table>
                </div> 
            </div>
            <div className="p-3 sm:p-4 shadow-card rounded-2xl mb-6">
                <div className="mb-6">
                    <h6 className="text-base font-semibold mb-3">Return Reason</h6>
                    <p className="text-sm font-normal">The product is damage or defective</p>
                </div>
                <div className="mb-6">
                    <h6 className="text-base font-semibold mb-3">Return Reason</h6>
                    <p className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur. Augue accumsan dignissim condimentum vulputate vitae blandit etiam nulla viverra. Nisl ipsum tempor vulputate penatibus sit. Tristique at eget ut suspendisse sollicitudin elementum mauris justo dui. Sed curabitur.</p>
                </div>
                <div>
                    <h6 className="text-base font-semibold mb-3">Attachment</h6>
                    <div className="flex flex-wrap gap-4">
                        <img className="w-[86px] h-[86px] rounded-lg object-cover" src="/images/productDetails/thumb1.png" alt=""/>
                        <img className="w-[86px] h-[86px] rounded-lg object-cover" src="/images/productDetails/thumb1.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className="p-3 sm:p-4 shadow-card rounded-2xl">
                <h6 className="text-base font-semibold mb-3 text-[#007FE3]">Return Response</h6>
                <p className="text-sm font-normal mb-4">Status: <span className="text-[#1AB759] font-semibold">Accepted</span></p>
                <p className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur. Augue accumsan dignissim condimentum vulputate vitae blandit etiam nulla viverra. Nisl ipsum tempor vulputate penatibus sit. Tristique at eget ut suspendisse sollicitudin elementum mauris justo dui. Sed curabitur.</p>
            </div>
        </section>
    )
}