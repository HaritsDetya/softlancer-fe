import React from "react";
import Sidebar from "../Sidebar";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { LuLink } from "react-icons/lu";

export default function AddForm() {
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

  const currentItem = tabs.find((tab) => tab.current);
  const defaultValue = currentItem ? currentItem.name : tabs[0].name;

  return (
    <>
      <Sidebar />
      <main
        id="all-projects"
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
            <div className="bg-light border border-gray-100 shadow-md shadow-black/5 rounded-xl overflow-hidden">
              <form className="bg-white m-6 shadow-sm ring-2 ring-primary sm:rounded-xl md:col-span-2">
                <div className="px-4 py-6 sm:p-8">
                  <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="cv"
                        className="block text-sm font-semibold leading-6 text-active"
                      >
                        Curriculum Vitae
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <LuLink className="h-auto w-4 text-active" aria-hidden="true" />
                        </div>
                        <input
                          type="text"
                          name="cv"
                          id="cv"
                          className="bg-light block w-full rounded-md border-0 py-4 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-active sm:text-sm sm:leading-6"
                          placeholder="Add your curriculum vitae"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="porto"
                        className="block text-sm font-semibold leading-6 text-active"
                      >
                        Portofolio
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <LuLink className="h-auto w-4 text-active" aria-hidden="true" />
                        </div>
                        <input
                          type="text"
                          name="porto"
                          id="porto"
                          className="bg-light block w-full rounded-md border-0 py-4 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-active sm:text-sm sm:leading-6"
                          placeholder="Add your portofolio"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="role"
                        className="block text-sm font-semibold leading-6 text-active"
                      >
                        Role
                      </label>
                      <div className="mt-2">
                        <input
                          id="role"
                          name="role"
                          type="text"
                          className="bg-light block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-active sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
