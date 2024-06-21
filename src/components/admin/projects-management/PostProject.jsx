import React, { Fragment, useState } from "react";
import Sidebar from "../Sidebar";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default function PostProject({ id }) {
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

  const role1 = [
    { id: 1, role: "UI/UX Designer" },
    { id: 2, role: "Frontend" },
    { id: 3, role: "Backend" },
  ];
  const job1 = [
    { id: 1, job: "UI/UX Designer" },
    { id: 2, job: "Frontend" },
    { id: 3, job: "Backend" },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const getDefaultTabName = (tabs) => {
    const currentTab = tabs.find((tab) => tab.current);
    return currentTab ? currentTab.name : "";
  };

  const [selected, setSelected] = useState(role1[2]);
  const [select, setSelect] = useState(job1[2]);

  return (
    <>
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
            <div className="bg-light border border-gray-100 rounded-xl overflow-hidden">
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
              <div className="px-5 pb-5">
                <div className="pb-5 mb-4">
                  <div className="flex flex-col">
                    <div className="text-md font-semibold">New Projects</div>
                    <div className="text-xs text-active/60">Please complete all data</div>
                  </div>
                </div>
                <ul className="grid grid-cols-2 gap-6">
                  <div className="">
                    <div className="mb-2">
                      <div className="text-base font-medium">Projects Name *</div>
                    </div>
                    <form className="flex items-center">
                      <input
                        type="text"
                        placeholder="Enter project name"
                        className="w-full p-5 flex flex-wrap placeholder:text-sm rounded-md bg-abu1 border border-stroke2"
                      ></input>
                    </form>
                  </div>
                  <div className="">
                    <div className="mb-2">
                      <div className="text-base font-medium">Registration Period *</div>
                    </div>
                    <form className="flex items-center">
                      <input
                        type="text"
                        placeholder="Enter the registration period"
                        className="w-full p-5 flex flex-wrap placeholder:text-sm rounded-md bg-abu1 border border-stroke2"
                      ></input>
                    </form>
                  </div>
                  <div className="">
                    <div className="mb-2">
                      <div className="text-base font-medium">Project Description *</div>
                    </div>
                    <form className="flex items-center">
                      <input
                        type="text"
                        placeholder="Enter project description"
                        className="w-full p-5 flex flex-wrap placeholder:text-sm rounded-md bg-abu1 border border-stroke2"
                      ></input>
                    </form>
                  </div>
                  <div className="">
                    <div className="mb-2">
                      <div className="text-base font-medium">Qualifications *</div>
                    </div>
                    <form className="flex items-center">
                      <input
                        type="text"
                        placeholder="Enter minimum qualifications"
                        className="w-full p-5 flex flex-wrap placeholder:text-sm rounded-md bg-abu1 border border-stroke2"
                      ></input>
                    </form>
                  </div>
                  <div>
                    <Listbox value={selected} onChange={setSelected}>
                      {({ open }) => (
                        <>
                          <Listbox.Label className="block text-base font-medium leading-6">
                            Role Project *
                          </Listbox.Label>
                          <div className="relative flex items-center mt-2">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-abu1 border border-stroke2 p-5 text-left text-active shadow-sm focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6">
                              <span className="block truncate">{selected.role}</span>
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
                              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-abu1 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {role1.map((roles) => (
                                  <Listbox.Option
                                    key={roles.id}
                                    className={({ active }) =>
                                      classNames(
                                        active ? "bg-primary text-white" : "text-active",
                                        "relative cursor-default select-none py-2 pl-3 pr-9",
                                      )
                                    }
                                    value={roles}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <span
                                          className={classNames(
                                            selected ? "font-semibold" : "font-normal",
                                            "block truncate",
                                          )}
                                        >
                                          {roles.role}
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
                  <div className="">
                    <div className="mb-2">
                      <div className="text-base font-medium">Skills *</div>
                    </div>
                    <form className="flex items-center">
                      <input
                        type="text"
                        placeholder="Enter the required skills"
                        className="w-full p-5 flex flex-wrap placeholder:text-sm rounded-md bg-abu1 border border-stroke2"
                      ></input>
                    </form>
                  </div>
                  <div>
                    <Listbox value={select} onChange={setSelect}>
                      {({ open }) => (
                        <>
                          <Listbox.Label className="text-base font-medium leading-6">
                            Job Type *
                          </Listbox.Label>
                          <div className="relative flex items-center mt-2">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-abu1 border border-stroke2 p-5 text-left text-active shadow-sm focus:outline-none focus:ring-2 focus:ring-active sm:text-sm sm:leading-6">
                              <span className="block truncate">{select.job}</span>
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
                              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-abu1 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {job1.map((jobs) => (
                                  <Listbox.Option
                                    key={jobs.id}
                                    className={({ active }) =>
                                      classNames(
                                        active ? "bg-primary text-white" : "text-active",
                                        "relative cursor-default select-none py-2 pl-3 pr-9",
                                      )
                                    }
                                    value={jobs}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <span
                                          className={classNames(
                                            selected ? "font-semibold" : "font-normal",
                                            "block truncate",
                                          )}
                                        >
                                          {jobs.job}
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
                </ul>
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
        </div>
      </main>
    </>
  );
}