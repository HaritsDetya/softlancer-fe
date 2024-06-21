// pages/index.js
import React, { useEffect, useState } from "react";
import Header from "@/components/user/Header";
import FindJob from "@/components/user/JobContainer";
import Footer from "@/components/user/Footer";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Partnership from "@/components/user/Partnership";
import Hero from "@/components/user/Hero";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function Home() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [project, setProject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const FetchProjects = async () => {
    try {
      const res = await axios.get(process.env.API_URL + "/projects");
      const response = res.data;
      setProject(response.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (user) {
    const userData = JSON.parse(user);
    if (userData.phone_number === null) {
      router.push("/profile");
    }
  }

  useEffect(() => {
    FetchProjects();
    setUser(localStorage.getItem("user"));
  }, []);

  return (
    <div className="font-poppins">
      <GoogleOAuthProvider clientId={clientId}>
        <Header active={"home"} />
        <Hero />
        <Partnership />
        <FindJob projects={project} isLoading={isLoading} />
        <Footer />
      </GoogleOAuthProvider>
    </div>
  );
}
