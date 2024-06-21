// pages/index.js
import React from "react";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ActiveUserContent from "@/components/admin/ActiveUserContent";

export default function ActiveUserContent() {
  const clientId = process.env.GOOGLE_CLIENT_ID;

  return (
    <div className="font-poppins">
      <GoogleOAuthProvider clientId={clientId}>
        <ActiveUserContent/>
      </GoogleOAuthProvider>
    </div>
  );
}