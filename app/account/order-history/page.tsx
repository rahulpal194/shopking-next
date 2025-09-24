export default function OrderHistory (){
    return (
        <section>
            <h3 className="text-primary text-2xl font-bold mb-6 leading-tight">Order History</h3>
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
                            <td className="db-table-body-td"><span className="db-table-badge text-xs text-green-600 bg-green-100">paid</span></td>
                            <td className="db-table-body-td">$5020.00</td>
                            <td className="db-table-body-td">
                                <div className="dropdown-group w-fit relative group">
                                    <button className="flex items-center justify-center dropdown-btn text-sm w-7 h-7 leading-7 text-center rounded-lg bg-primary text-white shadow-more">
                                        <i className="icon-more-circle"></i>
                                    </button>
                                    <div className="dropdown-list w-fit flex flex-col items-start">
                                        <button className="w-full text-sm capitalize py-1.5 pl-2.5 pr-5 rounded-md transition hover:bg-gray-100 hover:text-primary">edit</button>
                                        <button className="w-full text-sm capitalize py-1.5 pl-2.5 pr-5 rounded-md transition hover:bg-gray-100 hover:text-primary">delete</button>
                                        <button className="w-full text-sm capitalize py-1.5 pl-2.5 pr-5 rounded-md transition hover:bg-gray-100 hover:text-primary">download</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="db-table-body-tr">
                            <td className="db-table-body-td font-medium">
                                <div className="flex flex-col gap-3">
                                    <span className="text-sm font-semibold leading-tight">#16532478965</span>
                                    <span className="text-xs font-medium leading-tight text-paragraph">7 July, 2022</span>
                                </div>
                            </td>
                            <td className="db-table-body-td">1 Product</td>
                            <td className="db-table-body-td">Pending</td>
                            <td className="db-table-body-td"><span className="db-table-badge text-xs text-green-600 bg-green-100">paid</span></td>
                            <td className="db-table-body-td">$5020.00</td>
                            <td className="db-table-body-td">
                                <div className="dropdown-group w-fit relative group">
                                    <button className="dropdown-btn text-sm w-7 h-7 leading-7 text-center rounded-lg bg-primary text-white shadow-more"></button>
                                    <div className="dropdown-list w-fit flex flex-col items-start">
                                        <button className="w-full text-sm capitalize py-1.5 pl-2.5 pr-5 rounded-md transition hover:bg-gray-100 hover:text-primary">edit</button>
                                        <button className="w-full text-sm capitalize py-1.5 pl-2.5 pr-5 rounded-md transition hover:bg-gray-100 hover:text-primary">delete</button>
                                        <button className="w-full text-sm capitalize py-1.5 pl-2.5 pr-5 rounded-md transition hover:bg-gray-100 hover:text-primary">download</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="db-table-body-tr">
                            <td className="db-table-body-td font-medium">
                                <div className="flex flex-col gap-3">
                                    <span className="text-sm font-semibold leading-tight">#16532478965</span>
                                    <span className="text-xs font-medium leading-tight text-paragraph">7 July, 2022</span>
                                </div>
                            </td>
                            <td className="db-table-body-td">1 Product</td>
                            <td className="db-table-body-td">Pending</td>
                            <td className="db-table-body-td"><span className="db-table-badge text-xs text-green-600 bg-green-100">paid</span></td>
                            <td className="db-table-body-td">$5020.00</td>
                            <td className="db-table-body-td">
                                <div className="dropdown-group w-fit relative group">
                                    <button className="dropdown-btn text-sm w-7 h-7 leading-7 text-center rounded-lg bg-primary text-white shadow-more"></button>
                                    <div className="dropdown-list w-fit flex flex-col items-start">
                                        <button className="w-full text-sm capitalize py-1.5 pl-2.5 pr-5 rounded-md transition hover:bg-gray-100 hover:text-primary">edit</button>
                                        <button className="w-full text-sm capitalize py-1.5 pl-2.5 pr-5 rounded-md transition hover:bg-gray-100 hover:text-primary">delete</button>
                                        <button className="w-full text-sm capitalize py-1.5 pl-2.5 pr-5 rounded-md transition hover:bg-gray-100 hover:text-primary">download</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="db-table-body-tr">
                            <td className="db-table-body-td font-medium">
                                <div className="flex flex-col gap-3">
                                    <span className="text-sm font-semibold leading-tight">#16532478965</span>
                                    <span className="text-xs font-medium leading-tight text-paragraph">7 July, 2022</span>
                                </div>
                            </td>
                            <td className="db-table-body-td">1 Product</td>
                            <td className="db-table-body-td">Pending</td>
                            <td className="db-table-body-td"><span className="db-table-badge text-xs text-green-600 bg-green-100">paid</span></td>
                            <td className="db-table-body-td">$5020.00</td>
                            <td className="db-table-body-td">
                                <div className="dropdown-group w-fit relative group">
                                    <button className="flex items-center justify-center dropdown-btn text-sm w-7 h-7 leading-7 text-center rounded-lg bg-primary text-white shadow-more">
                                        <i className="icon-more-circle"></i>
                                    </button>
                                    <div className="dropdown-list w-fit flex flex-col items-start">
                                        <button className="w-full text-sm capitalize py-1.5 pl-2.5 pr-5 rounded-md transition hover:bg-gray-100 hover:text-primary">edit</button>
                                        <button className="w-full text-sm capitalize py-1.5 pl-2.5 pr-5 rounded-md transition hover:bg-gray-100 hover:text-primary">delete</button>
                                        <button className="w-full text-sm capitalize py-1.5 pl-2.5 pr-5 rounded-md transition hover:bg-gray-100 hover:text-primary">download</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="db-table-body-tr">
                            <td className="db-table-body-td font-medium">
                                <div className="flex flex-col gap-3">
                                    <span className="text-sm font-semibold leading-tight">#16532478965</span>
                                    <span className="text-xs font-medium leading-tight text-paragraph">7 July, 2022</span>
                                </div>
                            </td>
                            <td className="db-table-body-td">1 Product</td>
                            <td className="db-table-body-td">Pending</td>
                            <td className="db-table-body-td"><span className="db-table-badge text-xs text-green-600 bg-green-100">paid</span></td>
                            <td className="db-table-body-td">$5020.00</td>
                            <td className="db-table-body-td">
                                <div className="dropdown-group w-fit relative group">
                                    <button className="dropdown-btn text-sm w-7 h-7 leading-7 text-center rounded-lg bg-primary text-white shadow-more"></button>
                                    <div className="dropdown-list w-fit flex flex-col items-start">
                                        <button className="w-full text-sm capitalize py-1.5 pl-2.5 pr-5 rounded-md transition hover:bg-gray-100 hover:text-primary">edit</button>
                                        <button className="w-full text-sm capitalize py-1.5 pl-2.5 pr-5 rounded-md transition hover:bg-gray-100 hover:text-primary">delete</button>
                                        <button className="w-full text-sm capitalize py-1.5 pl-2.5 pr-5 rounded-md transition hover:bg-gray-100 hover:text-primary">download</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="db-table-body-tr">
                            <td className="db-table-body-td font-medium">
                                <div className="flex flex-col gap-3">
                                    <span className="text-sm font-semibold leading-tight">#16532478965</span>
                                    <span className="text-xs font-medium leading-tight text-paragraph">7 July, 2022</span>
                                </div>
                            </td>
                            <td className="db-table-body-td">1 Product</td>
                            <td className="db-table-body-td">Pending</td>
                            <td className="db-table-body-td"><span className="db-table-badge text-xs text-green-600 bg-green-100">paid</span></td>
                            <td className="db-table-body-td">$5020.00</td>
                            <td className="db-table-body-td">
                                <div className="dropdown-group w-fit relative group">
                                    <button className="dropdown-btn text-sm w-7 h-7 leading-7 text-center rounded-lg bg-primary text-white shadow-more"></button>
                                    <div className="dropdown-list w-fit flex flex-col items-start">
                                        <button className="w-full text-sm capitalize py-1.5 pl-2.5 pr-5 rounded-md transition hover:bg-gray-100 hover:text-primary">edit</button>
                                        <button className="w-full text-sm capitalize py-1.5 pl-2.5 pr-5 rounded-md transition hover:bg-gray-100 hover:text-primary">delete</button>
                                        <button className="w-full text-sm capitalize py-1.5 pl-2.5 pr-5 rounded-md transition hover:bg-gray-100 hover:text-primary">download</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="db-table-body-tr">
                            <td className="db-table-body-td font-medium">
                                <div className="flex flex-col gap-3">
                                    <span className="text-sm font-semibold leading-tight">#16532478965</span>
                                    <span className="text-xs font-medium leading-tight text-paragraph">7 July, 2022</span>
                                </div>
                            </td>
                            <td className="db-table-body-td">1 Product</td>
                            <td className="db-table-body-td">Pending</td>
                            <td className="db-table-body-td"><span className="db-table-badge text-xs text-green-600 bg-green-100">paid</span></td>
                            <td className="db-table-body-td">$5020.00</td>
                            <td className="db-table-body-td">
                                <div className="dropdown-group w-fit relative group">
                                    <button className="flex items-center justify-center dropdown-btn text-sm w-7 h-7 leading-7 text-center rounded-lg bg-primary text-white shadow-more">
                                        <i className="icon-more-circle"></i>
                                    </button>
                                    <div className="dropdown-list w-fit flex flex-col items-start">
                                        <button className="w-full text-sm capitalize py-1.5 pl-2.5 pr-5 rounded-md transition hover:bg-gray-100 hover:text-primary">edit</button>
                                        <button className="w-full text-sm capitalize py-1.5 pl-2.5 pr-5 rounded-md transition hover:bg-gray-100 hover:text-primary">delete</button>
                                        <button className="w-full text-sm capitalize py-1.5 pl-2.5 pr-5 rounded-md transition hover:bg-gray-100 hover:text-primary">download</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="db-table-body-tr">
                            <td className="db-table-body-td font-medium">
                                <div className="flex flex-col gap-3">
                                    <span className="text-sm font-semibold leading-tight">#16532478965</span>
                                    <span className="text-xs font-medium leading-tight text-paragraph">7 July, 2022</span>
                                </div>
                            </td>
                            <td className="db-table-body-td">1 Product</td>
                            <td className="db-table-body-td">Pending</td>
                            <td className="db-table-body-td"><span className="db-table-badge text-xs text-green-600 bg-green-100">paid</span></td>
                            <td className="db-table-body-td">$5020.00</td>
                            <td className="db-table-body-td">
                                <div className="dropdown-group w-fit relative group">
                                    <button className="dropdown-btn text-sm w-7 h-7 leading-7 text-center rounded-lg bg-primary text-white shadow-more"></button>
                                    <div className="dropdown-list w-fit flex flex-col items-start">
                                        <button className="w-full text-sm capitalize py-1.5 pl-2.5 pr-5 rounded-md transition hover:bg-gray-100 hover:text-primary">edit</button>
                                        <button className="w-full text-sm capitalize py-1.5 pl-2.5 pr-5 rounded-md transition hover:bg-gray-100 hover:text-primary">delete</button>
                                        <button className="w-full text-sm capitalize py-1.5 pl-2.5 pr-5 rounded-md transition hover:bg-gray-100 hover:text-primary">download</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="db-table-body-tr">
                            <td className="db-table-body-td font-medium">
                                <div className="flex flex-col gap-3">
                                    <span className="text-sm font-semibold leading-tight">#16532478965</span>
                                    <span className="text-xs font-medium leading-tight text-paragraph">7 July, 2022</span>
                                </div>
                            </td>
                            <td className="db-table-body-td">1 Product</td>
                            <td className="db-table-body-td">Pending</td>
                            <td className="db-table-body-td"><span className="db-table-badge text-xs text-green-600 bg-green-100">paid</span></td>
                            <td className="db-table-body-td">$5020.00</td>
                            <td className="db-table-body-td">
                                <div className="dropdown-group w-fit relative group">
                                    <button className="dropdown-btn text-sm w-7 h-7 leading-7 text-center rounded-lg bg-primary text-white shadow-more"></button>
                                    <div className="dropdown-list w-fit flex flex-col items-start">
                                        <button className="w-full text-sm capitalize py-1.5 pl-2.5 pr-5 rounded-md transition hover:bg-gray-100 hover:text-primary">edit</button>
                                        <button className="w-full text-sm capitalize py-1.5 pl-2.5 pr-5 rounded-md transition hover:bg-gray-100 hover:text-primary">delete</button>
                                        <button className="w-full text-sm capitalize py-1.5 pl-2.5 pr-5 rounded-md transition hover:bg-gray-100 hover:text-primary">download</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div> 
            </div>
        </section>
    )
}