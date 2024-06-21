// pages/index.js
import React, { useEffect } from "react";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import PostProject from "@/components/admin/projects-management/PostProject";
import Sidebar from "@/components/admin/Sidebar";
import { useRouter } from "next/router";
export default function Post_Project() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  // const [data, setData] = React.useState({});
  // const router = useRouter();
  // const { id } = router.query;

  // const FetchData = async () => {
  //   try {
  //     const res = await axios.get(`${process.env.API_URL}/projects/${id}`);
  //     if (!res.data.data) {
  //       router.push("/404");
  //     } else {
  //       setData(res.data.data);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
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
        <Sidebar/>
        <PostProject/>
      </GoogleOAuthProvider>
    </div>
  );
}
