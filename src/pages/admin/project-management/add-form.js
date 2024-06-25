// pages/index.js
import React from "react";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AddForm from "@/components/admin/projects-management/AddForm";
import Sidebar from "@/components/admin/Sidebar";
import { useRouter } from "next/router";
export default function add_form() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const router = useRouter();
  const path = router.asPath;
  const currentPath = path.split("/")[3];

  return (
    <div className="font-poppins">
      <GoogleOAuthProvider clientId={clientId}>
        <Sidebar active={currentPath}/>
        <AddForm/>
      </GoogleOAuthProvider>
    </div>
  );
}
