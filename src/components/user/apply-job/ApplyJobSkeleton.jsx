const ApplyJobSkeleton = () => {
  return (
    // Start Menu Skeleton
    <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow px-8 py-14 w-full bg-white rounded-lg max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-xl font-semibold leading-5 text-center text-teal-800 max-md:mt-9">
                <div className="w-full h-72 bg-gray-400 animate-pulse border border-solid shadow-sm aspect-[1.22] border-black border-opacity-30"></div>
                <div className="justify-center items-center px-16 py-4 mt-10 rounded-xl bg-gray-400 animate-pulse max-md:px-5 h-10"></div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-9 max-md:max-w-full">
                <div className="justify-center px-11 py-4 text-xl font-semibold leading-5 text-teal-40bg-gray-400 rounded-xl bg-gray-400 animate-pulse max-md:px-5 max-md:max-w-full h-10"></div>
                <div className="mt-6 text-base leading-7 text-justify bg-gray-400 animate-pulse max-md:max-w-full h-32"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7 text-base leading-9 text-justify bg-gray-400 animate-pulse max-md:mr-2.5 max-md:max-w-full h-32"></div>
        <div className="flex gap-5 justify-between self-end mt-16 text-base font-medium leading-4 max-md:mt-10 max-md:mr-2.5">
          <div className="my-auto text-gray-bg-gray-400 bg-gray-400 animate-pulse h-6 w-20"></div>
          <div className="justify-center px-12 py-2.5 text-white whitespace-nowrap bg-gray-200 animate-pulse rounded-xl max-md:px-5 h-10 w-24"></div>
        </div>
      </div>
    </div>
  );
};

export default ApplyJobSkeleton;
