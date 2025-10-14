'use client'
import { useState } from "react";

export default function WriteReview (){

     const [previewUrls, setPreviewUrls] = useState<(string | null)[]>(Array(5).fill(null));
     const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
     const file = event.target.files?.[0];
     if (file) {
       const objectUrl = URL.createObjectURL(file);
       setPreviewUrls(prev => {
         const newPreviews = [...prev];
         newPreviews[index] = objectUrl;
         return newPreviews;
       });
     }
    };
    return (
        <section className="mb-20">
            <div className="rounded-2xl bg-white shadow-card mb-6">
                <div className="border-b border-[#D9DBE9] mb-4 sm:mb-6">
                    <div className="py-4 sm:py-6 mx-4 sm:mx-6 flex gap-3 border-b last:border-0 border-dashed border-gray-100">
                        <img src="https://d91ztyz4qy326.cloudfront.net/shopking/536/conversions/1-thumb.png" alt="product" className="w-14 h-14 object-cover rounded-md flex-shrink-0"/>
                        <div className="flex-auto overflow-hidden">
                            <h4 className="text-sm capitalize whitespace-nowrap overflow-hidden text-ellipsis">Essential Hat</h4>
                            <p className="text-sm overflow-hidden">Black | S</p>
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center gap-8">
                                    <span className="text-sm font-semibold">$60.00</span>
                                    <span className="text-sm font-medium">Quantity: 1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-6">
                    <div className="px-4 sm:px-6 mb-6">
                        <h6 className="text-base font-semibold mb-2">Your Review</h6>
                        <div className="flex gap-2">
                            <i className="icon-fill-star text-3xl text-[#F6A609]"></i>
                            <i className="icon-fill-star text-3xl text-[#F6A609]"></i>
                            <i className="icon-fill-star text-3xl text-[#F6A609]"></i>
                            <i className="icon-fill-star text-3xl text-[#F6A609]"></i>
                            <i className="icon-fill-star text-3xl text-[#D9DBE9]"></i>
                        </div>
                    </div>
                    <div className="px-4 sm:px-6 mb-6">
                        <h6 className="text-base font-semibold mb-2">Review Details</h6>
                        <textarea className="ressize-y border border-[#D9DBE9] rounded-xl w-full h-28"></textarea>
                    </div>
                    <div className="px-4 sm:px-6">
                        <h6 className="text-base font-semibold mb-2">Upload Images</h6>
                        <div className="flex flex-wrap gap-4">
                            {[...Array(5)].map((_, index) => (
                                <div key={index} className="relative">
                                  <label className="relative rounded-lg w-22 h-22 flex flex-col items-center justify-center gap-1 cursor-pointer bg-[#EFF0F6] overflow-hidden">
                                    <input
                                      type="file"
                                      accept="image/*"
                                      className="absolute inset-0 -z-10 rounded-lg opacity-0"
                                      onChange={(e) => handleImageChange(e, index)}
                                    />
                                    {previewUrls[index] ? (
                                       <div className="relative w-full h-full object-cover rounded-lg">
                                            <img
                                              src={previewUrls[index]!}
                                              alt={`Preview ${index + 1}`}
                                              className="w-full h-full object-cover rounded-lg"
                                            />
                                            <i className="icon-close-circle absolute top-0 right-0 text-red-500"></i>
                                      </div>
                                    ) : (
                                      <>
                                        <i className="icon-fill-image text-2xl text-paragraph cursor-pointer"></i>
                                        <span className="text-xs font-medium capitalize cursor-pointer text-paragraph">Add Image</span>
                                      </>
                                    )}
                                  </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
             <button className="bg-primary px-6 rounded-full h-12 leading-12 text-base font-bold text-white">Submit Review</button>
        </section>
    )
}