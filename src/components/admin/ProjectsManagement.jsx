import React from "react";
import Sidebar from "./Sidebar";
import {
    CalendarIcon,
} from '@heroicons/react/24/outline';

export default function ProjectsManagement() {
    return (
        <>
            <Sidebar />
            <main className="w-full md:w-[calc(100%-256px)] md:ml-72 bg-gray-50 min-h-screen transition-all main">
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
                        <div className="bg-light border border-gray-100 shadow-md shadow-black/5 rounded-md overflow-hidden">
                            <div className="p-5 flex justify-between items-center mb-4 border-b-[1px] border-stroke1">
                                <div className="text-xs font-semibold">All Projects</div>
                            </div>
                            <div className="px-5 pb-5">
                                <div className="pb-5 mb-4">
                                    <div className="flex flex-col">
                                        <div className="text-md font-semibold">New Projects</div>
                                        <div className="text-xs text-active/60">Please complete all data</div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-5">
                                    <div className="">
                                        <div className="mb-2">
                                            <div className="text-base font-medium">Projects Name *</div>
                                        </div>
                                        <form className="flex items-center">
                                            <input type="text" placeholder="Enter project name" className="w-full p-5 flex flex-wrap placeholder:text-sm rounded-md bg-abu1 border border-stroke2">

                                            </input>
                                        </form>
                                    </div>
                                    <div className="">
                                        <div className="mb-2">
                                            <div className="text-base font-medium">Qualifications</div>
                                        </div>
                                        <form className="flex items-center">
                                            <input type="text" placeholder="Enter minimum qualifications" className="w-full p-5 flex flex-wrap placeholder:text-sm rounded-md bg-abu1 border border-stroke2">

                                            </input>
                                        </form>
                                    </div>
                                    <div className="">
                                        <div className="mb-2">
                                            <div className="text-base font-medium">Project Description *</div>
                                        </div>
                                        <form className="flex items-center">
                                            <input type="text" placeholder="Enter project description" className="w-full p-5 flex flex-wrap placeholder:text-sm rounded-md bg-abu1 border border-stroke2">

                                            </input>
                                        </form>
                                    </div>
                                    <div className="">
                                        <div className="mb-2">
                                            <div className="text-base font-medium">Skills</div>
                                        </div>
                                        <form className="flex items-center">
                                            <input type="text" placeholder="Enter the required skills" className="w-full p-5 flex flex-wrap placeholder:text-sm rounded-md bg-abu1 border border-stroke2">

                                            </input>
                                        </form>
                                    </div>
                                    <div className="">
                                        <div className="mb-2">
                                            <div className="text-base font-medium">Job Type *</div>
                                        </div>
                                        <form className="flex items-center">
                                            <button type="text" className="w-full p-5 flex flex-wrap text-sm text-black/35 rounded-md bg-abu1 border border-stroke2">
                                                <span className="font-medium">Choose one</span>
                                                <img src="" alt="" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="flex justify-end gap-6 pt-5">
                                    <button type="button" className="bg-white text-stroke1 rounded-md py-2 px-12">Cancel</button>
                                    <button type="submit" className="bg-primary text-white rounded-md py-2 px-12">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}