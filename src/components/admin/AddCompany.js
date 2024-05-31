import React from "react";

export default function AddCompany() {
    return (
        <main class="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main">
        <div class="py-10 px-6 bg-white flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
            <div class="flex text-lg text-primary ">
                <img src="" alt=""/>
                <span class="font-semibold">March 16, 2024</span>
            </div>
            <div class="absolute flex right-5">
                <div class="bg-primary rounded-lg px-5 py-3.5 text-white">A</div>
                <div class="pl-2">
                    <div class="">
                        <span class="font-semibold text-lg">Annisa Salma Rafida</span>
                        
                    </div>
                    <span class="flex text-sm">anisahslmrrr@gmail.com</span>
                </div>
            </div>
        </div>
        <div class="p-5">
            <div class="grid grid-cols-1 mb-6 text-active text-left">
                <div class="bg-light border border-gray-100 shadow-md shadow-black/5 rounded-md overflow-hidden p-7">
                    <div class="pb-5">
                        <div class="mb-4">
                            <div class="text-md font-semibold">Add  New Company</div>
                        </div>
                        <form class="flex items-center">
                            <div class="w-full flex flex-wrap rounded-md bg-abu1 border border-stroke2">
                                <div class="w-full p-5 border-b-[1px] border-stroke2">
                                    <img src="" alt=""/>
                                    <span class="text-stroke2 underline">Files</span>
                                </div>
                                <div class="w-full justify-center flex m-5 rounded-md border border-separate border-dashed border-stroke2">
                                    <label class="flex flex-col w-full items-center p-7 text-sm text-slate-500">
                                        <div class="">
                                            <img src="" alt=""/>
                                            <span class="">You can drag and drop files here to add them</span>
                                        </div>
                                        <input type="file" class="hidden
                                          file:mr-4 file:py-2 file:px-4
                                          file:rounded-full file:border-0
                                          file:text-sm file:font-semibold
                                        "/>
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="">
                        <div class="mb-4">
                            <div class="text-base font-medium">Company Name</div>
                        </div>
                        <form class="flex items-center">
                            <input type="text" class="w-full h-14 p-5 flex flex-wrap rounded-md bg-abu1 border border-stroke2">

                            </input>
                        </form>
                    </div>
                    <div class="py-5">
                        <div class="mb-4">
                            <div class="text-base font-medium">Company Description</div>
                        </div>
                        <form class="flex items-center">
                            <input type="text" class="w-full h-28 p-5 flex flex-wrap rounded-md bg-abu1 border border-stroke2">

                            </input>
                        </form>
                    </div>
                    <div class="flex justify-end gap-6 pt-5">
                        <button type="button" class="bg-white text-stroke1 rounded-md py-2 px-12">Cancel</button>
                        <button type="submit" class="bg-primary text-white rounded-md py-2 px-12">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}