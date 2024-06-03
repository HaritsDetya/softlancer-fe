import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function GoogleButton() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    google_id: "",
    name: "",
    email: "",
    avatar: "",
    phone_number: "",
    is_admin: false,
  });

  const fetchUserProfile = async (token) => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        throw new Error("Failed to fetch profile");
      }
      const data = await res.json();
      setUser(data.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
      fetchUserProfile(token);
    }
  }, []);

  const onSuccessLogin = async (response) => {
    const tokenId = response.credential;

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: tokenId }),
      });

      if (!res.ok) {
        throw new Error("Internal Server Error");
      }

      const data = await res.json();
      localStorage.setItem("token", data.token);
      setIsLogin(true);
      fetchUserProfile(data.token);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const onFailureLogin = (response) => {
    console.error("Login Failed:", response);
  };

  return (
    <div>
      {!isLogin ? (
        <div className="flex justify-center px-4 py-2 lg:px-0 lg:py-0">
          <GoogleLogin onSuccess={onSuccessLogin} onError={onFailureLogin} />
        </div>
      ) : (
        <div className="flex justify-center px-4 py-2 lg:px-0 lg:py-0">
          <div className="bg-light rounded-2xl py-3 px-5">
            <Image
              className="rounded-full"
              src={user.avatar !== "" ? user.avatar : "/icon/user_icon.png"}
              alt="User Avatar"
              width={30}
              height={30}
            />
            {user.name !== "" ? user.name : "username"}
          </div>
        </div>
      )}
    </div>
  );
}
