import React from "react";

const JobCardSkeleton = () => {
  return (
    <div className="bg-background rounded-lg py-3 px-4 mb-3 mr-auto w-full relative animate-pulse">
      <div className="flex items-center">
        <div className="h-10 w-10 bg-gray-500 rounded-full"></div>
        <div className="ml-3 w-32 h-6 bg-gray-500 rounded"></div>
      </div>
      <div className="grid grid-cols-2 my-4">
        <div className="bg-gray-500 text-center flex-1 rounded-md py-1 h-6"></div>
      </div>
      <div className="text-xs mb-5 h-12 bg-gray-500 rounded"></div>
      <div className="absolute bottom-3 right-4 h-4 w-4 bg-gray-500 rounded"></div>
    </div>
  );
};

export default JobCardSkeleton;
