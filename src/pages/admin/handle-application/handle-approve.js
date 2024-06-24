// pages/index.js
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import HandleApprove from "@/components/admin/handle/HandleApprove";
import axios from "axios";
export default function Approve() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const [handle, setHandle] = useState([]);
  const [role, setRole] = useState([]);
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

  const fetchRole = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(process.env.API_URL + "/role", {
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
    fetchRole();
  }, []);

  return (
    <div className="font-poppins">
      <GoogleOAuthProvider clientId={clientId}>
        <HandleApprove />
      </GoogleOAuthProvider>
    </div>
  );
}
