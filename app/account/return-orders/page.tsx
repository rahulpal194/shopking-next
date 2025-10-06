import Link from "next/link";

export default function ReturnOrders (){
    return (
        <section>
            <h3 className="text-primary text-2xl font-bold mb-6 leading-tight">Return Orders</h3>
            <div className="db-table-responsive">
            <div className="max-md:overflow-x-auto">
                <table className="db-table">
                    <thead className="db-table-head">
                        <tr className="db-table-head-tr">
                            <th className="db-table-head-th">Order Details</th>
                            <th className="db-table-head-th">Info</th>
                            <th className="db-table-head-th">Return Status</th>
                            <th className="db-table-head-th">Amount</th>
                            <th className="db-table-head-th">Action</th>
                        </tr>
                    </thead>
                    <tbody className="db-table-body">
                        <tr className="db-table-body-tr">
                            <td className="db-table-body-td font-medium">
                                <div className="flex flex-col gap-3">
                                    <span className="text-sm font-semibold leading-tight">#16532478965</span>
                                    <span className="text-xs font-medium leading-tight text-paragraph">7 July, 2022</span>
                                </div>
                            </td>
                            <td className="db-table-body-td">1 Product</td>
                            <td className="db-table-body-td">Pending</td>
                            <td className="db-table-body-td">$5020.00</td>
                            <td className="db-table-body-td">
                                <Link href={"/account/return-order-details"} className="flex items-center justify-center text-base w-7 h-7 leading-7 text-center rounded-lg bg-primary text-white shadow-more">
                                    <i className="icon-fill-eye"></i>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div> 
            </div>
        </section>
    )
}