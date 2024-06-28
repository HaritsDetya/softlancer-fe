// pages/index.js
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import HandleAplication from "@/components/admin/handle/HandleAplication";
import axios from "axios";
import Sidebar from "@/components/admin/Sidebar";
import { useRouter } from "next/router";
export default function Aplication() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const [handle, setHandle, setHandleId] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

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

  const fetchId = async () => {
    try {
      const token = localStorage.getItem("token");
      const resId = await axios.get(process.env.API_URL + `/applications/data/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setHandleId(resId.data.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = async (closeDialog, selectedCompany) => {
    try {
      // Perform the delete action here
      const token = localStorage.getItem("token");
      const res = await axios.delete(`${process.env.API_URL}/application/${selectedCompany.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Company deleted successfully.");
      router.reload();
    } catch (error) {
      toast.error("An error occurred while deleting the company.");
    }
  };

  useEffect(() => {
    fetchHandle();
    if (id) {
      fetchId();
    }
  }, [id]);

  return (
    <div className="font-poppins">
      <GoogleOAuthProvider clientId={clientId}>
        <Sidebar />
        <HandleAplication handle={handle} isLoading={isLoading} />
      </GoogleOAuthProvider>
    </div>
  );
}
