// pages/index.js
import React from "react";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import HandleAplication from "@/components/admin/HandleAplication";
export default function Main() {
  const clientId = process.env.GOOGLE_CLIENT_ID;

  return (
    <div className="font-poppins">
      <GoogleOAuthProvider clientId={clientId}>
        <HandleAplication/>
      </GoogleOAuthProvider>
    </div>
  );
}
