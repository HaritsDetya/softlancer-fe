// pages/index.js
import React, { useEffect, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import UpdateCompanyForm from "@/components/admin/company/UpdateCompany";
import { useRouter } from "next/router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function UpdateCompany() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const router = useRouter();
  const { id } = router.query;
  const [isLoading, setIsLoading] = useState(true);
  const [company, setCompany] = useState({});

  const FetchData = async (token) => {
    try {
      const res = await axios.get(`${process.env.API_URL}/company/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // if (!res.data.success) {
      //   router.push("/404");
      // }
      setCompany(res.data.data);
      setIsLoading(false);
    } catch (error) {
      toast.error("Something went wrong" + error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (!token || user.is_admin === 0) {
      router.push("/");
    }
    if (!id) {
      router.push("/admin/company-management/all-company");
    }
    FetchData(token);
  }, []);

  return (
    <div className="font-poppins">
      <GoogleOAuthProvider clientId={clientId}>
        <UpdateCompanyForm id={id} isLoading={isLoading} data={company} />
      </GoogleOAuthProvider>
    </div>
  );
}
