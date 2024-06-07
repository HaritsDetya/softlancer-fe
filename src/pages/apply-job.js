import Footer from "@/components/user/Footer";
import Header from "@/components/user/Header";
import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ApplySection from "@/components/user/ApplySection";

export default function ApplyJob() {
  const clientId = process.env.GOOGLE_CLIENT_ID;

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <Header />
        <ApplySection />
        <Footer />
      </GoogleOAuthProvider>
    </>
  );
}
