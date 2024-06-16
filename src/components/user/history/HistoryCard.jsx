import Image from "next/image";

const HistoryCard = ({ history, key }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <li
        key={key}
        className="overflow-hidden w-full flex items-center justify-between gap-x-6 py-5 px-4 bg-light shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
      >
        <div className="flex gap-x-4 w-full">
          <Image
            height={"64"}
            width={"64"}
            className="flex-none rounded-md bg-gray-50"
            src={history.project.company.company_logo}
            alt={`Company Icon`}
          />
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {history.project.company.company_name}
            </p>
            <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-500">
              {history.project.project_description}
            </p>
            <div className="mt-3 gap-x-3 justify-end flex sm:ml-4 sm:mt-0">
              <span
                className={classNames(
                  "inline-flex items-center rounded-full bg-primary px-6 py-2 text-xs font-medium text-white",
                )}
              >
                {history.project.job_type}
              </span>
              <span
                className={classNames(
                  [history.status],
                  "inline-flex items-center rounded-full bg-primary px-6 py-2 text-xs font-medium text-white",
                )}
              >
                {history.status}
              </span>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default HistoryCard;
