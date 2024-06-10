import Image from "next/image";
import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ApplySection({ project, company, id }) {
  if (!project || !company) {
    return <div className="px-16 py-7 max-md:px-5">Loading...</div>;
  }

  const router = useRouter();
  const path = router.asPath;
  const currentPath = path.split("/")[3];

  const menu = [
    {
      name: "Description",
      href: `/apply-job/${id}/description`,
      icon: CheckCircleIcon,
      current: currentPath === "description",
    },
    {
      name: "Requirements",
      href: `/apply-job/${id}/requirement`,
      icon: CheckCircleIcon,
      current: currentPath === "requirement",
    },
    {
      name: "Form Apply",
      href: `/apply-job/${id}/apply`,
      icon: CheckCircleIcon,
      current: currentPath === "apply",
    },
  ];

  return (
    // Start Menu
    <div className="bg-background px-16 py-7 max-md:px-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col text-base font-semibold tracking-tight leading-6 text-black text-opacity-60 max-md:mt-10">
            <nav className="flex flex-1 flex-col" aria-label="Sidebar">
              <div role="list" className="-mx-2 space-y-5">
                {menu.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-background text-active font-bold shadow-lg drop-shadow-lg shadow-black/25"
                          : "bg-white1 text-black/60",
                        "group flex gap-x-3 rounded-md p-6 leading-6",
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current ? "text-active" : "text-black/60",
                          "h-6 w-6 shrink-0",
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </div>
        {/* End Menu */}
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
