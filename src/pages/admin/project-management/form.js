// pages/index.js
import React, { useState } from "react";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Form from "@/components/admin/projects-management/Form";
import { useRouter } from "next/router";
export default function form() {
  // const clientId = process.env.GOOGLE_CLIENT_ID;
  // const [data, setData] = useState({});
  // const [isLoading, setIsLoading] = useState(true);
  // const router = useRouter();
  // const { id } = router.query;
  // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // const FetchData = async () => {
  //   try {
  //     const res = await axios.get(`${process.env.API_URL}/projects/${id}`);
  //     if (!res.data.data) {
  //       router.push("/");
  //     }
  //     setIsLoading(false);
  //     setData(res.data.data);
  //     setProjectRole(data.project_role);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  // const ApplyData = async (role, cvUrl, portofolioUrl) => {
  //   try {
  //     const data = {
  //       project_role_id: role,
  //       cv_file: cvUrl,
  //       portofolio: portofolioUrl,
  //     };

  //     const token = localStorage.getItem("token");
  //     // If user is not login yet
  //     if (!token) {
  //       toast.error("Please login first");
  //       return;
  //     }

  //     const res = await axios.post(`${process.env.API_URL}/applications`, data, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     toast.success("Success Applying Project");
  //     await delay(2000);
  //     router.push("/");
  //   } catch (error) {
  //     toast.error("Something went wrong," + error);
  //     return error;
  //   }
  // };

  // useEffect(() => {
  //   if (id) {
  //     FetchData();
  //   }
  // }, [id]);

  return (
    <div className="font-poppins">
      <GoogleOAuthProvider clientId={clientId}>
        <Form />
      </GoogleOAuthProvider>
    </div>
  );
}
