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
                <table className="db-table">
                    <thead className="db-table-head">
                        <tr className="db-table-head-tr">
                            <th className="db-table-head-th">Order Details</th>
                            <th className="db-table-head-th">Info</th>
                            <th className="db-table-head-th">Order Status</th>
                            <th className="db-table-head-th">Payment Status</th>
                            <th className="db-table-head-th">Total</th>
                            <th className="db-table-head-th">Action</th>
                        </tr>
                    </thead>
                    <tbody className="db-table-body">
                        <tr className="db-table-body-tr">
                            <td className="db-table-body-td font-medium">#16532478965</td>
                            <td className="db-table-body-td">miron mahmud</td>
                            <td className="db-table-body-td">miron@example</td>
                            <td className="db-table-body-td">25 august 2022</td>
                            <td className="db-table-body-td"><span className="db-table-badge text-green-600 bg-green-100">successful</span></td>
                            <td className="db-table-body-td">
                                <button className="db-btn-outline sm primary modal-btn m-0.5" data-modal="#modal-content">
                                    <i className="fa-solid fa-eye"></i>
                                    <span>view</span>
                                </button>
                                <button className="db-btn-outline sm success modal-btn m-0.5" data-modal="#modal-content">
                                    <i className="fa-solid fa-pen-to-square"></i>
                                    <span>edit</span>
                                </button>
                                <button className="db-btn-outline sm danger modal-btn m-0.5" data-modal="#modal-alert">
                                    <i className="fa-solid fa-trash-can"></i>
                                    <span>delete</span>
                                </button>
                            </td>
                        </tr>
                        <tr className="db-table-body-tr">
                            <td className="db-table-body-td font-medium">348</td>
                            <td className="db-table-body-td">miron mahmud</td>
                            <td className="db-table-body-td">miron@example</td>
                            <td className="db-table-body-td">25 august 2022</td>
                            <td className="db-table-body-td"><span className="db-table-badge text-yellow-600 bg-yellow-100">pending</span></td>
                            <td className="db-table-body-td">
                                <button className="db-btn-outline sm primary modal-btn m-0.5" data-modal="#modal-content">
                                    <i className="fa-solid fa-eye"></i>
                                    <span>view</span>
                                </button>
                                <button className="db-btn-outline sm success modal-btn m-0.5" data-modal="#modal-content">
                                    <i className="fa-solid fa-pen-to-square"></i>
                                    <span>edit</span>
                                </button>
                                <button className="db-btn-outline sm danger modal-btn m-0.5" data-modal="#modal-alert">
                                    <i className="fa-solid fa-trash-can"></i>
                                    <span>delete</span>
                                </button>
                            </td>
                        </tr>
                        <tr className="db-table-body-tr">
                            <td className="db-table-body-td font-medium">348</td>
                            <td className="db-table-body-td">miron mahmud</td>
                            <td className="db-table-body-td">miron@example</td>
                            <td className="db-table-body-td">25 august 2022</td>
                            <td className="db-table-body-td"><span className="db-table-badge text-red-600 bg-red-100">cancel</span></td>
                            <td className="db-table-body-td">
                                <button className="db-btn-outline sm primary modal-btn m-0.5" data-modal="#modal-content">
                                    <i className="fa-solid fa-eye"></i>
                                    <span>view</span>
                                </button>
                                <button className="db-btn-outline sm success modal-btn m-0.5" data-modal="#modal-content">
                                    <i className="fa-solid fa-pen-to-square"></i>
                                    <span>edit</span>
                                </button>
                                <button className="db-btn-outline sm danger modal-btn m-0.5" data-modal="#modal-alert">
                                    <i className="fa-solid fa-trash-can"></i>
                                    <span>delete</span>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>         
        </div>
    </section>
    )
}