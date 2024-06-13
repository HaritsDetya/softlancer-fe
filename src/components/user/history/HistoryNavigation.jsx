import Link from "next/link";

const button = [
  { name: "Waiting", href: "/history/waiting" },
  { name: "Approve", href: "/history/approve" },
  { name: "Decline", href: "/history/decline" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const HistoryNavigation = ({ current }) => {
  return (
    <div className="flex items-center">
      <div className="flex mx-8 gap-3">
        {button.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={classNames(
              current === item.name
                ? "bg-primary text-white"
                : "bg-white text-black text-opacity-60 hover:text-white hover:bg-primary",
              "group flex gap-x-3 rounded-xl px-8 py-2.5 text-sm leading-6 font-semibold",
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HistoryNavigation;
