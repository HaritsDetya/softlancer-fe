import EditProfil from "@/components/user/EditProfil";
import React, { Fragment, useState } from "react";
import Footer from "@/components/user/Footer";
import Header from "@/components/user/Header";
import History from "@/components/user/History";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function history() {
  const clientId = "532428073853-42sjai5bl9o19r8r31tksi0n86v25vos.apps.googleusercontent.com";

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <Header />
        <History/>
        <Footer />
      </GoogleOAuthProvider>
    </>
  )
}