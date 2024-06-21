// pages/index.js
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ProjectsManagement from "@/components/admin/projects-management/ProjectsManagement";
import { useRouter } from "next/router";
import Sidebar from "@/components/admin/Sidebar";
import axios from "axios";

export default function AllProjects() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const [data, setData] = React.useState({});
  const router = useRouter();
  const { id } = router.query;

  const FetchData = async () => {
    try {
      const res = await axios.get(`${process.env.API_URL}/projects/${id}`);
      if (!res.data.data) {
        router.push("/404");
      } else {
        setData(res.data.data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (id) {
      FetchData();
    }
  }, [id]);

  return (
    <div className="font-poppins">
      <GoogleOAuthProvider clientId={clientId}>
        <Sidebar id={id}/>
        <ProjectsManagement project={data} company={data.company}/>
      </GoogleOAuthProvider>
    </div>
  );
}