import React from "react";
import Sidebar from "../Sidebar";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import AdminNav from "../AdminNav";

export default function HandleDetail({handlee, role}) {

  const handle = [
    {
      role: "Front-end",
      detail:
        "Project Grab Wallet adalah inisiatif terbaru dari Grab yang bertujuan untuk merevolusi pengalaman pembayaran digital bagi pengguna di seluruh wilayah layanan. Fokus utama proyek ini adalah untuk menciptakan sebuah dompet digital yang canggih, aman, dan mudah digunakan, yang memungkinkan pengguna untuk melakukan berbagai transaksi secara efisien dan nyaman. Tim pengembangan Grab Wallet akan bekerja secara intensif untuk menghadirkan fitur-fitur inovatif seperti pembayaran tanpa kontak, integrasi dengan layanan finansial lainnya, dan kemampuan untuk menyimpan beragam jenis kartu pembayaran.",
      qualifications: [
        "Enrolled in a Bachelor's degree program in Computer Science, Software Engineering, Web Development, or related field at an accredited institution.",
        "Demonstrated passion for frontend development through personal projects, coursework, or extracurricular activities.",
        "Proficiency in HTML, CSS, and JavaScript, with the ability to showcase practical knowledge through projects or assignments.",
        "Strong willingness to learn and adapt to new technologies, frameworks, and best practices in frontend development.",
        "Excellent communication and teamwork skills, with the ability to collaborate effectively with peers and stakeholders on projects and assignments.",
      ],
      skills: [
        "Proficiency in HTML, CSS, and JavaScript.",
        "Experience with responsive and mobile-first design principles.",
        "Knowledge of frontend build tools such as Webpack or Gulp.",
        "Familiarity with version control systems such as Git.",
        "Excellent communication and collaboration skills, with the ability to work effectively in a team environment.",
      ],
      cv: "https://www.anisahsalmarr-curriculum_vitae.com/",
      portofolio: "https://www.anisahsalmarr-curriculum_vitae.com/",
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <Sidebar />
      <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main">
        <AdminNav/>
        <div className="p-5">
          <div className="grid grid-cols-1 mb-6 text-active text-left">
            {handle.map((detail, index) => (
              <div
                key={index}
                className="bg-light p-6 border border-gray-100 shadow-md shadow-black/5 rounded-md overflow-hidden"
              >
                <div className="px-4 sm:px-0">
                  <h3 className="text-base font-semibold leading-7 text-active">Project Role</h3>
                  <p className="mt-1 max-w-2xl text-sm leading-6 text-black">
                    <span className="inline-block mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-active"></span>
                    {detail.role}
                  </p>
                </div>
                <div className="mt-6">
                  <dl className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="border-t border-stroke1 px-4 py-6 sm:col-span-2 sm:px-0">
                      <dt className="text-base font-semibold leading-6 text-active">Grab Wallet</dt>
                      <dd className="mt-1 text-justify text-sm leading-6 text-gray-700 sm:mt-2">
                        {detail.detail}
                      </dd>
                    </div>
                    <div className="border-t border-stroke1 px-4 py-6 sm:col-span-2 sm:px-0">
                      <dt className="text-base font-semibold leading-6 text-active">
                        Qualifications
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                        <ol className="list-decimal pl-5">
                          {detail.qualifications.map((qualification, index) => (
                            <li key={index}>{qualification}</li>
                          ))}
                        </ol>
                      </dd>
                    </div>
                    <div className="border-t border-stroke1 px-4 py-6 sm:col-span-2 sm:px-0">
                      <dt className="text-base font-semibold leading-6 text-active">Skills</dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                        <ol className="list-decimal pl-5">
                          {detail.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                          ))}
                        </ol>
                      </dd>
                    </div>
                    <div className="border-t border-stroke1 px-4 py-6 sm:col-span-2 sm:px-0">
                      <dt className="text-base font-semibold leading-6 text-active">
                        Curriculum Vitae
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                        <a href="">{detail.cv}</a>
                      </dd>
                      <dt className="text-base pt-3 font-semibold leading-6 text-active">
                        Portofolio
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                        <a href="">{detail.portofolio}</a>
                      </dd>
                    </div>
                  </dl>
                  <div className="flex justify-end gap-6 pt-5">
                    <a href="/admin/handle-application/handle-approve">
                      <button
                        type="button"
                        className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-active shadow-sm ring-1 ring-inset ring-active hover:bg-gray-100"
                      >
                        Approve
                      </button>
                    </a>
                    <button
                      type="button"
                      className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-danger shadow-sm ring-1 ring-inset ring-danger hover:bg-gray-100"
                    >
                      Decline
                    </button>
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
