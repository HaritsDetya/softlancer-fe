import React from "react";
import Sidebar from "./Sidebar";
import {
    CalendarIcon,
} from '@heroicons/react/24/outline';

export default function AddCompany() {
    return (
        <>
        <Sidebar/>
            <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main">
                <div className="py-10 px-6 bg-white flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
                    <div className="flex text-lg text-primary ">
                    <CalendarIcon className="w-auto h-8" aria-hidden="true" />
                        <span className="font-semibold">March 16, 2024</span>
                    </div>
                    <div className="absolute flex right-5">
                        <div className="bg-primary rounded-lg px-5 py-3.5 text-white">A</div>
                        <div className="pl-2">
                            <div className="">
                                <span className="font-semibold text-lg">Annisa Salma Rafida</span>

                            </div>
                            <span className="flex text-sm">anisahslmrrr@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <div className="grid grid-cols-1 mb-6 text-active text-left">
                        <div className="bg-light border border-gray-100 shadow-md shadow-black/5 rounded-md overflow-hidden p-7">
                            <div className="pb-5">
                                <div className="mb-4">
                                    <div className="text-md font-semibold">Add  New Company</div>
                                </div>
                                <form className="flex items-center">
                                    <div className="w-full flex flex-wrap rounded-md bg-abu1 border border-stroke2">
                                        <div className="w-full p-5 border-b-[1px] border-stroke2">
                                            <img src="" alt="" />
                                            <span className="text-stroke2 underline">Files</span>
                                        </div>
                                        <div className="w-full justify-center flex m-5 rounded-md border border-separate border-dashed border-stroke2">
                                            <label className="flex flex-col w-full items-center p-7 text-sm text-slate-500">
                                                <div className="">
                                                    <img src="" alt="" />
                                                    <span className="">You can drag and drop files here to add them</span>
                                                </div>
                                                <input type="file" className="hidden
                                          file:mr-4 file:py-2 file:px-4
                                          file:rounded-full file:border-0
                                          file:text-sm file:font-semibold
                                        "/>
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="">
                                <div className="mb-4">
                                    <div className="text-base font-medium">Company Name</div>
                                </div>
                                <form className="flex items-center">
                                    <input type="text" className="w-full h-14 p-5 flex flex-wrap rounded-md bg-abu1 border border-stroke2">

                                    </input>
                                </form>
                            </div>
                            <div className="py-5">
                                <div className="mb-4">
                                    <div className="text-base font-medium">Company Description</div>
                                </div>
                                <form className="flex items-center">
                                    <input type="text" className="w-full h-28 p-5 flex flex-wrap rounded-md bg-abu1 border border-stroke2">

                                    </input>
                                </form>
                            </div>
                            <div className="flex justify-end gap-6 pt-5">
                                <button type="button" className="bg-white text-stroke1 rounded-md py-2 px-12">Cancel</button>
                                <button type="submit" className="bg-primary text-white rounded-md py-2 px-12">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}