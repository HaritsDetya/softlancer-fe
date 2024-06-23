import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import AdminNav from "./AdminNav";

export default function ActiveUserContent({users, isLoading}) {
  const [search, setSearch] = useState("");

  return (
    <>
      <Sidebar />
      <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main">
        <AdminNav/>
        <div className="p-5 m-5 bg-light rounded-xl">
          <div className="grid grid-cols-1 mb-6 text-active text-center">
            <div className="relative mt-2 mb-3 rounded-lg shadow-sm">
              <div className="absolute m-3 inset-y-0 left-0 flex items-center">
                <label htmlFor="filter" className="sr-only">
                  Filter
                </label>
                <select
                  id="filter"
                  name="filter"
                  autoComplete="filter"
                  className="h-full rounded-lg ring-1 ring-primary bg-transparent py-0 pl-3 pr-7 text-active focus:outline-none focus:ring-2 focus:ring-inset focus:ring-active sm:text-sm"
                  // onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="">Filter</option>
                  <option value="id">Id</option>
                  <option value="name">Name</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="role">Role</option>
                </select>
              </div>
              <input
                type="text"
                name="search"
                id="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="block h-12 w-full rounded-lg border-0 py-1.5 pl-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-active sm:text-sm sm:leading-6 disabled:bg-white"
              />
              <div className="absolute m-3 inset-y-0 right-0 mr-4 flex items-center">
                <button
                  type="button"
                  onClick={(e) => handleSearch}
                  className="h-full rounded-lg bg-primary px-7 py-0 text-xs font-normal text-white shadow-sm hover:bg-active"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="mt-4 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <div className="overflow-hidden shadow sm:rounded-lg">
                    <table className="min-w-full divide-y-2 divide-stroke">
                      <thead className="bg-abu">
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
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-sm font-semibold text-primary"
                          >
                            Email Address
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-sm font-semibold text-primary"
                          >
                            Phone
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-sm font-semibold text-primary"
                          >
                            Role
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y-2 divide-stroke bg-white">
                        {users &&
                        users.map((user) => (
                          <tr key={user.id}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-primary sm:pl-6">
                              {user.id}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-primary">
                              {user.name}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-primary">
                              {user.email}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-primary">
                              {user.phone}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-primary">
                              {user.roles !== null &&
                                  user.roles.slice(0, 3).map(
                                      (role) => role.role + " "
                                  )} ...
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
      </main>
    </>
  );
}
