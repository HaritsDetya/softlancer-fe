// pages/index.js
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import HandleDetail from "@/components/admin/handle/HandleDetail";
import axios from "axios";
import Sidebar from "@/components/admin/Sidebar";
import { useRouter } from "next/router";
export default function Detail() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const [handle, setHandle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useRouter().query;

  const fetchHandle = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(process.env.API_URL + `/applications`, {
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
        <Sidebar />
        <HandleDetail handle={handle} isLoading={isLoading} />
      </GoogleOAuthProvider>
    </div>
  );
}
