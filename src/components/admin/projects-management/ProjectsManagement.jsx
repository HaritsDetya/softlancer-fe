import React from "react";
import Sidebar from "../Sidebar";
import { useRouter } from "next/router";
import AdminNav from "../AdminNav";

export default function ProjectsManagement({ projects }) {
  const router = useRouter();
  const path = router.asPath;
  const currentPath = path.split("/")[3];

  // const projects = [
  //   {
  //     id: 1,
  //     project_title: "Grab Wallet",
  //     company: "PT Grab Teknologi Indonesia",
  //     job_type: "On-Site",
  //   },
  // ];

  const tabs = [
    {
      name: "All Projects",
      href: `/admin/project-management/all-projects`,
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

  const getDefaultTabName = (tabs) => {
    const currentTab = tabs.find((tab) => tab.current);
    return currentTab ? currentTab.name : "";
  };

  return (
    <>
      <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main">
        <AdminNav />
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
                    defaultValue={tabs.length > 0 ? getDefaultTabName(tabs) : ""}
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
                              Projects Name
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
                              Projects Type
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y-2 text-center divide-stroke bg-white">
                          {projects &&
                          projects.map((project) => (
                            <tr key={project.id}>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-primary sm:pl-6">
                                {project.id}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-primary">
                                {project.project_title}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-primary">
                                {project.company}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-primary">
                                {project.job_type} ...
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
