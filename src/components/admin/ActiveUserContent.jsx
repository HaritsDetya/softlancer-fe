import React from "react";
import Sidebar from "./Sidebar";
import { CalendarIcon } from "@heroicons/react/24/outline";

export default function ActiveUserContent() {
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
          <div className="grid grid-cols-1 mb-6 text-active text-center">
            <div className="rounded-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[540px]" data-tab-for="order">
                  <thead>
                    <tr className="font-bold">
                      <th className="text-[12px] tracking-wide py-2 px-4 bg-abu rounded-tl-md">
                        ID
                      </th>
                      <th className="text-[12px] tracking-wide py-2 px-4 bg-abu">Name</th>
                      <th className="text-[12px] tracking-wide py-2 px-4 bg-abu">Email Address</th>
                      <th className="text-[12px] tracking-wide py-2 px-4 bg-abu">Phone</th>
                      <th className="text-[12px] tracking-wide py-2 px-4 bg-abu rounded-tr-md">
                        Role
                      </th>
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
                        <span className="text-[13px] font-medium">
                          anisahsalmarafida@mail.ugm.ac.id
                        </span>
                      </td>
                      <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                        <span className="text-[13px] font-medium">+6285012345678</span>
                      </td>
                      <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                        <span className="text-[13px] font-medium">
                          Frontend UI/UX Designer Mobile Developer
                        </span>
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
                        <span className="text-[13px] font-medium">
                          apriliawulandari@mail.ugm.ac.id
                        </span>
                      </td>
                      <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                        <span className="text-[13px] font-medium">+6285012345678</span>
                      </td>
                      <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                        <span className="text-[13px] font-medium">
                          Backend Project Manager Mobile Developer
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-y-[3px] bg-white1 rounded-bl-md border-y-stroke">
                        <span className="text-[13px] font-medium">3</span>
                      </td>
                      <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                        <span className="text-[13px] font-medium">Miftah Sabirah</span>
                      </td>
                      <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                        <span className="text-[13px] font-medium">
                          miftahsabirah@mail.ugm.ac.id
                        </span>
                      </td>
                      <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                        <span className="text-[13px] font-medium">+6285012345678</span>
                      </td>
                      <td className="py-2 px-4 border-y-[3px] bg-white1 rounded-be-md border-y-stroke">
                        <span className="text-[13px] font-medium">
                          UI/UX Designer Frontend Backend
                        </span>
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
  );
}