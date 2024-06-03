// pages/index.js
import React from "react";
import Header from "@/components/user/Header"
import FindJob from "@/components/user/FindJob"
import Footer from "@/components/user/Footer"
import { GoogleOAuthProvider } from "@react-oauth/google";
import Partnership from "@/components/user/Partnership";
import Hero from "@/components/user/Hero";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const clientId = "532428073853-42sjai5bl9o19r8r31tksi0n86v25vos.apps.googleusercontent.com";

  return (
    <div className="font-poppins">
      <GoogleOAuthProvider clientId={clientId}>
        <Header active={"home"} />
        <Hero />
        <Partnership />
        <FindJob />
        <Footer />
      </GoogleOAuthProvider>
    </div>
  );
}
