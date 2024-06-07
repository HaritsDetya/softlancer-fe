import React from "react";
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

const profile = {
  name: 'Ricardo Cooper',
  email: 'ricardo.cooper@example.com',
  avatar:
    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  backgroundImage:
    'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  fields: [
    ['Phone', '(555) 123-4567'],
    ['Email', 'ricardocooper@example.com'],
    ['Title', 'Senior Front-End Developer'],
    ['Team', 'Product Development'],
    ['Location', 'San Francisco'],
    ['Sits', 'Oasis, 4th floor'],
    ['Salary', '$145,000'],
    ['Birthday', 'June 8, 1990'],
  ],
}

export default function EditProfil() {
  return (
    <div className="flex flex-col px-20 pt-11 pb-20 bg-background max-md:px-5">
      <div className="max-md:max-w-full">
        {/* <div className="flex flex-col pb-8 rounded-xl bg-slate-200 leading-[100%] max-md:max-w-full">
          <div className="flex z-10 gap-5 justify-between items-start pt-20 pr-7 pl-14 text-6xl font-medium capitalize whitespace-nowrap rounded-xl bg-slate-400 text-slate-200 max-md:flex-wrap max-md:px-5 max-md:max-w-full max-md:text-4xl">
            <div className="justify-center items-start px-7 bg-teal-600 rounded-full h-[100px] w-[100px] max-md:px-5 max-md:text-4xl">
              A
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/27d5ec3d4221e88136adc400a1c1393efb5ec9f9ba64f90ce53b5b2f792ade72?"
              className="shrink-0 mt-3.5 aspect-[1.03] fill-zinc-300 w-[31px]"
            />
          </div>
          <div className="flex flex-col self-start mt-16 ml-14 text-black max-md:mt-10 max-md:ml-2.5">
            <div className="text-xl font-medium capitalize">
              Anisah Salma Rafida
            </div>
            <div className="mt-5 text-base lowercase">
              anisahsalmarafida@mail.ugm.ac.id
            </div>
          </div>
        </div> */}
        <div className="flex flex-col pb-40 w-full leading-[100%] text-black rounded-xl bg-light max-md:px-5 max-md:mt-3.5 max-md:max-w-full">
          <div className="bg-accent1 z-10 gap-5 w-full pt-20 pr-10 whitespace-nowrap rounded-t-xl lg:h-48 max-md:flex-wrap max-md:px-5 max-md:max-w-full max-md:text-4xl">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 z-20">
              <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                <div className="flex">
                  <img className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" src={profile.avatar} alt="" />
                </div>
                <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                  <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
                    <h1 className="truncate text-2xl font-bold text-gray-900">{profile.name}</h1>
                  </div>
                  <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      <EnvelopeIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span>Message</span>
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      <PhoneIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span>Call</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
                <h1 className="truncate text-2xl font-bold text-gray-900">{profile.name}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-2 gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-1/2 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-16 py-9 w-full text-sm leading-5 text-black rounded-xl bg-light max-md:px-5 max-md:mt-5 max-md:max-w-full">
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
          <div className="flex flex-col ml-5 w-1/2 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-14 pt-9 pb-20 w-full text-black whitespace-nowrap rounded-xl bg-light max-md:px-5 max-md:mt-3.5 max-md:max-w-full">
              <div className="self-start text-base font-semibold leading-5">
                Preferences
              </div>
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
  );
}

