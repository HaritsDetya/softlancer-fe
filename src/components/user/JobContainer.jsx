import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import axios from "axios";
import JobCardSkeleton from "../home/JobCardSkeleton";

export default function JobContainer() {
  const [project, setProject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const FetchProjects = async () => {
    try {
      const res = await axios.get(process.env.API_URL + "/projects");
      const response = res.data;
      setProject(response.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    FetchProjects();
  }, []);

  return (
    <section id="find_job" className="bg-gradient-to-b from-background to-primary">
      <div className="container pb-10">
        <div className="flex flex-wrap mx-8">
          {/* Start Search */}
          <div className="w-full my-5">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center px-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="project-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-700 border border-gray-300 rounded-lg bg-light"
                  placeholder="Search projects"
                />
                <button
                  type="submit"
                  className="absolute end-2.5 bottom-2.5 px-3 py-2 text-xs text-white rounded-lg bg-accent2"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          {/* End Search */}

          {/* Jobs */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:gap-x-2 lg:grid-cols-3">
            {isLoading ? (
              <>
                <JobCardSkeleton />
                <JobCardSkeleton />
                <JobCardSkeleton />
                <JobCardSkeleton />
                <JobCardSkeleton />
                <JobCardSkeleton />
              </>
            ) : (
              project.map((project) => (
                <JobCard
                  key={project.id}
                  id={project.id}
                  companyLogo={project.company.company_logo}
                  projectTitle={project.project_title}
                  jobType={project.job_type}
                  projectDescription={project.project_description}
                />
              ))
            )}
          </div>
        </div>
        {/* End Jobs */}

        {/* Pagination */}
        {/* <div className="flex items-center justify-center mt-2">
          <div className="flex items-center">
            <button className="pagination-button" data-slide-index="-1">
              <span className="sr-only">Previous</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div className="flex space-x-1">
              <button className="pagination-button" data-slide-index="0" aria-current="page">
                1
              </button>
              <button className="pagination-button" data-slide-index="1">
                2
              </button>
              <button className="pagination-button" data-slide-index="2">
                3
              </button>
            </div>

            <button className="pagination-button" data-slide-index="1">
              <span className="sr-only">Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div> */}
        {/* End Pagination */}
      </div>
    </section>
  );
}
