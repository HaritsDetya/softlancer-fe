import React from "react";
import Sidebar from "../Sidebar";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import AdminNav from "../AdminNav";

export default function HandleApprove({ handle }) {

  return (
    <>
      <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main">
        <AdminNav />
        <div className="p-5">
          <div className="grid grid-cols-1 mb-6 text-active text-left">
            {handle.map((detail, index) => (
              <div
                key={index}
                className="bg-light p-6 border border-gray-100 shadow-md shadow-black/5 rounded-md overflow-hidden"
              >
                <div>
                  <dl className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="sm:col-span-2 sm:px-0">
                      <dt className="border-b border-stroke1 text-base font-semibold leading-6 text-active">
                        Student Data
                      </dt>
                      <div className=" text-active my-3 grid sm:grid-cols-7 sm:gap-4">
                        <dt className="text-sm font-medium">Project Role</dt>
                        <dd className="mt-1 text-sm leading-6 sm:col-span-5 sm:mt-0">
                          : {detail.role}
                        </dd>
                        <button
                          type="button"
                          className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-active shadow-sm ring-1 ring-inset ring-active hover:bg-gray-100"
                        >
                          Approve
                        </button>
                        <dt className="text-sm font-medium">Name</dt>
                        <dd className="mt-1 text-sm leading-6 sm:col-span-6 sm:mt-0">
                          : {detail.name}
                        </dd>
                        <dt className="text-sm font-medium">Curriculum Vitae</dt>
                        <dd className="mt-1 text-sm leading-6 sm:col-span-6 sm:mt-0">
                          : {detail.cv_file}
                        </dd>
                        <dt className="text-sm font-medium">Portofolio</dt>
                        <dd className="mt-1 text-sm leading-6 sm:col-span-6 sm:mt-0">
                          : {detail.portofolio}
                        </dd>
                      </div>
                    </div>
                    <div className="py-4 sm:col-span-2 sm:px-0">
                      <dt className="border-b border-stroke1 text-base font-semibold leading-6 text-active">
                        Grab Wallet
                      </dt>
                      <div className=" text-active my-3 sm:grid sm:grid-cols-7 sm:gap-4">
                        <dt className="text-sm font-medium">Project Name</dt>
                        <dd className="mt-1 text-sm leading-6 sm:col-span-6 sm:mt-0">
                          : {detail.project_title}
                        </dd>
                        <dt className="text-sm font-medium"></dt>
                        <dd className="mt-1 text-sm text-justify leading-6 sm:col-span-6 sm:mt-0">
                          {detail.project_description}
                        </dd>
                        <dt className="text-sm font-medium">Qualifications</dt>
                        <dd className="mt-1 text-sm text-justify leading-6 sm:col-span-6">
                          <ol className="list-decimal pl-5">
                            {detail.project_qualification}
                            {/* {detail.project_qualification.map((qualification, index) => (
                              <li key={index}>{qualification}</li>
                            ))} */}
                          </ol>
                        </dd>
                        <dt className="text-sm font-medium">Skills</dt>
                        <dd className="mt-1 text-sm text-justify leading-6 sm:col-span-6 sm:mt-0">
                          <ol className="list-decimal pl-5">
                            {detail.project_skill}
                            {/* {detail.project_skill.map((skill, index) => (
                              <li key={index}>{skill}</li>
                            ))} */}
                          </ol>
                        </dd>
                      </div>
                    </div>
                  </dl>
                  <div className="flex gap-6 pt-5">
                    <a href="/admin/handle-application/handle-application">
                      <button
                        type="button"
                        className="bg-white text-stroke1 rounded-md py-2 px-12 hover:bg-slate-100"
                      >
                        Cancel
                      </button>
                    </a>
                    <a href="/admin/handle-application/handle-application">
                      <button
                        type="submit"
                        className="bg-primary text-white rounded-md py-2 px-12 hover:bg-active"
                      >
                        Save
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
