import Image from "next/image";
import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar({ id }) {
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
  );
}
