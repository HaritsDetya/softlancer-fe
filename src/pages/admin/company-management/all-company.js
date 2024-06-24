// pages/index.js
import React, { useEffect, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import CompanyManagement from "@/components/admin/company/CompanyManagement";
import { toast } from "react-toastify";
import axios from "axios";

export default function AllProjects() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    FetchCompanies();
  }, []);

  return (
    <div className="font-poppins">
      <GoogleOAuthProvider clientId={clientId}>
        <CompanyManagement companies={companies} isLoading={isLoading} />
      </GoogleOAuthProvider>
    </div>
  );
}
