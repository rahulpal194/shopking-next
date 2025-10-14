'use client'
import PhoneInput from "@/components/PhoneInput"
import useModal from "@/hooks/useModal"

export default function Address (){
    const {openModal , closeModal} = useModal()
    return (
    <>
    <section>
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-primary text-2xl font-bold leading-tight">Addresses</h3>
            <button onClick={()=>openModal("address-form")} type="button" className="sm:hidden rounded-full py-2 px-3 flex items-center justify-center gap-2.5 text-primary bg-[#FFF4F1]">
                <i className="icon-circle-plus text-lg"></i>
                <span className="text-lg font-semibold capitalize">Add New</span>
            </button>
        </div>
        <div className="p-3 sm:p-6 shadow-card rounded-xl sm:rounded-2xl mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-3 sm:p-4 bg-[#F7F7F7] rounded-2xl relative">
                    <p className="text-base font-medium mb-2">Jonathon Doe</p>
                    <p className="text-sm font-normal">01326547896</p>
                    <p className="text-sm font-normal">jondoe@gmail.com</p>
                    <p className="text-sm font-normal">Bedford, New York, United States</p>
                    <p className="text-sm font-normal">4471 Nutters Barn Lane Des Moines, IA 50309, 5252</p>
                    <div className="group absolute top-3 right-3">
                        <button type="button" className="icon-line-circle-more text-primary relative"></button>
                        <nav className="w-20 rounded-lg shadow-paper absolute top-5 right-0 z-10 origin-top scale-y-0 transition-all duration-300 group-hover:scale-y-100 bg-white">
                            <button type="button" className="text-sm font-semibold capitalize py-2 px-3 text-left w-full block border-b last:border-b-0 border-gray-200">Edit</button>
                            <button type="button" className="text-sm font-semibold capitalize py-2 px-3 text-left w-full block border-b last:border-b-0 border-gray-200">Delete</button>
                        </nav>
                    </div>
                </div>
                <div className="p-3 sm:p-4 bg-[#F7F7F7] rounded-2xl relative">
                    <p className="text-base font-medium mb-2">Jonathon Doe</p>
                    <p className="text-sm font-normal">01326547896</p>
                    <p className="text-sm font-normal">jondoe@gmail.com</p>
                    <p className="text-sm font-normal">Bedford, New York, United States</p>
                    <p className="text-sm font-normal">4471 Nutters Barn Lane Des Moines, IA 50309, 5252</p>
                    <div className="group absolute top-3 right-3">
                        <button type="button" className="icon-line-circle-more text-primary relative"></button>
                        <nav className="w-20 rounded-lg shadow-paper absolute top-5 right-0 z-10 origin-top scale-y-0 transition-all duration-300 group-hover:scale-y-100 bg-white">
                            <button type="button" className="text-sm font-semibold capitalize py-2 px-3 text-left w-full block border-b last:border-b-0 border-gray-200">Edit</button>
                            <button type="button" className="text-sm font-semibold capitalize py-2 px-3 text-left w-full block border-b last:border-b-0 border-gray-200">Delete</button>
                        </nav>
                    </div>
                </div>
                <button onClick={()=>openModal("address-form")} type="button" className="hidden w-full rounded-2xl py-10 sm:flex items-center justify-center gap-2.5 text-primary bg-[#FFF4F1]">
                    <i className="icon-circle-plus text-lg"></i>
                    <span className="text-lg font-semibold capitalize">Add New Address</span>
                </button>
            </div>
        </div>
    </section>

    <div className="modal" id="address-form">
        <div className="modal-content !max-w-[743px] relative px-4 py-6">
            <form>
                <h3 className="text-[22px] font-bold mb-6">Add New Address</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                    <div className="flex flex-col mb-4">
                        <label htmlFor="name" className="text-sm font-medium required">Full Name</label>
                        <input type="text" className="h-12 px-4 text-lg border border-[#D9DBE9] rounded-lg outline-none"/>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="name" className="text-sm font-medium required">Email</label>
                        <input type="text" className="h-12 px-4 text-lg border border-[#D9DBE9] rounded-lg outline-none"/>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                    <div className="flex flex-col mb-4">
                        <label htmlFor="name" className="text-sm font-medium required">Phone</label>
                        <PhoneInput/>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="name" className="text-sm font-medium required">State</label>
                        <input type="text" className="h-12 px-4 text-lg border border-[#D9DBE9] rounded-lg outline-none"/>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                    <div className="flex flex-col mb-4">
                        <label htmlFor="name" className="text-sm font-medium required">City</label>
                        <input type="text" className="h-12 px-4 text-lg border border-[#D9DBE9] rounded-lg outline-none"/>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="name" className="text-sm font-medium required">Zip Code</label>
                        <input type="text" className="h-12 px-4 text-lg border border-[#D9DBE9] rounded-lg outline-none"/>
                    </div>
                </div>
                <div className="flex flex-col mb-6">
                    <label htmlFor="name" className="text-sm font-medium required">Street Address</label>
                    <input type="text" className="h-12 px-4 text-lg border border-[#D9DBE9] rounded-lg outline-none"/>
                </div>
            </form>
            <div className="flex justify-start gap-6">
                <button className="h-12 px-6 rounded-full text-base font-bold text-white bg-primary">Add Address</button>
                <button onClick={()=>closeModal("address-form")} className="h-12 px-6 rounded-full text-base font-bold bg-[#F7F7FC]">Cancel</button>
            </div>
        </div>
    </div>
    </>
    )
}