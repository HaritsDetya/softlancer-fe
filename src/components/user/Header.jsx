import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGoogleLogin } from "@react-oauth/google";

export default function Header() {
  const router = useRouter();
  const active = router.asPath;

  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const onSuccessLogin = (response) => {
    const tokenId = response.credential; // Ini adalah ID token yang perlu Anda verifikasi

    // Simpan token dalam variabel
    const tokenData = { token: tokenId };

    // Kirim token sebagai bagian dari objek JSON dalam permintaan fetch
    fetch(`http://127.0.0.1:8000/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tokenData), // Kirim token dalam bentuk JSON
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Tangani respons dari backend
        // Simpan token ke localStorage atau konteks
        localStorage.setItem("token", data.token);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const onFailureLogin = (response) => {
    console.log("Login gagal: res:", response);
  };

  const login = useGoogleLogin({
    onSuccess: onSuccessLogin,
    onError: onFailureLogin,
  });

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
                    active === "/"
                      ? "bg-white text-black"
                      : "text-white hover:bg-white hover:text-black"
                  } rounded-lg py-2 px-6 transition duration-150 ease-in-out`}
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  className={`${
                    active === "projects"
                      ? "bg-white text-black"
                      : "text-white hover:bg-white hover:text-black"
                  } rounded-lg py-2 px-6 transition duration-150 ease-in-out`}
                >
                  Find Job
                </Link>
                <Link
                  href="/apply-job"
                  className={`${
                    active === "/apply-job"
                      ? "bg-white text-black"
                      : "text-white hover:bg-white hover:text-black"
                  } rounded-lg py-2 px-6 transition duration-150 ease-in-out`}
                >
                  Apply Job
                </Link>
                <Link
                  href="/history"
                  className={`${
                    active === "/history"
                      ? "bg-white text-black"
                      : "text-white hover:bg-white hover:text-black"
                  } rounded-lg py-2 px-6 transition duration-150 ease-in-out`}
                >
                  History
                </Link>
                {/* Login Button */}
                <button
                  onClick={login}
                  class="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100"
                >
                  <Image
                    width={24}
                    height={24}
                    class="mr-2"
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    alt="Google Logo"
                  />
                  <span class="text-gray-700 font-medium">
                    Login with Google
                  </span>
                </button>
                {/* End Login Button */}
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
                active === "/"
                  ? "bg-white text-black"
                  : "text-white hover:bg-white hover:text-black"
              } block text-center rounded-lg p-2 transition duration-150 ease-in-out`}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={`${
                active === "projects"
                  ? "bg-white text-black"
                  : "text-white hover:bg-white hover:text-black"
              } block text-center rounded-lg p-2 transition duration-150 ease-in-out`}
            >
              Find Job
            </Link>
            <Link
              href="/apply-job"
              className={`${
                active === "/appply-job"
                  ? "bg-white text-black"
                  : "text-white hover:bg-white hover:text-black"
              } block text-center rounded-lg p-2 transition duration-150 ease-in-out`}
            >
              Apply Job
            </Link>
            <Link
              href="/history"
              className={`${
                active === "/history"
                  ? "bg-white text-black"
                  : "text-white hover:bg-white hover:text-black"
              } block text-center rounded-lg p-2 transition duration-150 ease-in-out`}
            >
              History
            </Link>
            <div className="flex justify-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100">
              <button onClick={login} class="flex items-center ">
                <Image
                  width={24}
                  height={24}
                  class="mr-2"
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt="Google Logo"
                />
                <span class="text-gray-700 font-medium">Login with Google</span>
              </button>
            </div>
            {/* <GoogleLogin onSuccess={onSuccessLogin} onError={onFailureLogin} /> */}
          </div>
        </div>
      </nav>
    </>
  );
}
