import React from "react";
import Sidebar from "./Sidebar";
import {
    CalendarIcon,
} from '@heroicons/react/24/outline';

export default function HandleAplication() {
    
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
                                <div className="text-xs font-semibold">All Company</div>
                            </div>
                            <div className="overflow-x-auto p-5">
                                <table className="w-full min-w-[540px]" data-tab-for="order">
                                    <thead>
                                        <tr className="font-bold text-nowrap text-center">
                                            <th className="text-[12px] tracking-wide py-2 px-4 bg-abu rounded-tl-md">ID</th>
                                            <th className="text-[12px] tracking-wide py-2 px-4 bg-abu">Project Role</th>
                                            <th className="text-[12px] tracking-wide py-2 px-4 bg-abu">Curriculum Vitae</th>
                                            <th className="text-[12px] tracking-wide py-2 px-4 bg-abu">Portfolio</th>
                                            <th className="text-[12px] tracking-wide py-2 px-4 bg-abu rounded-tr-md">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                                                <span className="text-[13px] font-medium">1</span>
                                            </td>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                                                <span className="text-[13px] font-medium">Frontend</span>
                                            </td>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke text-nowrap">
                                                <span className="text-[13px] font-medium">https://www.anisahsalmarr-curriculum_vitae.com/</span>
                                            </td>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                                                <span className="text-[13px] font-medium">https://www.anisahsalmarrrrr-portfolio.com/</span>
                                            </td>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke text-center">
                                                <button type="button" className="w-24 h-10 mb-2 rounded-full border-solid border-2 border-active text-xs text-active">Approve</button>
                                                <button type="button" className="w-24 h-10 rounded-full border-solid border-2 border-danger text-xs text-danger">Decline</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                                                <span className="text-[13px] font-medium">2</span>
                                            </td>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                                                <span className="text-[13px] font-medium">Frontend</span>
                                            </td>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke text-nowrap">
                                                <span className="text-[13px] font-medium">https://www.anisahsalmarr-curriculum_vitae.com/</span>
                                            </td>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                                                <span className="text-[13px] font-medium">https://www.anisahsalmarrrrr-portfolio.com/</span>
                                            </td>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke text-center">
                                                <button type="button" className="w-24 h-10 mb-2 rounded-full border-solid border-2 border-active text-xs text-active">Approve</button>
                                                <button type="button" className="w-24 h-10 rounded-full border-solid border-2 border-danger text-xs text-danger">Decline</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 rounded-bl-md border-y-stroke">
                                                <span className="text-[13px] font-medium">3</span>
                                            </td>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                                                <span className="text-[13px] font-medium">Frontend</span>
                                            </td>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke text-nowrap">
                                                <span className="text-[13px] font-medium">https://www.anisahsalmarr-curriculum_vitae.com/</span>
                                            </td>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                                                <span className="text-[13px] font-medium">https://www.anisahsalmarrrrr-portfolio.com/</span>
                                            </td>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke text-center">
                                                <button type="button" className="w-24 h-10 mb-2 rounded-full border-solid border-2 border-active text-xs text-active">Approve</button>
                                                <button type="button" className="w-24 h-10 rounded-full border-solid border-2 border-danger text-xs text-danger">Decline</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}