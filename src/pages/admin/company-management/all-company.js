// pages/index.js
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import CompanyManagement from "@/components/admin/company/CompanyManagement";
import { useRouter } from "next/router";

export default function AllProjects() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCompanies = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(process.env.API_URL + "/company", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCompanies(res.data.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);
  const router = useRouter();

  return (
    <div className="font-poppins">
      <GoogleOAuthProvider clientId={clientId}>
        <CompanyManagement companies={companies} isLoading={isLoading}/>
        <CompanyManagement />
      </GoogleOAuthProvider>
    </div>
  );
}