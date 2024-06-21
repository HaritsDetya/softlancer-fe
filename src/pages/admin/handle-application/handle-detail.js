// pages/index.js
import React from "react";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import HandleDetail from "@/components/admin/HandleDetail";
export default function HandleDetail() {
  const clientId = process.env.GOOGLE_CLIENT_ID;

  return (
    <div className="font-poppins">
      <GoogleOAuthProvider clientId={clientId}>
        <HandleDetail/>
      </GoogleOAuthProvider>
    </div>
  );
}
