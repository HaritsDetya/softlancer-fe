// pages/index.js
import React from "react";
import Header from "@/components/user/Header";
import FindJob from "@/components/user/FindJob";
import Footer from "@/components/user/Footer";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Partnership from "@/components/user/Partnership";
import Hero from "@/components/user/Hero";

export default function Home() {
  const clientId = process.env.GOOGLE_CLIENT_ID;

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
