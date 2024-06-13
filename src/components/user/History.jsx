import React, { Fragment, useState } from "react";
// import { Dialog, Transition } from '@headlessui/react'

const button = [
  { name: "Waiting", href: "#", current: true, icon: null },
  { name: "Approve", href: "#", current: false, icon: null },
  { name: "Decline", href: "#", current: false, icon: null },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const history = [
  {
    name: "GrabTech Frontend Innovation Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit augue eros. Mauris suscipit metus ante, sit amet feugiat tellus dictum sed. Phasellus et urna porttitor, lobortis odio in, fermentum ante. Cras at justo ac dolor auctor posuere et vitae lectus. Sed congue mattis enim at accumsan.",
    imageUrl: "/images/grab_font.svg",
    status: "Waiting",
    location: "On-Site",
  },
  {
    name: "GrabTech Frontend Innovation Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit augue eros. Mauris suscipit metus ante, sit amet feugiat tellus dictum sed. Phasellus et urna porttitor, lobortis odio in, fermentum ante. Cras at justo ac dolor auctor posuere et vitae lectus. Sed congue mattis enim at accumsan.",
    imageUrl: "/images/grab_font.svg",
    status: "Waiting",
    location: "On-Site",
  },
];

export default function History() {
  return (
    <section className="pt-16 mx-7 bg-background">
      <div className="flex items-center">
        <div className="flex mx-8 gap-3">
          {button.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-primary text-white"
                  : "text-black text-opacity-60 hover:text-white hover:bg-primary",
                "group flex gap-x-3 rounded-xl px-8 py-2.5 text-sm leading-6 font-semibold",
              )}
            >
              {item.icon && (
                <item.icon
                  className={classNames(
                    item.current
                      ? "text-white"
                      : "text-black text-opacity-60 group-hover:text-white",
                  )}
                  aria-hidden="true"
                />
              )}
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap flex-col mx-8 mt-3">
        <ul role="list" className="space-y-3">
          {history.map((history) => (
            <li
              key={history.description}
              className="overflow-hidden flex items-center justify-between gap-x-6 py-5 px-4 bg-light shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
            >
              <div className="flex gap-x-4">
                <img
                  className="h-16 w-16 flex-none rounded-md bg-gray-50"
                  src={history.imageUrl}
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{history.name}</p>
                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-500">
                    {history.description}
                  </p>
                  <div className="mt-3 gap-x-3 justify-end flex sm:ml-4 sm:mt-0">
                    <span
                      className={classNames(
                        [history.location],
                        "inline-flex items-center rounded-full bg-primary px-6 py-2 text-xs font-medium text-white",
                      )}
                    >
                      {history.location}
                    </span>
                    <span
                      className={classNames(
                        [history.status],
                        "inline-flex items-center rounded-full bg-primary px-6 py-2 text-xs font-medium text-white",
                      )}
                    >
                      {history.status}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
