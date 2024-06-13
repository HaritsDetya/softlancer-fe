import React from "react";
import Sidebar from "./Sidebar";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { MdEdit, MdDelete } from "react-icons/md";

export default function ProjectsManagement() {
  const router = useRouter();
  const path = router.asPath;
  const currentPath = path.split("/")[3];

  const company = [
    {
      id: 1,
      logo: "/images/grab.svg",
      company: "PT Grab Teknologi Indonesia",
      description:
        "PT Grab Teknologi Indonesia adalah sebuah perusahaan yang berfokus pada teknologi dan inovasi. Perusahaan ini didedikasikan untuk menyediakan solusi teknologi terkini dan mengembangkan layanan yang memudahkan kehidupan sehari-hari. Dengan tim yang berpengalaman dan berkomitmen tinggi, PT Grab Teknologi Indonesia terus memperluas jangkauan dan meningkatkan kualitas layanannya untuk mencapai visi menjadi pemimpin dalam industri teknologi di Indonesia.",
    },
  ];

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
              <div className="relative m-6 mb-3 rounded-lg shadow-sm">
                <div className="absolute m-3 inset-y-0 left-0 flex items-center">
                  <label htmlFor="filter" className="sr-only">
                    Filter
                  </label>
                  <select
                    id="filter"
                    name="filter"
                    autoComplete="filter"
                    className="h-full rounded-lg ring-1 ring-primary bg-transparent py-0 pl-3 pr-7 text-active focus:outline-none focus:ring-2 focus:ring-inset focus:ring-active sm:text-sm"
                  >
                    <option>Filter</option>
                    <option>Id</option>
                    <option>Name</option>
                    <option>Email</option>
                    <option>Phone</option>
                    <option>Role</option>
                  </select>
                </div>
                <input
                  type="text"
                  name=""
                  id=""
                  disabled
                  className="block h-12 w-full rounded-lg border-0 py-1.5 pl-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-active sm:text-sm sm:leading-6 disabled:bg-white"
                />
                <div className="absolute m-3 inset-y-0 right-0 mr-4 flex items-center">
                  <button
                    type="button"
                    className="h-full rounded-lg bg-primary px-7 py-0 text-xs font-normal text-white shadow-sm hover:bg-active"
                  >
                    Search
                  </button>
                </div>
              </div>
              <div className="my-6 px-6 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow sm:rounded-lg">
                      <table className="min-w-full divide-y-2 divide-stroke">
                        <thead className="bg-abu text-center">
                          <tr>
                            <th
                              scope="col"
                              className="py-3.5 pl-4 text-sm font-semibold text-primary"
                            >
                              Id
                            </th>
                            <th
                              scope="col"
                              className="py-3 pl-3.5 text-sm font-semibold text-primary"
                            >
                              Logo
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-sm font-semibold text-primary"
                            >
                              Company Name
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-sm font-semibold text-primary"
                            >
                              Description
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-sm font-semibold text-primary"
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y-2 px-5 text-center divide-stroke bg-white">
                          {company.map((companys) => (
                            <tr key={companys.id}>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-primary sm:pl-6">
                                {companys.id}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-primary">
                                <img
                                  className="rounded-md h-auto w-[1000px]"
                                  src={companys.logo}
                                  alt=""
                                />
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-primary">
                                {companys.company}
                              </td>
                              <td className="whitespace-normal text-justify px-3 py-4 text-sm text-primary">
                                {companys.description}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-primary flex gap-1">
                                <a href="#" className="">
                                  <MdEdit className="size-5" />
                                  <span className="sr-only">, {company.id}</span>
                                </a>
                                <a href="#" className="">
                                  <MdDelete className="size-5" />
                                  <span className="sr-only">, {company.id}</span>
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
