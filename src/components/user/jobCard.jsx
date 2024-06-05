import Image from "next/image";
import Link from "next/link";

const JobCard = ({ id, companyLogo, projectTitle, projectDescription, jobType }) => {
  // Limit projectDescription to 150 characters
  if (projectDescription.length > 150) {
    projectDescription = projectDescription.slice(0, 150) + "...";
  }

  return (
    <>
      <Link href={"/"} className="bg-background rounded-lg py-3 px-4 mb-3 mr-auto w-full relative">
        <div className="flex items-center">
          <Image
            width={40}
            height={40}
            src={companyLogo}
            alt={projectTitle}
            className="h-10 w-10"
          />
          <p className="text-black font-bold text-sm ml-3">{projectTitle}</p>
        </div>
        <div className="grid grid-cols-2 my-4">
          <p className="bg-primary text-center flex-1 rounded-md py-1 text-sm font-bold text-white">
            {jobType}
          </p>
        </div>
        <p className="text-xs mb-5">{projectDescription}</p>
        <div className="absolute bottom-3 right-4 h-4 w-4">
          <img src="/images/external-link.svg" alt="eksternal-link" />
        </div>
      </Link>
    </>
  );
};

export default JobCard;
