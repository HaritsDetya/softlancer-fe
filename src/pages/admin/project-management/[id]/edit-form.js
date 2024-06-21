// pages/index.js
import React from "react";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import EditForm from "@/components/admin/projects-management/EditForm";
export default function EditForm() {
  const clientId = process.env.GOOGLE_CLIENT_ID;

  return (
    <div className="font-poppins">
      <GoogleOAuthProvider clientId={clientId}>
        <EditForm/>
      </GoogleOAuthProvider>
    </div>
  );
}
