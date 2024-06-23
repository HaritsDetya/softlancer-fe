// pages/index.js
import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Content from "@/components/admin/Content";
import { useRouter } from "next/router";
import axios from 'axios';

export default function Main() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const router = useRouter();
  const [admin, setAdmin] = useState(null);
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const [usersRes, projectsRes] = await Promise.all([
        axios.get(`${process.env.API_URL}/users`),
        axios.get(`${process.env.URL}/projects`)
      ]);
      setUsers(usersRes.data);
      setProjects(projectsRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="font-poppins">
      <GoogleOAuthProvider clientId={clientId}>
        <Content users={users} projects={projects} isLoading={isLoading} />
      </GoogleOAuthProvider>
    </div>
  );
}
