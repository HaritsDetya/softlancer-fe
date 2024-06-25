// pages/index.js
import React, { useEffect, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ProjectsManagement from "@/components/admin/projects-management/ProjectsManagement";
import Sidebar from "@/components/admin/Sidebar";
import axios from "axios";
import { useRouter } from "next/router";

export default function AllProjects() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const [data, setData] = React.useState({});
  const router = useRouter();
  const path = router.asPath;
  const currentPath = path.split("/")[3];

  const fetchProjects = async () => {
    try {
      const res = await axios.get(`${process.env.API_URL}/projects`);
      setData(res.data.data);
    } catch (error) {
      console.error("Error fetching data projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="font-poppins">
      <GoogleOAuthProvider clientId={clientId}>
        <Sidebar active={currentPath}/>
        <ProjectsManagement project={data} company={data.company} />
      </GoogleOAuthProvider>
    </div>
  );
}
