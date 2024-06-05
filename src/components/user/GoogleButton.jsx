import { GoogleLogin } from "@react-oauth/google";
import Image from "next/image";
import { useState, useEffect } from "react";
import AccountProfile from "./AccountProfile";

export default function GoogleButton() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});

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

      //Add to local storage
      localStorage.setItem("user", JSON.stringify(data.data));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //UseEffect for Profile
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  //When Login, get User profile
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
      fetchUserProfile(token);
    }
  }, [isLogin]);

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
        <div className="flex justify-between items-center px-4 py-2 lg:px-0 lg:py-0">
          <GoogleLogin onSuccess={onSuccessLogin} onError={onFailureLogin} />
        </div>
      ) : (
        <AccountProfile user={user} />
      )}
    </div>
  );
}
