// pages/index.js
import React from "react";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AddCompany from "@/components/admin/AddCompany";
import { useRouter } from "next/router";

export default function AddCompanys() {
  const clientId = process.env.GOOGLE_CLIENT_ID;

  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="font-poppins">
      <GoogleOAuthProvider clientId={clientId}>
        <AddCompany/>
      </GoogleOAuthProvider>
    </div>
  );
}
