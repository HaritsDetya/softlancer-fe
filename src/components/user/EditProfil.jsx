import React from "react";

export default function EditProfil() {
  return (
    <div className="flex flex-col px-20 pt-11 pb-20 bg-background max-md:px-5">
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-16 py-9 mt-1.5 w-full text-sm leading-5 text-black rounded-xl bg-light max-md:px-5 max-md:mt-5 max-md:max-w-full">
              <div className="text-base font-semibold leading-4 capitalize max-md:max-w-full">
                Personal Information
              </div>
              <label htmlFor="name" className="mt-8 font-medium text-teal-800 max-md:max-w-full">
                Name
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input type="text"
                name="name"
                id="name"
                className="block rounded-md border-0 w-full py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-accent2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent2 sm:text-sm sm:leading-6"
                placeholder="Anisah Salma Rafida">
                </input>
              </div>
              <label htmlFor="email" className="mt-8 font-medium text-teal-800 max-md:max-w-full">
                Email Address
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input type="text"
                name="email"
                id="email"
                className="block rounded-md border-0 w-full py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-accent2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent2 sm:text-sm sm:leading-6"
                placeholder="anisahsalmarafida@mail.ugm.ac.id">
                </input>
              </div>
              <label htmlFor="phone" className="mt-8 font-medium text-teal-800 max-md:max-w-full">
                Phone
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none rounded-lg absolute inset-y-0 left-1 flex items-center px-1 my-1 bg-zinc-300">
                  <span className="text-black sm:text-sm">+62</span>
                </div>
                <input type="text"
                name="phone"
                id="phone"
                className="block rounded-md border-0 w-full py-3 pl-12 pr-20 text-gray-900 ring-1 ring-inset ring-accent2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent2 sm:text-sm sm:leading-6"
                placeholder="85704981748">
                </input>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-14 pt-9 pb-20 w-full text-black whitespace-nowrap rounded-xl bg-light max-md:px-5 max-md:mt-3.5 max-md:max-w-full">
              <div className="self-start text-base font-semibold leading-5">
                Preferences
              </div>
              <div className="justify-center items-center self-center px-16 py-4 mt-32 max-w-full text-xl font-medium leading-5 capitalize rounded-3xl bg-slate-500 bg-opacity-40 w-[149px] max-md:px-5 max-md:mt-10">
                +
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 mt-9 max-w-full text-sm font-medium leading-4 text-white capitalize w-[532px] max-md:flex-wrap">
        <div className="justify-center items-center px-16 py-5 whitespace-nowrap rounded-xl bg-slate-500 max-md:px-5">
          Edit
        </div>
        <div className="justify-center px-14 py-5 rounded-xl bg-slate-500 max-md:pr-6 max-md:pl-5">
          Cancel{" "}
        </div>
        <div className="justify-center items-center px-16 py-5 whitespace-nowrap rounded-xl bg-slate-500 max-md:px-5">
          Save
        </div>
      </div>
    </div>
  );
}

