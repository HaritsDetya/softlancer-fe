import React from "react";
import Sidebar from "../Sidebar";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { FaPlus } from "react-icons/fa";
import { PiNotepadFill } from "react-icons/pi";
import { MdEdit, MdDelete } from "react-icons/md";
import AdminNav from "../AdminNav";
import TabsProjects from "./TabsProjects";

export default function Form() {

  return (
    <>
      <main
        id="all-projects"
        className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main"
      >
        <AdminNav/>
        <div className="p-5">
          <div className="grid grid-cols-1 mb-6 text-active text-left">
            <div className="bg-light border border-gray-100 shadow-md shadow-black/5 rounded-xl overflow-hidden">
              <TabsProjects/>
              <ul
                role="list"
                className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 -mt-5"
              >
                <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-xl bg-abu1 text-center shadow">
                  <button
                    type="button"
                    className="relative block w-full py-9 text-center focus:outline-none"
                  >
                    <a href="/admin/project-management/add-form">
                      <FaPlus className="mx-auto h-8 w-auto" />
                    </a>
                  </button>
                  <div className="bg-primary h-full items-center text-xs rounded-b-xl px-4 py-2 text-white flex">
                    Blank form
                  </div>
                </li>
                <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-xl bg-abu1 text-center shadow">
                  <button
                    type="button"
                    className="relative block w-full py-9 text-center focus:outline-none"
                  >
                    <PiNotepadFill className="mx-auto h-8 w-auto" />
                  </button>
                  <div className="bg-primary h-full items-center text-xs rounded-b-xl px-4 py-2 text-white flex">
                    Formulir Pendaftaran Grab Wallet
                    <div className="pl-3 flex flex-row gap-3">
                      <a href="/admin/project-management/edit-form">
                        <MdEdit className="size-5" />
                      </a>
                      <a href="#">
                        <MdDelete className="size-5" />
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
