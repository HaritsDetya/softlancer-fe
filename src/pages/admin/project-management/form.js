// pages/index.js
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Form from "@/components/admin/projects-management/Form";
import { useRouter } from "next/router";
export default function form() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  return (
    <div className="font-poppins">
      <GoogleOAuthProvider clientId={clientId}>
        <Form/>
      </GoogleOAuthProvider>
    </div>
  );
}
