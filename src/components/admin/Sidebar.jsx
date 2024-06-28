import React, { useState } from "react";
import { Cog6ToothIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { TbLogout } from "react-icons/tb";
import { BiSolidDashboard } from "react-icons/bi";
import { IoMdPerson } from "react-icons/io";
import { FaBuilding, FaHandHolding } from "react-icons/fa";
import { PiBagSimpleFill } from "react-icons/pi";
import { toast } from "react-toastify";

export default function Sidebar({ id}) {
  const router = useRouter();
  const path = router.asPath;
  const pathParts = path.split("/");
  const thirdElement = pathParts[2];
  const fourthElement = pathParts[3];

  const menu = [
    {
      icon: <BiSolidDashboard />,
      name: "Dashboard",
      href: `/admin/dashboard`,
      current: thirdElement === "dashboard",
    },
    {
      icon: <IoMdPerson />,
      name: "Active Users",
      href: `/admin/active-user`,
      current: thirdElement === "active-user",
    },
    {
      icon: <FaBuilding />,
      name: "Companies Management",
      href: `/admin/company-management/all-company`,
      current: thirdElement === "company-management" && ["all-company", "add-company"].includes(fourthElement),
      subMenuPaths: ["all-company", "add-company"], 
    },
    {
      icon: <PiBagSimpleFill />,
      name: "Projects Management",
      href: `/admin/project-management/all-projects`,
      current: thirdElement === "project-management" && ["all-projects", "post-projects", "form", "add-form", "edit-form"].includes(fourthElement),
      subMenuPaths: ["all-projects", "post-projects", "form", "add-form", "edit-form"],
    },
    {
      icon: <FaHandHolding />,
      name: "Handle applications",
      href: `/admin/handle-application/handle-application`,
      current: thirdElement === "handle-application" && ["handle-application", "handle-detail", "handle-approve".includes(fourthElement)],
      subMenuPaths: ["handle-application", `handle-detail`, `handle-approve`],
    },
  ];

  const handleLogoutClick = () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      toast.success("Logout Success");
      router.push("/");
    } catch (error) {
      toast.error("Internal Server Error");
    }
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div className="fixed inset-y-0 z-50 flex w-64 flex-col">
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
                          item.current ? "bg-background text-dark1" : "text-dark1 hover:bg-background",
                          "group flex gap-x-3 rounded-md p-4 text-sm leading-6 font-semibold",
                        )}
                        onClick={(e) => {
                          e.preventDefault();
                          router.push(item.href);
                        }}
                      >
                        <span className="text-black self-center">{item.icon}</span>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="mt-auto">
                <button
                  onClick={(e) => handleLogoutClick()}
                  className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-active hover:text-dark1"
                >
                  <TbLogout
                    className="h-6 w-6 shrink-0 text-active group-hover:text-dark1"
                    aria-hidden="true"
                  />
                  Log Out
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
