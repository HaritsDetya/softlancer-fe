import React, { Fragment, useState } from "react";
import Sidebar from "../Sidebar";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { LuLink } from "react-icons/lu";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/20/solid";
import AdminNav from "../AdminNav";

export default function AddForm() {

  const roles = [
    { id: 1, role: "UI/UX Designer" },
    { id: 2, role: "Frontend" },
    { id: 3, role: "Backend" },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [selectedRole, setSelectedRole] = useState(roles[2]);

  return (
    <>
      <main
        id="all-projects"
        className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main"
      >
        <AdminNav />
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
                        Portfolio
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
                          placeholder="Add your portfolio"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <Listbox value={selectedRole} onChange={setSelectedRole}>
                        {({ open }) => (
                          <>
                            <Listbox.Label className="block text-base font-medium leading-6">
                              Role
                            </Listbox.Label>
                            <div className="relative flex items-center mt-2">
                              <Listbox.Button className="relative w-full cursor-default rounded-md bg-light ring-1 ring-inset ring-gray-300 p-5 text-left text-active shadow-sm focus:outline-none focus:ring-2 focus:ring-active sm:text-sm sm:leading-6">
                                <span className="block truncate">{selectedRole.role}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                  <ChevronUpDownIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                </span>
                              </Listbox.Button>

                              <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-light py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                  {roles.map((role) => (
                                    <Listbox.Option
                                      key={role.id}
                                      className={({ active }) =>
                                        classNames(
                                          active ? "bg-primary text-white" : "text-active",
                                          "relative cursor-default select-none py-2 pl-3 pr-9",
                                        )
                                      }
                                      value={role}
                                    >
                                      {({ selected, active }) => (
                                        <>
                                          <span
                                            className={classNames(
                                              selected ? "font-semibold" : "font-normal",
                                              "block truncate",
                                            )}
                                          >
                                            {role.role}
                                          </span>

                                          {selected ? (
                                            <span
                                              className={classNames(
                                                active ? "text-white" : "text-active",
                                                "absolute inset-y-0 right-0 flex items-center pr-4",
                                              )}
                                            >
                                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                          ) : null}
                                        </>
                                      )}
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                              </Transition>
                            </div>
                          </>
                        )}
                      </Listbox>
                    </div>
                  </div>
                </div>
              </form>
              <div className="flex m-6 justify-start gap-6 pt-5">
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
