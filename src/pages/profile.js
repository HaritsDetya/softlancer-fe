import React from "react";
import Footer from "@/components/user/Footer";
import Header from "@/components/user/Header";
import { GoogleOAuthProvider } from "@react-oauth/google";
import EditProfile from "@/components/user/EditProfile";

export default function profile() {
  const clientId = "532428073853-42sjai5bl9o19r8r31tksi0n86v25vos.apps.googleusercontent.com";

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <Header active={"history"} />
        <EditProfile />
      </GoogleOAuthProvider>
    </>
  );
}
