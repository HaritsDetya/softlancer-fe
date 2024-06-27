// pages/index.js
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import PostProject from "@/components/admin/projects-management/PostProject";
import Sidebar from "@/components/admin/Sidebar";
import { useRouter } from "next/router";
export default function Post_Project() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const path = router.asPath;
  const currentPath = path.split("/")[3];
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

  const PostData = async (name, desc, role, job, period, quali, skills) => {
    try {
      const data = {
        project_name: name,
        project_desc: desc,
        projects_role: role,
        job_type: job,
        registration_period: period,
        qualifications: quali,
        skills: skills,
      };

      const token = localStorage.getItem("token");
      // If user is not login yet
      if (!token) {
        toast.error("Please login first");
        return;
      }

      const res = await axios.post(`${process.env.API_URL}/applications`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Success Applying Project");
      await delay(2000);
      router.push("/");
    } catch (error) {
      toast.error("Something went wrong," + error);
      return error;
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className="font-poppins">
      <GoogleOAuthProvider clientId={clientId}>
        <Sidebar active={currentPath} />
        <PostProject postData={data.project_role} applyForm={PostData} isLoading={isLoading} />
      </GoogleOAuthProvider>
    </div>
  );
}
