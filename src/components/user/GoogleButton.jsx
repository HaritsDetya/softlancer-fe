import { GoogleLogin } from "@react-oauth/google";
import { useState, useEffect } from "react";
import AccountProfile from "./AccountProfile";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function GoogleButton() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});
  const router = useRouter();

  const handleLogoutClick = () => {
    try {
      // Perform logout logic here
      const res = axios.get(process.env.API_URL + "/logout", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (res) {
        toast.success("Logout Success");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        router.reload();
      }
    } catch (error) {
      toast.error("Internal Server Error");
    }
  };

  const fetchUserProfile = async (token) => {
    try {
      const res = await fetch(process.env.API_URL + `/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        toast.error("Failed to get user profile");
        return;
      }
      const data = await res.json();
      setUser(data.data);

      //Add to local storage
      localStorage.setItem("user", JSON.stringify(data.data));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //When Login, get User profile
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
      fetchUserProfile(token);
    }
  }, [isLogin]);

  //UseEffect for Profile
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const onSuccessLogin = async (response) => {
    const tokenId = response.credential;
    try {
      const res = await fetch(process.env.API_URL + `/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: tokenId }),
      });

      if (!res.ok) {
        toast.error("Internal Server Error");
      }

      const data = await res.json();
      localStorage.setItem("token", data.token);
      toast.success("Login Success");
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
        <AccountProfile user={user} handleLogout={handleLogoutClick} />
      )}
    </div>
  );
}
