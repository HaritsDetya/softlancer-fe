import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import GoogleButton from "./GoogleButton";

export default function Header({ active }) {
  const router = useRouter();

  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      <nav className="bg-accent1 sticky top-0 z-[20]">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="px-4">
              <img
                src="/images/logoSoftLancer.svg"
                alt="logo"
                className="h-10 my-4 pl-2"
              />
            </Link>
            {/* Nav Link */}
            <div className="hidden lg:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link
                  href="/"
                  className={`${
                    active === "home"
                      ? "bg-white text-black"
                      : "text-white hover:bg-white hover:text-black"
                  } rounded-lg py-2 px-6 transition duration-150 ease-in-out`}
                >
                  Home
                </Link>
                <Link
                  href="/find-job"
                  className={`${
                    active === "find-job"
                      ? "bg-white text-black"
                      : "text-white hover:bg-white hover:text-black"
                  } rounded-lg py-2 px-6 transition duration-150 ease-in-out`}
                >
                  Find Job
                </Link>
                {/* <Link
                  href="/apply-job"
                  className={`${
                    active === "apply-job"
                      ? "bg-white text-black"
                      : "text-white hover:bg-white hover:text-black"
                  } rounded-lg py-2 px-6 transition duration-150 ease-in-out`}
                >
                  Apply Job
                </Link> */}
                <Link
                  href="/history"
                  className={`${
                    active === "history"
                      ? "bg-white text-black"
                      : "text-white hover:bg-white hover:text-black"
                  } rounded-lg py-2 px-6 transition duration-150 ease-in-out`}
                >
                  History
                </Link>
                <GoogleButton />
              </div>
            </div>
            {/* Responsive Toggle */}
            <div className="lg:hidden flex items-center">
              <button
                className="inline-flex w-auto items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <Image
                    priority={false}
                    width={24}
                    height={24}
                    src="/close-menu.svg"
                    alt="menu"
                  />
                ) : (
                  <Image
                    priority={false}
                    width={24}
                    height={24}
                    src="/menu.svg"
                    alt="menu"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Responsive Menu */}
        <div
          className={`lg:hidden absolute top-16 w-full z-30 bg-accent1 transition-max-height duration-1000 ease-in-out overflow-hidden ${
            isClick ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className={`${
                active === "home"
                  ? "bg-white text-black"
                  : "text-white hover:bg-white hover:text-black"
              } block text-center rounded-lg p-2 transition duration-150 ease-in-out`}
            >
              Home
            </Link>
            <Link
              href="/find-job"
              className={`${
                active === "find-job"
                  ? "bg-white text-black"
                  : "text-white hover:bg-white hover:text-black"
              } block text-center rounded-lg p-2 transition duration-150 ease-in-out`}
            >
              Find Job
            </Link>
            {/* <Link
              href="/apply-job"
              className={`${
                active === "appply-job"
                  ? "bg-white text-black"
                  : "text-white hover:bg-white hover:text-black"
              } block text-center rounded-lg p-2 transition duration-150 ease-in-out`}
            >
              Apply Job
            </Link> */}
            <Link
              href="/history"
              className={`${
                active === "history"
                  ? "bg-white text-black"
                  : "text-white hover:bg-white hover:text-black"
              } block text-center rounded-lg p-2 transition duration-150 ease-in-out`}
            >
              History
            </Link>
            <GoogleButton />
          </div>
        </div>
      </nav>
    </>
  );
}
