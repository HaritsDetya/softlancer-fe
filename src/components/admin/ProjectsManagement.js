import React from "react";

export default function ProjectsManagement() {
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
                <div class="bg-light border border-gray-100 shadow-md shadow-black/5 rounded-md overflow-hidden">
                    <div class="p-5 flex justify-between items-center mb-4 border-b-[1px] border-stroke1">
                        <div class="text-xs font-semibold">All Projects</div>
                    </div>
                    <div class="px-5 pb-5">
                        <div class="pb-5 mb-4">
                            <div class="flex flex-col">
                                <div class="text-md font-semibold">New Projects</div>
                                <div class="text-xs text-active/60">Please complete all data</div>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-5">
                            <div class="">
                                <div class="mb-2">
                                    <div class="text-base font-medium">Projects Name *</div>
                                </div>
                                <form class="flex items-center">
                                    <input type="text" placeholder="Enter project name" class="w-full p-5 flex flex-wrap placeholder:text-sm rounded-md bg-abu1 border border-stroke2">
        
                                    </input>
                                </form>
                            </div>
                            <div class="">
                                <div class="mb-2">
                                    <div class="text-base font-medium">Qualifications</div>
                                </div>
                                <form class="flex items-center">
                                    <input type="text" placeholder="Enter minimum qualifications" class="w-full p-5 flex flex-wrap placeholder:text-sm rounded-md bg-abu1 border border-stroke2">
        
                                    </input>
                                </form>
                            </div>
                            <div class="">
                                <div class="mb-2">
                                    <div class="text-base font-medium">Project Description *</div>
                                </div>
                                <form class="flex items-center">
                                    <input type="text" placeholder="Enter project description" class="w-full p-5 flex flex-wrap placeholder:text-sm rounded-md bg-abu1 border border-stroke2">
        
                                    </input>
                                </form>
                            </div>
                            <div class="">
                                <div class="mb-2">
                                    <div class="text-base font-medium">Skills</div>
                                </div>
                                <form class="flex items-center">
                                    <input type="text" placeholder="Enter the required skills" class="w-full p-5 flex flex-wrap placeholder:text-sm rounded-md bg-abu1 border border-stroke2">
        
                                    </input>
                                </form>
                            </div>
                            <div class="">
                                <div class="mb-2">
                                    <div class="text-base font-medium">Job Type *</div>
                                </div>
                                <form class="flex items-center">
                                    <button type="text" class="w-full p-5 flex flex-wrap text-sm text-black/35 rounded-md bg-abu1 border border-stroke2">
                                        <span class="font-medium">Choose one</span>
                                        <img src="" alt=""/>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div class="flex justify-end gap-6 pt-5">
                            <button type="button" class="bg-white text-stroke1 rounded-md py-2 px-12">Cancel</button>
                            <button type="submit" class="bg-primary text-white rounded-md py-2 px-12">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}