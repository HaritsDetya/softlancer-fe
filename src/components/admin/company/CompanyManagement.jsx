import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { MdDelete, MdEdit } from "react-icons/md";
import AdminNav from "../AdminNav";
import Link from "next/link";
import TabsCompany from "./TabsCompany";

export default function CompanyManagement({ companies, isLoading, handleDelete }) {

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const openDialog = (company) => {
    setSelectedCompany(company);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setSelectedCompany(null);
    setIsDialogOpen(false);
  };

  return (
    <>
      <Sidebar />
      <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main">
        <AdminNav />
        <div className="p-5 m-5 bg-light rounded-xl h-full">
          <div className="grid grid-cols-1 mb-6 text-active text-left">
            <TabsCompany/>
            <div className="relative mb-3 rounded-lg shadow-sm">
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
            <div className="mt-4 flow-root">
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
                        {companies &&
                          companies.map((company) => (
                            <tr key={company.id}>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-primary sm:pl-6">
                                {company.id}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-primary">
                                <img
                                  className="rounded-md w-[250px] h-[150px] object-cover"
                                  src={company.company_logo}
                                />
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-primary">
                                {company.company_name}
                              </td>
                              <td className="whitespace-normal text-justify px-3 py-4 text-sm text-primary">
                                {company.company_description}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-primary flex gap-1">
                                <Link href={`edit/${company.id}`} className="">
                                  <MdEdit className="size-5" />
                                  <span className="sr-only">, {companies.id}</span>
                                </Link>
                                <button className="" onClick={() => openDialog(company)}>
                                  <MdDelete className="size-5" />
                                  <span className="sr-only">, {companies.id}</span>
                                </button>
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
        {/* Dialog Confirmation */}
        {isDialogOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold">Confirm Delete</h2>
              <p>Are you sure you want to delete this company?</p>
              <div className="mt-4 flex justify-end gap-2">
                <button
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                  onClick={closeDialog}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                  onClick={(e) => handleDelete(closeDialog, selectedCompany)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
