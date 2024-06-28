import React, { useState } from "react";
import Sidebar from "./Sidebar";
import AdminNav from "./AdminNav";

export default function ActiveUserContent({ users, isLoading }) {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    // Implement the search functionality here
  };

  return (
    <>
      <Sidebar />
      <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main">
        <AdminNav />
        <div className="p-5 m-5 bg-light rounded-xl">
          <div className="grid grid-cols-1 mb-6 text-active text-center">
            <div className="relative mt-2 mb-3 rounded-lg shadow-sm">
              <div className="absolute inset-y-0 left-0 flex items-center m-3">
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
                  onClick={handleSearch}
                  className="h-full rounded-lg bg-primary px-7 py-0 text-xs font-normal text-white shadow-sm hover:bg-active"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="mt-4 flow-root">
              <div className="overflow-auto">
                <div className="inline-block min-w-full align-middle">
                  <div className="shadow sm:rounded-lg">
                    <table className="min-w-full divide-y-2 divide-stroke">
                      <thead className="bg-abu">
                        <tr>
                          {["Id", "Name", "Email Address", "Phone", "Role"].map((header) => (
                            <th
                              key={header}
                              scope="col"
                              className="py-3 px-3.5 text-sm font-semibold text-primary"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y-2 divide-stroke bg-white">
                        {users &&
                          users.map((user) => (
                            <tr key={user.id}>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-primary">
                                {user.id}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-primary">
                                {user.name}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-primary">
                                {user.email}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-primary">
                                {user.phone_number}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-primary">
                                {user.roles !== null &&
                                  user.roles
                                    .slice(0, 3)
                                    .map((role) => role.role)
                                    .join(", ")}
                                {user.roles && user.roles.length > 3 && " ..."}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    {isLoading && <div className="py-4 text-center text-gray-500">Loading...</div>}
                    {!isLoading && users.length === 0 && (
                      <div className="py-4 text-center text-gray-500">No users found.</div>
                    )}
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
