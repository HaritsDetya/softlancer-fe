import React from "react";
import AdminNav from "../AdminNav";
import TabsProjects from "./TabsProjects";

export default function ProjectsManagement({ projects}) {

  return (
    <>
      <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main">
        <AdminNav />
        <div className="p-5">
          <div className="grid grid-cols-1 mb-6 text-active text-left">
            <div className="bg-light border border-gray-100 shadow-md shadow-black/5 rounded-xl overflow-hidden">
              <TabsProjects />
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
                <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-auto shadow sm:rounded-lg max-w-full mx-auto">
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
                                  {project.company.company_name}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-primary">
                                  {project.job_type}
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
