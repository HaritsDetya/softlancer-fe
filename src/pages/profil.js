import Footer from "@/components/user/Footer";
import Header from "@/components/user/Header";
import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ProfilUser from "@/components/user/profil/ProfilUser";

export default function applyJob() {
  const clientId = "532428073853-42sjai5bl9o19r8r31tksi0n86v25vos.apps.googleusercontent.com";

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <Header />
        <ProfilUser/>
        <Footer />
      </GoogleOAuthProvider>
    </>
  )
}