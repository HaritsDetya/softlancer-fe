import Image from "next/image";
import React from "react";

export default function EditProfile({ user }) {
  return (
    <div className="flex flex-col px-20 py-11 bg-background max-md:px-5">
      <div className="max-md:max-w-full">
        <div className="flex flex-col px-10 py-10 w-full leading-[100%] text-black rounded-xl bg-light max-md:px-5 max-md:mt-3.5 max-md:max-w-full">
          <div className="flex items-center sm:space-x-5">
            <Image
              width={60}
              height={60}
              className="rounded-full ring-4 ring-white"
              src={user.avatar}
              alt="User Avatar"
            />
            <div className="flex-1 sm:hidden md:block">
              <h1 className="text-xl font-bold text-gray-900">{user.name}</h1>
            </div>
          </div>
        </div>

        {/* Start Menu */}
        <div className="flex my-2 gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-1/2 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-16 py-9 w-full text-sm leading-5 text-black rounded-xl bg-light max-md:px-5 max-md:mt-5 max-md:max-w-full">
              <p className="text-base font-semibold leading-4 capitalize max-md:max-w-full">
                Personal Information
              </p>
              <label htmlFor="name" className="mt-8 font-medium text-teal-800 max-md:max-w-full">
                Name
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={user.name}
                  disabled
                  className="block rounded-md border-0 w-full py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-accent2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent2 sm:text-sm sm:leading-6"
                  placeholder="Username"
                ></input>
              </div>
              <label htmlFor="email" className="mt-8 font-medium text-teal-800 max-md:max-w-full">
                Email Address
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  disabled
                  id="email"
                  className="block rounded-md border-0 w-full py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-accent2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent2 sm:text-sm sm:leading-6"
                  placeholder="Email"
                ></input>
              </div>
              <label htmlFor="phone" className="mt-8 font-medium text-teal-800 max-md:max-w-full">
                Phone
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none rounded-lg absolute inset-y-0 left-1 flex items-center px-1 my-1 bg-zinc-300">
                  <span className="text-black sm:text-sm">+62</span>
                </div>
                <input
                  type="text"
                  name="phone"
                  value={user.phone_number}
                  id="phone"
                  className="block rounded-md border-0 w-full py-3 pl-12 pr-20 text-gray-900 ring-1 ring-inset ring-accent2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent2 sm:text-sm sm:leading-6"
                  placeholder="Nomor Telepon"
                ></input>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-1/2 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-14 pt-9 pb-20 w-full text-black whitespace-nowrap rounded-xl bg-light max-md:px-5 max-md:mt-3.5 max-md:max-w-full">
              <p className="self-start text-base font-semibold leading-5">Preferences</p>
              <div className="justify-center items-center self-center px-16 py-4 mt-32 max-w-full text-xl font-medium leading-5 capitalize rounded-3xl bg-accent3/35 bg-opacity-40 w-[149px] max-md:px-5 max-md:mt-10">
                +
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 mt-9 max-w-full text-sm font-medium leading-4 text-white capitalize w-[532px] max-md:flex-wrap">
        <div className="justify-center items-center px-16 py-5 whitespace-nowrap rounded-xl bg-accent3 max-md:px-5">
          Edit
        </div>
        <div className="justify-center px-14 py-5 rounded-xl bg-accent3 max-md:pr-6 max-md:pl-5">
          Cancel{" "}
        </div>
        <div className="justify-center items-center px-16 py-5 whitespace-nowrap rounded-xl bg-accent3 max-md:px-5">
          Save
        </div>
      </div>
    </div>
    // End Menu
  );
}
