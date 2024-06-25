import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TabsProjects({ id }) {
  const router = useRouter();
  const path = router.asPath;
  const currentPath = path.split("/")[3];

  const tabs = [
    {
      name: "All Projects",
      href: `/admin/project-management/all-projects`,
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

  return (
    <>
      <div className="w-1/3">
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-fu bll rounded-md border-background focus:border-primary focus:ring-primary"
            defaultValue={tabs.find((tab) => tab.current)?.name || tabs[0].name}
            onChange={(e) => router.push(tabs.find(tab => tab.name === e.target.value).href)}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="isolate flex divide-x divide-stroke1 rounded-lg" aria-label="Tabs">
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
    </>
  );
}
