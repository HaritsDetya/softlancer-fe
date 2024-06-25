// pages/index.js
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import HandleAplication from "@/components/admin/handle/HandleAplication";
import axios from "axios";
import Sidebar from "@/components/admin/Sidebar";
export default function Aplication() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const [handle, setHandle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchHandle = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(process.env.API_URL + "/applications", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setHandle(res.data.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHandle();
  }, []);

  return (
    <div className="font-poppins">
      <GoogleOAuthProvider clientId={clientId}>
        <Sidebar/>
        <HandleAplication handle={handle} isLoading={isLoading}/>
      </GoogleOAuthProvider>
    </div>
  );
}
