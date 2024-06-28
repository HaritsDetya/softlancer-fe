import React from "react";
import Sidebar from "./Sidebar";
import { FaArrowRightLong } from "react-icons/fa6";
import AdminNav from "./AdminNav";
import Link from "next/link";

const stats = [
  { name: "Total Project", stat: "21" },
  { name: "Project Open", stat: "11" },
  { name: "Project Close", stat: "13" },
  { name: "Waiting Acceptance", stat: "13" },
];

export default function Content({ users, projects, isLoading }) {
  return (
    <>
      <Sidebar />
      <div className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main">
        <AdminNav />
        <div className="p-5">
          <dl className="grid grid-cols-1 gap-5 sm:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.name}
                className="overflow-hidden rounded-2xl bg-light px-4 py-5 shadow sm:p-6"
              >
                <dd className="mt-1 text-5xl font-semibold tracking-tight text-active">
                  {item.stat}
                </dd>
                <dt className="truncate text-sm font-bold text-active">{item.name}</dt>
              </div>
            ))}
          </dl>
          <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 text-active">
            <div className="bg-light border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
              <div className="flex justify-between items-center mb-4">
                <div className="text-lg font-bold">Users Recent</div>
                <div className="bg-white1 items-center grid grid-flow-col gap-2 px-4 py-2 rounded-xl">
                  <Link href={`/admin/active-user`}>
                    <button type="button" className="font-semibold">
                      See All
                    </button>
                  </Link>
                  <FaArrowRightLong />
                </div>
              </div>
              <div className="overflow-auto max-h-80">
                <table className="w-full min-w-[540px]" data-tab-for="order">
                  <thead>
                    <tr className="font-bold">
                      <th className="text-[12px] tracking-wide py-2 px-4 bg-abu text-left rounded-tl-md">
                        ID
                      </th>
                      <th className="text-[12px] tracking-wide py-2 px-4 bg-abu text-left">Name</th>
                      <th className="text-[12px] tracking-wide py-2 px-4 bg-abu text-left rounded-tr-md">
                        Email Address
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users &&
                      users.map((user) => (
                        <tr key={user.id}>
                          <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                            <span className="text-[13px] font-medium">{user.id}</span>
                          </td>
                          <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                            <span className="text-[13px] font-medium">{user.name}</span>
                          </td>
                          <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                            <span className="text-[13px] font-medium">{user.email}</span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-light border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md h-full">
              <div className="flex justify-between items-center mb-4">
                <div className="text-lg font-bold">Project Recent</div>
                <div className="bg-white1 items-center grid grid-flow-col gap-2 px-4 py-2 rounded-xl">
                  <Link href={`/admin/company-management/all-company`}>
                  <button type="button" className="font-semibold">
                    See All
                  </button>
                  </Link>
                  <FaArrowRightLong />
                </div>
              </div>
              <div className="overflow-auto max-h-80">
                <table className="w-full min-w-[540px]" data-tab-for="order">
                  <thead>
                    <tr className="font-bold">
                      <th className="text-[12px] tracking-wide py-2 px-4 bg-abu text-left rounded-tl-md">
                        ID
                      </th>
                      <th className="text-[12px] tracking-wide py-2 px-4 bg-abu text-left">
                        Projects Name
                      </th>
                      <th className="text-[12px] tracking-wide py-2 px-4 bg-abu text-left rounded-tr-md">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects &&
                      projects.map((project) => (
                        <tr key={project.id}>
                          <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                            <span className="text-[13px] font-medium">{project.id}</span>
                          </td>
                          <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                            <span className="text-[13px] font-medium">{project.project_title}</span>
                          </td>
                          <td className="py-2 px-4 border-y-[3px] bg-white1 border-y-stroke">
                            <span className="text-[13px] font-medium">
                              {project.project_description}
                            </span>
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
    </>
  );
}
