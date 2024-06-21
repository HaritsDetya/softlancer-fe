import React from "react";
import Sidebar from "../Sidebar";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { FaPlus } from "react-icons/fa";
import { PiNotepadFill } from "react-icons/pi";
import { MdEdit, MdDelete } from "react-icons/md";

export default function Form() {
  const router = useRouter();
  const path = router.asPath;
  const currentPath = path.split("/")[3];

  const tabs = [
    {
      name: "All Projects",
      href: "/admin/project-management/all-projects",
      current: currentPath === "all-projects",
    },
    {
      name: "Post Projects",
      href: `/admin/project-management/post-projects`,
      current: currentPath === "post-projects",
    },
    {
      name: "Form",
      href: `/admin/project-management/form`,
      current: currentPath === "form",
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <Sidebar />
      <main
        id="all-projects"
        className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main"
      >
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
            <div className="bg-light border border-gray-100 shadow-md shadow-black/5 rounded-xl overflow-hidden">
              <div className="w-1/3">
                <div className="sm:hidden">
                  <label htmlFor="tabs" className="sr-only">
                    Select a tab
                  </label>
                  {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                  <select
                    id="tabs"
                    name="tabs"
                    className="block w-full rounded-md border-background focus:border-primary focus:ring-primary"
                    defaultValue={tabs.find((tab) => tab.current).name}
                  >
                    {tabs.map((tab) => (
                      <option key={tab.name}>{tab.name}</option>
                    ))}
                  </select>
                </div>
                <div className="hidden sm:block">
                  <nav
                    className="isolate flex divide-x divide-stroke1 rounded-lg"
                    aria-label="Tabs"
                  >
                    {tabs.map((tab, tabIdx) => (
                      <a
                        key={tab.name}
                        href={tab.href}
                        className={classNames(
                          tab.current ? "text-active" : "text-light1 hover:text-gray-700",
                          tabIdx === 0 ? "rounded-l-lg" : "",
                          tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                          "group relative min-w-0 flex-1 overflow-hidden py-3 bg-transparent text-center text-xs font-medium hover:bg-background focus:z-10",
                        )}
                        aria-current={tab.current ? "page" : undefined}
                      >
                        <span>{tab.name}</span>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            tab.current ? "bg-primary" : "bg-transparent",
                            "absolute inset-x-0 bottom-0 h-0.5",
                          )}
                        />
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="relative -mx-5 my-5 -mt-0">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-stroke1" />
                </div>
              </div>
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
