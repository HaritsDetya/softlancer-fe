import Image from "next/image";
import React, { useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const menu = [
  { name: "Description", href: "#", icon: CheckCircleIcon, current: true },
  { name: "Requirements", href: "#", icon: CheckCircleIcon, current: false },
  { name: "Form Apply", href: "#", icon: CheckCircleIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ApplySection({ project, company }) {
  return (
    <div className="bg-background px-16 py-7 max-md:px-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col text-base font-semibold tracking-tight leading-6 text-black text-opacity-60 max-md:mt-10">
            <nav className="flex flex-1 flex-col" aria-label="Sidebar">
              {/* Menu */}
              <ul role="list" className="-mx-2 space-y-5">
                {menu.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-background text-active font-bold shadow-lg drop-shadow-lg shadow-black/25"
                          : "bg-white1 text-black/60",
                        "group flex gap-x-3 rounded-md p-6 leading-6",
                      )}
                    >
                      <div className="bg-active shrink-0 w-6 rounded-md" />
                      <item.icon
                        className={classNames(
                          item.current ? "text-active" : "text-black/60",
                          "h-6 w-6 shrink-0",
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              {/* End Menu */}
            </nav>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-8 py-14 w-full bg-white rounded-lg max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-xl font-semibold leading-5 text-center text-teal-800 max-md:mt-9">
                    <Image
                      src={company.company_logo}
                      width={300}
                      height={300}
                      className="w-full border border-solid shadow-sm aspect-[1.22] border-black border-opacity-30"
                    />
                    <div className="justify-center items-center px-16 py-4 mt-10 rounded-xl bg-slate-300 max-md:px-5">
                      {project.project_title}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col max-md:mt-9 max-md:max-w-full">
                    <div className="justify-center px-11 py-4 text-xl font-semibold leading-5 text-teal-800 rounded-xl bg-slate-300 max-md:px-5 max-md:max-w-full">
                      {company.company_name}
                    </div>
                    <div className="mt-6 text-base leading-7 text-justify text-black max-md:max-w-full">
                      {company.company_description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-7 text-base leading-9 text-justify text-black max-md:mr-2.5 max-md:max-w-full">
              {project.project_description}
            </div>
            <div className="flex gap-5 justify-between self-end mt-16 text-base font-medium leading-4 max-md:mt-10 max-md:mr-2.5">
              <div className="my-auto text-teal-800">1 of 3 steps</div>
              <div className="justify-center px-12 py-2.5 text-white whitespace-nowrap bg-teal-800 rounded-xl max-md:px-5">
                Next
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
