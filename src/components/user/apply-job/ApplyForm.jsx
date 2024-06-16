import React, { useState } from "react";
import ApplyJobSkeleton from "./ApplyJobSkeleton";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ApplyForm = ({ applyForm, projectRole }) => {
  const [role, setRole] = useState();
  const [cvUrl, setCvUrl] = useState();
  const [portofolioUrl, setPortofolioUrl] = useState();

  const submit = async (e) => {
    e.preventDefault();
    if (!role || !cvUrl || !portofolioUrl) {
      toast.error("Please fill all the fields");
      return;
    }
    // Fetch API
    const res = applyForm(role, cvUrl, portofolioUrl);
  };

  if (!projectRole) {
    return <ApplyJobSkeleton />;
  }

  return (
    // Start Menu
    <div className="flex flex-col ml-5 w-4/5 md:ml-0 max-md:w-full">
      <div className="flex flex-col justify-between px-8 py-14 w-full bg-white rounded-lg max-md:px-5 max-md:mt-10 max-md:max-w-full">
        {/* Form */}
        <form className="w-full flex flex-col justify-between">
          {/* Form Input */}
          <div className="grid grid-cols-2 gap-3">
            <div className="grid grid-cols-1 gap-3">
              <label className="font-bold font-Poppins text-primary text-lg">
                Curriculum Vitae
              </label>
              <input
                type="url"
                name="cvUrl"
                id="cvUrl"
                required
                onChange={(e) => setCvUrl(e.target.value)}
                placeholder="CV URL"
                className="w-full placeholder-gray-700 rounded-md bg-background py-[15px] px-[10px] shadow-sm"
              />
            </div>
            <div className="grid grid-cols-1 gap-3">
              <label className="font-bold font-Poppins text-primary text-lg">Portofolio</label>
              <input
                type="url"
                name="portofolioUrl"
                id="portofolioUrl"
                required
                onChange={(e) => setPortofolioUrl(e.target.value)}
                placeholder="Portofolio URL"
                className="w-full placeholder-gray-700 rounded-md bg-background py-[15px] px-[10px] shadow-sm"
              />
            </div>
            <div className="grid grid-cols-1 gap-3">
              <label className="font-bold font-Poppins text-primary text-lg">Role</label>
              <select
                defaultValue={"role"}
                name="role"
                id="role"
                required
                onChange={(e) => setRole(e.target.value)}
                className="w-full placeholder-gray-700 rounded-md bg-background py-4 px-4 shadow-sm"
              >
                <option value={"role"} disabled>
                  Select Role
                </option>
                {/* Loop Role Option */}
                {projectRole.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.role.role}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* End Form Input */}
          {/* Navigation */}
          <div className="w-full flex justify-between max-md:mt-10 mt-16">
            <button className="justify-center px-12 py-2.5 text-white whitespace-nowrap bg-teal-800 rounded-xl max-md:px-5">
              &lt; Previous
            </button>
            <div className="flex gap-3 text-base font-medium max-md:mr-2.5">
              <p className="my-auto text-teal-800">3 of 3 steps</p>
              <button
                id="btn-submit"
                type="submit"
                onClick={submit}
                className="justify-center px-12 py-2.5 text-white whitespace-nowrap bg-teal-800 rounded-xl max-md:px-5"
              >
                Submit
              </button>
            </div>
          </div>
          {/* End Navigation */}
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
