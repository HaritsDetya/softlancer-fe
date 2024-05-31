import Link from "next/link";

const JobCard = ({
  id,
  companyLogo,
  projectTitle,
  projectDescription,
  jobType,
}) => {
  // Limit projectDescription to 150 characters
  if (projectDescription.length > 150) {
    projectDescription = projectDescription.slice(0, 150) + "...";
  }

  return (
    <div class="bg-background rounded-lg py-3 px-4 mb-3 mr-auto max-w-sm relative">
      <div class="flex items-center">
        <img src="/images/grab.svg" alt="grab" class="h-10 w-10" />
        <p class="text-black font-bold text-sm ml-3">{projectTitle}</p>
      </div>
      <div class="grid grid-cols-2 my-4">
        <p class="bg-primary text-center flex-1 rounded-md py-1 text-sm font-bold text-white">
          {jobType}
        </p>
      </div>
      <p class="text-xs mb-5">{projectDescription}</p>
      <Link href="/" class="absolute bottom-3 right-4 h-4 w-4">
        <img src="/images/external-link.svg" alt="eksternal-link" />
      </Link>
    </div>
  );
};

export default JobCard;
