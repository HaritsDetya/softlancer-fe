import React from "react";
import AdminNav from "../AdminNav";

export default function HandleDetail({ handle }) {

  return (
    <>
      <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main">
        <AdminNav />
        <div className="p-5">
          <div className="grid grid-cols-1 mb-6 text-active text-left">
            {handle.map((detail, index) => (
              <div
                key={detail.id && index}
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
                        <dd className="mt-1 text-sm leading-6 sm:col-span-6 sm:mt-0">
                          : {detail.role.role}
                        </dd>
                        <dt className="text-sm font-medium">Name</dt>
                        <dd className="mt-1 text-sm leading-6 sm:col-span-6 sm:mt-0">
                          : {detail.user.name}
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
                          : {detail.project.project_title}
                        </dd>
                        <dt className="text-sm font-medium"></dt>
                        <dd className="mt-1 text-sm text-justify leading-6 sm:col-span-6 sm:mt-0">
                          {detail.project.project_description}
                        </dd>
                        <dt className="text-sm font-medium">Qualifications</dt>
                        <dd className="mt-1 text-sm text-justify leading-6 sm:col-span-6">
                          <ol className="list-decimal pl-5">
                            {detail.project.project_qualification}
                            {/* {detail.project_qualification.map((qualification, index) => (
                              <li key={index}>{qualification}</li>
                            ))} */}
                          </ol>
                        </dd>
                        <dt className="text-sm font-medium">Skills</dt>
                        <dd className="mt-1 text-sm text-justify leading-6 sm:col-span-6 sm:mt-0">
                          <ol className="list-decimal pl-5">
                            {detail.project.project_skill}
                            {/* {detail.project_skill.map((skill, index) => (
                              <li key={index}>{skill}</li>
                            ))} */}
                          </ol>
                        </dd>
                      </div>
                    </div>
                  </dl>
                  <div className="flex gap-6 pt-5">
                    <a href="/admin/handle-application/handle-approve">
                      <button
                        type="button"
                        className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-active shadow-sm ring-1 ring-inset ring-active hover:bg-gray-100"
                      >
                        Approve
                      </button>
                    </a>
                    <a href="/admin/hancle-application/handle-application">
                      <button
                        type="button"
                        className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-danger shadow-sm ring-1 ring-inset ring-danger hover:bg-gray-100"
                      >
                        Decline
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
