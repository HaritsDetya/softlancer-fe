import Footer from "@/components/user/Footer";
import Header from "@/components/user/Header";
import ApplyJob from "@/components/user/ApplyJob";
import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function ApplyJob() {
  const clientId = "532428073853-42sjai5bl9o19r8r31tksi0n86v25vos.apps.googleusercontent.com";

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <Header />
        <ApplyJob />
        <Footer />
      </GoogleOAuthProvider>
    </>
  );
}
