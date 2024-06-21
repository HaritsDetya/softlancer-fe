// pages/index.js
import React from "react";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import CompanyManagement from "@/components/admin/CompanyManagement";
import { useRouter } from "next/router";

export default function AllProjects() {
  const clientId = process.env.GOOGLE_CLIENT_ID;

  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="font-poppins">
      <GoogleOAuthProvider clientId={clientId}>
        <CompanyManagement/>
      </GoogleOAuthProvider>
    </div>
  );
}
