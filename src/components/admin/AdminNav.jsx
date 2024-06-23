import { CalendarIcon } from "@heroicons/react/24/outline";
import GoogleButton from "../user/GoogleButton";

export default function AdminNav({ admin }) {
  return (
    <>
      <div className="py-10 px-6 bg-white flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
        <div className="flex gap-3 items-center text-lg text-primary ">
          <CalendarIcon className="w-auto h-8" aria-hidden="true" />
          <span className="font-semibold">March 16, 2024</span>
        </div>
        <div className="absolute flex right-5">
          <div className="pl-2">
            <div className="">
              <span className="font-semibold text-lg">Annisa Salma Rafida</span>
            </div>
            <span className="flex text-sm">anisahslmrrr@gmail.com</span>
          </div>
        </div>
      </div>
    </>
  );
}
