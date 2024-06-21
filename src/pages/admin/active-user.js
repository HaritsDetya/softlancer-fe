// pages/index.js
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ActiveUserContent from "@/components/admin/ActiveUserContent";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

export default function Active_User() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const router = useRouter();
  const [admin, setAdmin] = useState(null);
  const [users, setProject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const FetchUsers = async () => {
    try {
      const res = await axios.get(process.env.API_URL + "/role", "/login");
      const response = res.data;
      setProject(response.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // if (admin) {
  //   const userData = JSON.parse(admin);
  //   if (userData.phone_number === null) {
  //     router.push("/profile");
  //     toast.info("Please fill your phone number first");
  //   }
  // }

  useEffect(() => {
    FetchUsers();
    setAdmin(localStorage.getItem("admin"));
  }, []);

  return (
    <div className="font-poppins">
      <GoogleOAuthProvider clientId={clientId}>
        <ActiveUserContent users={users}/>
      </GoogleOAuthProvider>
    </div>
  );
}
