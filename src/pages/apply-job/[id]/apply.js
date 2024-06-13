import Header from "@/components/user/Header";
import React, { useEffect, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useRouter } from "next/router";
import axios from "axios";
import ApplyJobContainer from "@/components/user/apply-job/ApplyJobContainer";
import Sidebar from "@/components/user/apply-job/Sidebar";
import ApplyForm from "@/components/user/apply-job/ApplyForm";

export default function ApplyJob() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  const FetchData = async () => {
    try {
      const res = await axios.get(`${process.env.API_URL}/projects/${id}`);
      if (!res.data.data) {
        router.push("/");
      }
      setIsLoading(false);
      setData(res.data.data);
      setProjectRole(data.project_role);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const ApplyData = async (role, cvUrl, portofolioUrl) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/");
      }

      const data = {
        project_role_id: role,
        cv_file: cvUrl,
        portofolio: portofolioUrl,
      };

      const res = await axios.post(`${process.env.API_URL}/applications`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    if (id) {
      FetchData();
    }
  }, [id]);

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Header />
      <ApplyJobContainer>
        <Sidebar id={id} />
        <ApplyForm projectRole={data.project_role} applyForm={ApplyData} isLoading={isLoading} />
      </ApplyJobContainer>
    </GoogleOAuthProvider>
  );
}
