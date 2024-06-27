import { CalendarIcon } from "@heroicons/react/24/outline";
import GoogleButton from "../user/GoogleButton";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function AdminNav({ admin }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);
  return (
    <>
      <div className="py-10 px-6 bg-white flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
        <div className="flex gap-3 items-center text-lg text-primary ">
          <CalendarIcon className="w-auto h-8" aria-hidden="true" />
          <span className="font-semibold text-black">March 16, 2024</span>
        </div>
        <div className="absolute group flex-shrink-0 right-5">
          <div className="flex items-center">
            <Image
              className="inline-block h-9 w-9 rounded-full"
              src={user.avatar !== "" ? user.avatar : "/icon/user_icon.png"}
              alt="User Avatar"
              width={30}
              height={30}
            />
            <div className="flex flex-col ml-3">
              <span className="font-semibold text-md">{user.name}</span>
              <span className="font-normal text-xs">{user.email}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
