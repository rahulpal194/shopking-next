export default function Dashboard (){
    return (
    <section>
            <div className="mb-8">
                <h3 className="text-primary text-2xl font-bold mb-3 leading-tight">Dashboard</h3>
                <p className="text-lg font-medium leading-tight">Welcome Back, Jonathon!</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="p-3 rounded-2xl bg-white shadow-category">
                    <div className="w-10 h-10 rounded-lg bg-[#FD0063] flex justify-center items-center shadow-order mb-6"><i className="icon-fill-bag text-xl text-white"></i></div>
                    <h6 className="text-2xl font-bold mb-2 text-[#FD0063]">102</h6>
                    <span className="text-base font-medium text-paragraph leading-tight">Total Orders</span>
                </div>
                <div className="p-3 rounded-2xl bg-white shadow-category">
                    <div className="w-10 h-10 rounded-lg bg-[#F23E14] flex justify-center items-center shadow-completed mb-6"><i className="icon-fill-bag text-xl text-white"></i></div>
                    <h6 className="text-2xl font-bold mb-2 text-[#F23E14]">93</h6>
                    <span className="text-base font-medium text-paragraph leading-tight">Total Completed</span>
                </div>
                <div className="p-3 rounded-2xl bg-white shadow-category">
                    <div className="w-10 h-10 rounded-lg bg-[#9353DE] flex justify-center items-center shadow-return mb-6"><i className="icon-fill-bag text-xl text-white"></i></div>
                    <h6 className="text-2xl font-bold mb-2 text-[#9353DE]">09</h6>
                    <span className="text-base font-medium text-paragraph leading-tight">Total Returned</span>
                </div>
                <div className="p-3 rounded-2xl bg-white shadow-category">
                    <div className="w-10 h-10 rounded-lg bg-[#0072F4] flex justify-center items-center shadow-balance mb-6"><i className="icon-fill-bag text-xl text-white"></i></div>
                    <h6 className="text-2xl font-bold mb-2 text-[#0072F4]">$127.00</h6>
                    <span className="text-base font-medium text-paragraph leading-tight">Wallet Balance</span>
                </div>
            </div>
        <div>
            <h3 className="text-[22px] font-bold mb-6">Order History</h3>
            <div className="db-table-responsive">
                <div className="max-md:overflow-x-auto">
                <table className="db-table">
                    <thead className="db-table-head">
                        <tr className="db-table-head-tr">
                            <th className="db-table-head-th">Order Details</th>
                            <th className="db-table-head-th">Info</th>
                            <th className="db-table-head-th">Order Status</th>
                            <th className="db-table-head-th">Payment Status</th>
                            <th className="db-table-head-th">Total</th>
                            <th className="db-table-head-th text-start">Action</th>
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
                            <td className="db-table-body-td"><span className="db-table-badge text-green-600 ">successful</span></td>
                            <td className="db-table-body-td"><span className="db-table-badge text-green-600 bg-green-100">paid</span></td>
                            <td className="db-table-body-td">$5020</td>
                            <td className="db-table-body-td table-cell">
                                <div className="dropdown-group w-fit relative group">
                                    <button className="flex items-center justify-center dropdown-btn text-sm w-7 h-7 leading-7 text-center rounded-lg bg-primary text-white shadow-more">
                                        <i className="icon-more-circle"></i>
                                    </button>
                                    <div className="dropdown-list w-fit flex flex-col items-start">
                                        <button className="w-full text-sm capitalize py-1.5 pl-2.5 pr-5 rounded-md transition hover:bg-gray-100 hover:text-primary">edit</button>
                                        <button className="w-full text-sm capitalize py-1.5 pl-2.5 pr-5 rounded-md transition hover:bg-gray-100 hover:text-primary">download</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>        
                </div>
            </div>         
        </div>
    </section>
    )
}