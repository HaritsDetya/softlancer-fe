// pages/index.js
import React, { useEffect, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import CompanyManagement from "@/components/admin/company/CompanyManagement";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";

export default function AllProjects() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const FetchCompanies = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${process.env.API_URL}/company`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCompanies(res.data.data);
    } catch (error) {
      toast.error("Something went wrong," + error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (closeDialog, selectedCompany) => {
    try {
      // Perform the delete action here
      const token = localStorage.getItem("token");
      const res = await axios.delete(`${process.env.API_URL}/company/${selectedCompany.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      router.reload();
    } catch (error) {
      toast.error("An error occurred while deleting the company.");
    }
  };

  useEffect(() => {
    FetchCompanies();
  }, []);

  return (
    <div className="font-poppins">
      <GoogleOAuthProvider clientId={clientId}>
        <CompanyManagement
          handleDelete={handleDelete}
          companies={companies}
          isLoading={isLoading}
        />
      </GoogleOAuthProvider>
    </div>
  );
}
