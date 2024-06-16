import React from "react";

const HistoryCardSkeleton = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <li className="overflow-hidden w-full flex items-center justify-between gap-x-6 py-5 px-4 bg-light shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl animate-pulse">
      <div className="flex gap-x-4 w-full">
        <div className="flex-none rounded-md bg-gray-500 h-16 w-16"></div>
        <div className="min-w-0 flex-auto space-y-3">
          <div className="h-4 bg-gray-500 rounded w-3/4"></div>
          <div className="h-4 bg-gray-500 rounded w-full"></div>
          <div className="mt-3 flex gap-x-3 justify-end sm:ml-4 sm:mt-0">
            <span className="inline-flex items-center rounded-full bg-gray-500 px-6 py-2 text-xs font-medium text-transparent">
              Loading...
            </span>
            <span className="inline-flex items-center rounded-full bg-gray-500 px-6 py-2 text-xs font-medium text-transparent">
              Loading...
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default HistoryCardSkeleton;
