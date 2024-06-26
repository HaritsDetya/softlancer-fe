// pages/index.js
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import HandleAplication from "@/components/admin/handle/HandleAplication";
import axios from "axios";
import Sidebar from "@/components/admin/Sidebar";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
export default function Aplication() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const [handle, setHandle, setHandleId] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

  const approveApplication = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        process.env.API_URL + `/applications/handle/${id}?status=approve`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      toast.success("Successfully Approve the Application");
      delay(2000);
      router.reload();
    } catch (errror) {
      toast.error("Internal Server Error");
    }
  };

  const declineApplication = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        process.env.API_URL + `/applications/handle/${id}?status=decline`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      toast.success("Successfully Decline the Application");
      delay(2000);
      router.reload();
    } catch (errror) {
      toast.error("Internal Server Error");
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
  }, []);

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <ToastContainer />
      <Sidebar />
      <HandleAplication
        approveApplication={approveApplication}
        declineApplication={declineApplication}
        handle={handle}
        isLoading={isLoading}
      />
    </GoogleOAuthProvider>
  );
}
