import React, { useState } from "react";
import { Cog6ToothIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { TbLogout } from "react-icons/tb";

export default function Sidebar( { id } ) {
  const router = useRouter();
  const path = router.asPath;
  const pathParts = path.split("/");
  const thirdElement = pathParts[3];
  const fourthElement = pathParts[4];
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menu = [
    { name: "Dashboard", href: `/admin/${id}/main`, current: thirdElement === "main" },
    { name: "Active Users", href: `/admin/${id}/active-user`, current: thirdElement === "active-user" },
    {
      name: "Companys Management",
      href: `/admin/company-management/${id}/all-company`,
      current: fourthElement === "all-company",
    },
    {
      name: "Projects Management",
      href: `/admin/project-management/${id}/all-projects`,
      current: fourthElement === "all-projects",
    },
    {
      name: "Handle applications",
      href: `/admin/handle-application/${id}/handle-application`,
      current: fourthElement === "handle-application",
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-light px-6 pb-4 pt-6">
          <div className="flex h-16 shrink-0 items-center">
            <img className="h-14 w-auto" src="/images/logoSoftLancer.svg" alt="Project" />
          </div>
          <nav className="flex flex-1 flex-col pt-7">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <div className="sm:hidden">
                  <label htmlFor="menu" className="sr-only">
                    Select an item
                  </label>
                  <select
                    id="menu"
                    name="menu"
                    className="block w-full rounded-md border-background focus:border-primary focus:ring-primary"
                  >
                    {menu.map((item) => (
                      <option key={item.name}>{item.name}</option>
                    ))}
                  </select>
                </div>
                <ul role="list" className="-mx-2 space-y-4">
                  {menu.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current ? "bg-background" : "text-dark1 hover:bg-background",
                          "group flex gap-x-3 rounded-md p-4 text-sm leading-6 font-semibold",
                        )}
                        onClick={() => {
                          window.location.pathname = item.href;
                        }}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="mt-auto">
                <a
                  href="#"
                  className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-active hover:text-dark1"
                >
                  <TbLogout
                    className="h-6 w-6 shrink-0 text-active group-hover:text-dark1"
                    aria-hidden="true"
                  />
                  Log Out
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-indigo-600 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-indigo-200 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex-1 text-sm font-semibold leading-6 text-white">Dashboard</div>
        <a href="#">
          <span className="sr-only">Your profile</span>
          <img
            className="h-8 w-8 rounded-full bg-indigo-700"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </a>
      </div>
    </>
  );
}
