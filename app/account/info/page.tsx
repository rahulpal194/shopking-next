import PhoneInput from "@/components/PhoneInput";
export default function Info (){
    return (
        <section>
            <h3 className="text-primary text-2xl font-bold mb-6 leading-tight">Account Information</h3>
            <div className="p-4 sm:p-6 shadow-card rounded-xl sm:rounded-2xl mb-6">
                <form className="w-full">
                    <div className="flex flex-col mb-12">
                        <h6 className="text-[22px] font-bold leading-tight mb-6">Personal Info</h6>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                            <div className="flex flex-col w-full">
                                <label htmlFor="fullname" className="text-sm font-medium">Full Name</label>
                                <input type="text" className="h-12 px-4 text-lg border border-[#D9DBE9] rounded-lg outline-none"/>
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input type="email" className="h-12 px-4 text-lg border border-[#D9DBE9] rounded-lg outline-none"/>
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                                <PhoneInput/>
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="file" className="text-sm font-medium">Upload Image</label>
                                <input type="file" id="file"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h6 className="text-[22px] font-bold leading-tight mb-6">Change Password</h6>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                            <div className="flex flex-col w-full col-span-full">
                                <label htmlFor="fullname" className="text-sm font-medium">Old Password</label>
                                <input type="text" className="h-12 px-4 text-lg border border-[#D9DBE9] rounded-lg outline-none"/>
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="email" className="text-sm font-medium">New Password</label>
                                <input type="email" className="h-12 px-4 text-lg border border-[#D9DBE9] rounded-lg outline-none"/>
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="phone" className="text-sm font-medium">Confirm Password</label>
                                <input type="email" className="h-12 px-4 text-lg border border-[#D9DBE9] rounded-lg outline-none"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <button className="px-5 py-3 rounded-full bg-primary text-white text-base font-bold">Save Changes</button>
        </section>
    )
}