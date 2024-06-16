import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const AccountProfile = ({ user, handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center space-x-4 cursor-pointer bg-white rounded-full px-4 py-2"
        onClick={toggleDropdown}
      >
        <Image
          className="rounded-full"
          src={user.avatar !== "" ? user.avatar : "/icon/user_icon.png"}
          alt="User Avatar"
          width={30}
          height={30}
        />
        <div className="flex items-center space-x-2">
          <p className="block sm:hidden">{user.name !== "" ? user.name : "username"}</p>
          <div className="w-6 h-6 lg:flex items-center justify-center rounded-full hidden">
            <Image priority={false} width={24} height={24} src="/menu-black.svg" alt="menu" />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <Link
            href="/profile"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-[20px] font-bold"
          >
            Akun
          </Link>
          <div
            className="block hover:cursor-pointer px-4 py-2 text-sm bg-red-500 hover:bg-red-600 text-white text-[20px] rounded-b-md"
            onClick={handleLogout}
          >
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountProfile;
