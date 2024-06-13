import React from "react";
import Sidebar from "./Sidebar";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { FaFolder } from "react-icons/fa";
import { HiFolderArrowDown } from "react-icons/hi2";
import { useRouter } from "next/router";

export default function AddCompany() {
  const router = useRouter();
  const path = router.asPath;
  const currentPath = path.split("/")[3];

  const tabs = [
    {
      name: "All Company",
      href: "/admin/company-management/all-company",
      current: currentPath === "all-company",
    },
    {
      name: "Add New Company",
      href: `/admin/company-management/add-company`,
      current: currentPath === "add-company",
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <Sidebar />
      <main
        className="w-full md:w-[calc(100%-256px)] md:ml-72 bg-gray-50 min-h-screen transition-all main"
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
            <div className="bg-light border border-gray-100 shadow-md shadow-black/5 rounded-md overflow-hidden p-7">
              <div className="pb-5">
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
                <form className="flex items-center">
                  <div className="w-full flex flex-wrap rounded-md bg-abu1 border border-stroke2">
                    <div className="w-full flex flex-row gap-x-2 items-center p-5 border-b-[1px] border-stroke2">
                      <FaFolder />
                      <span className="text-stroke2 underline">Files</span>
                    </div>
                    <div className="justify-center flex m-5 rounded-md border border-separate border-dashed border-stroke2 w-full px-5 py-10">
                      <label className="text-sm text-slate-500">
                        <div>
                          <HiFolderArrowDown className="w-full h-10" />
                          <span className="text-gray-400">
                            You can drag and drop files here to add them
                          </span>
                        </div>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold"
                        />
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
                  <input
                    type="text"
                    className="w-full h-14 p-5 flex flex-wrap rounded-md bg-abu1 border border-stroke2"
                  ></input>
                </form>
              </div>
              <div className="py-5">
                <div className="mb-4">
                  <div className="text-base font-medium">Company Description</div>
                </div>
                <form className="flex items-center">
                  <input
                    type="text"
                    className="w-full h-28 p-5 flex flex-wrap rounded-md bg-abu1 border border-stroke2"
                  ></input>
                </form>
              </div>
              <div className="flex justify-end gap-6 pt-5">
                <button
                  type="button"
                  className="bg-white text-stroke1 rounded-md py-2 px-12 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-primary text-white rounded-md py-2 px-12 hover:bg-active"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
