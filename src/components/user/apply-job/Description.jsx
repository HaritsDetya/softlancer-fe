import Image from "next/image";
import React from "react";

const Description = ({ project, company, id }) => {
  if (!project || !company) {
    return <div className="px-16 py-7 max-md:px-5">Loading...</div>;
  }

  return (
    // Start Menu
    <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow px-8 py-14 w-full bg-white rounded-lg max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-xl font-semibold leading-5 text-center text-teal-800 max-md:mt-9">
                <Image
                  src={company.company_logo}
                  width={300}
                  height={300}
                  className="w-full border border-solid shadow-sm aspect-[1.22] border-black border-opacity-30"
                />
                <div className="justify-center items-center px-16 py-4 mt-10 rounded-xl bg-slate-300 max-md:px-5">
                  {project.project_title}
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-9 max-md:max-w-full">
                <div className="justify-center px-11 py-4 text-xl font-semibold leading-5 text-teal-800 rounded-xl bg-slate-300 max-md:px-5 max-md:max-w-full">
                  {company.company_name}
                </div>
                <div className="mt-6 text-base leading-7 text-justify text-black max-md:max-w-full">
                  {company.company_description}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7 text-base leading-9 text-justify text-black max-md:mr-2.5 max-md:max-w-full">
          {project.project_description}
        </div>
        <div className="flex gap-5 justify-between self-end mt-16 text-base font-medium leading-4 max-md:mt-10 max-md:mr-2.5">
          <div className="my-auto text-teal-800">1 of 3 steps</div>
          <div className="justify-center px-12 py-2.5 text-white whitespace-nowrap bg-teal-800 rounded-xl max-md:px-5">
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
