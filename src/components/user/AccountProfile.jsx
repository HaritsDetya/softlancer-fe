import Image from "next/image";
import { useState } from "react";

const AccountProfile = ({ user }) => {
  return (
    <>
      <div className="flex justify-between items-center py-3 px-4 bg-light rounded-2xl">
        <div className="pe-3">
          <Image
            className="rounded-full"
            src={user.avatar !== "" ? user.avatar : "/icon/user_icon.png"}
            alt="User Avatar"
            width={30}
            height={30}
          />
        </div>
        <p>{user.name !== "" ? user.name : "username"}</p>
      </div>
    </>
  );
};

export default AccountProfile;
