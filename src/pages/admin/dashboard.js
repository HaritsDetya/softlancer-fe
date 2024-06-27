// pages/index.js
import React, { useState, useEffect } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Content from "@/components/admin/Content";
import { useRouter } from "next/router";
import axios from "axios";

export default function Main() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const fetchDataUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(process.env.API_URL + "/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(res.data.users);
    } catch (error) {
      console.error("Error fetching data users:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchDataProjects = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(process.env.API_URL + "/projects", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProjects(res.data.data);
    } catch (error) {
      console.error("Error fetching data projects:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (!token || user.is_admin === 0) {
      return router.push("/");
    }
    fetchDataUsers();
    fetchDataProjects();
  }, []);

  return (
    <div className="font-poppins">
      <GoogleOAuthProvider clientId={clientId}>
        <Content users={users} projects={projects} isLoading={isLoading} />
      </GoogleOAuthProvider>
    </div>
  );
}
