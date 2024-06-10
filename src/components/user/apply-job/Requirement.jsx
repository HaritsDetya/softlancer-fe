import React from "react";

const Requirement = ({ project, company }) => {
  if (!project || !company) {
    return <div className="px-16 py-7 max-md:px-5">Loading...</div>;
  }

  return (
    // Start Menu
    <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col justify-between px-8 py-14 w-full bg-white rounded-lg max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div>
          <p className="font-semibold text-[20px] text-primary">Project Type</p>
          <p className="text-[16px] my-3">- {project.job_type}</p>
          <hr className="my-5 border-t-2 border-primary" />
        </div>
        <div>
          <p className="font-semibold text-[20px] text-primary">Qualifications</p>
          <p className="text-[16px] my-3">{project.project_qualification}</p>
          <hr className="my-5 border-t-2 border-primary" />
        </div>
        <div>
          <p className="font-semibold text-[20px] text-primary">Skills</p>
          <p className="text-[16px] my-3">{project.project_skill}</p>
        </div>
        <div className="w-full flex justify-between max-md:mt-10 mt-16">
          <div className="justify-center px-12 py-2.5 text-white whitespace-nowrap bg-teal-800 rounded-xl max-md:px-5">
            Previous
          </div>
          <div className="flex gap-3 text-base font-medium max-md:mr-2.5">
            <p className="my-auto text-teal-800">2 of 3 steps</p>
            <div className="justify-center px-12 py-2.5 text-white whitespace-nowrap bg-teal-800 rounded-xl max-md:px-5">
              Next
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirement;
