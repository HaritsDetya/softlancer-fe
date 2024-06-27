// pages/index.js
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Form from "@/components/admin/projects-management/Form";
import { useRouter } from "next/router";
import Sidebar from "@/components/admin/Sidebar";
export default function form() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const router = useRouter();
  const path = router.asPath;
  const currentPath = path.split("/")[3];
  
  return (
    <div className="font-poppins">
      <GoogleOAuthProvider clientId={clientId}>
        <Sidebar active={currentPath}/>
        <Form/>
      </GoogleOAuthProvider>
    </div>
  );
}
