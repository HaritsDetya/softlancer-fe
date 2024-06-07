// pages/index.js
import React from "react";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ActiveUserContent from "@/components/admin/ActiveUserContent";

export default function Main() {
  const clientId = "532428073853-42sjai5bl9o19r8r31tksi0n86v25vos.apps.googleusercontent.com";

  return (
    <div className="font-poppins">
      <GoogleOAuthProvider clientId={clientId}>
        <ActiveUserContent/>
      </GoogleOAuthProvider>
    </div>
  );
}
