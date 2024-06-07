import React, {useEffect, useState} from "react";
import Sidebar from "./Sidebar";
import '@/pages/admin/main';
import {
    CalendarIcon,
} from '@heroicons/react/24/outline';
import { Axios } from "axios";

export default function Content() {
    const [notes, getNotes] = useState('');
    const url = '';

    // useEffect(() => {
    //     getAllNotes();
    // }, []);

    // const getAllNotes = () => {
    //     Axios.get(url)
    //     .then((response) => {
    //         getNotes(response.data);
    //     });
    // }
    
    return (
        <>
            <Sidebar />
            <div className="w-full md:w-[calc(100%-256px)] md:ml-72 bg-gray-50 min-h-screen transition-all main">
                <div className="py-10 px-6 bg-white flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
                    <div className="flex gap-3 items-center text-lg text-primary ">
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
                    <div className="w-[65%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        <div className="bg-light rounded-xl border border-gray-100 p-4 shadow-md shadow-black/5">
                            <div className="flex justify-between text-active">
                                <div>
                                    <div className="text-6xl font-semibold mb-1">21</div>
                                    <div className="text-base font-semibold">Total project</div>
                                </div>
                                <div>
                                    <img src="" alt="" />
                                    <a href="">tes</a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-light rounded-xl border border-gray-100 p-4 shadow-md shadow-black/5">
                            <div className="flex justify-between text-active">
                                <div>
                                    <div className="text-6xl font-semibold mb-1">11</div>
                                    <div className="text-base font-semibold">Projects Availlable</div>
                                </div>
                                <div>
                                    <img src="" alt="" />
                                    <a href="">tes</a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-light rounded-xl border border-gray-100 p-4 shadow-md shadow-black/5">
                            <div className="flex justify-between text-active">
                                <div>
                                    <div className="text-6xl font-semibold mb-1">13</div>
                                    <div className="text-base font-semibold">Waiting Accepted </div>
                                </div>
                                <div>
                                    <img src="" alt="" />
                                    <a href="">tes</a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-light rounded-xl border border-gray-100 p-4 shadow-md shadow-black/5">
                            <div className="flex justify-between text-active">
                                <div>
                                    <div className="text-6xl font-semibold mb-1">13</div>
                                    <div className="text-base font-semibold">Waiting Accepted </div>
                                </div>
                                <div>
                                    <img src="" alt="" />
                                    <a href="">tes</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 text-active">
                        <div className="bg-light border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
                            <div className="flex justify-between items-center mb-4">
                                <div className="text-lg font-bold">Users Recent</div>
                                <div className="bg-white1 px-4 py-2 rounded-xl">
                                    <button type="button" className="font-semibold">See All</button>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[540px]" data-tab-for="order">
                                    <thead>
                                        <tr className="font-bold">
                                            <th className="text-[12px] tracking-wide py-2 px-4 bg-abu text-left rounded-tl-md">ID</th>
                                            <th className="text-[12px] tracking-wide py-2 px-4 bg-abu text-left">Name</th>
                                            <th className="text-[12px] tracking-wide py-2 px-4 bg-abu text-left rounded-tr-md">Email Address</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                                                <span className="text-[13px] font-medium">1</span>
                                            </td>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                                                <span className="text-[13px] font-medium">Annisa Salma Rafida</span>
                                            </td>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                                                <span className="text-[13px] font-medium">anisahsalmarafida@mail.ugm.ac.id</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                                                <span className="text-[13px] font-medium">2</span>
                                            </td>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                                                <span className="text-[13px] font-medium">Aprilia Wulandari</span>
                                            </td>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                                                <span className="text-[13px] font-medium">apriliawulandari@mail.ugm.ac.id</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 rounded-bl-md border-y-stroke">
                                                <span className="text-[13px] font-medium">3</span>
                                            </td>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                                                <span className="text-[13px] font-medium">Miftah Sabirah</span>
                                            </td>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 rounded-be-md border-y-stroke">
                                                <span className="text-[13px] font-medium">miftahsabirah@mail.ugm.ac.id</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="bg-light border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
                            <div className="flex justify-between items-center mb-4">
                                <div className="text-lg font-bold">Project Recent</div>
                                <div className="bg-white1 px-4 py-2 rounded-xl">
                                    <button type="button" className="font-semibold">See All</button>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[540px]" data-tab-for="order">
                                    <thead>
                                        <tr className="font-bold">
                                            <th className="text-[12px] tracking-wide py-2 px-4 bg-abu text-left rounded-tl-md">ID</th>
                                            <th className="text-[12px] tracking-wide py-2 px-4 bg-abu text-left">Projects Name</th>
                                            <th className="text-[12px] tracking-wide py-2 px-4 bg-abu text-left rounded-tr-md">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                                                <span className="text-[13px] font-medium">1</span>
                                            </td>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                                                <span className="text-[13px] font-medium">Grab Wallet</span>
                                            </td>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                                                <span className="text-[13px] font-medium">Project Grab Wallet adalah inisiatif </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                                                <span className="text-[13px] font-medium">1</span>
                                            </td>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                                                <span className="text-[13px] font-medium">Grab Wallet</span>
                                            </td>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                                                <span className="text-[13px] font-medium">Project Grab Wallet adalah inisiatif </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                                                <span className="text-[13px] font-medium">1</span>
                                            </td>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                                                <span className="text-[13px] font-medium">Grab Wallet</span>
                                            </td>
                                            <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                                                <span className="text-[13px] font-medium">Project Grab Wallet adalah inisiatif </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}