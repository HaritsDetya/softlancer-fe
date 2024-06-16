import React, { useEffect, useState } from "react";
import Header from "@/components/user/Header";
import { GoogleOAuthProvider } from "@react-oauth/google";
import EditProfile from "@/components/user/profil/EditProfile";

export default function profile() {
  const clientId = "532428073853-42sjai5bl9o19r8r31tksi0n86v25vos.apps.googleusercontent.com";
  const [user, setUser] = useState({});

  useEffect(() => {
    const data = localStorage.getItem("user");
    const user = JSON.parse(data);
    setUser(user);
  }, []);

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <Header />
        <EditProfile user={user} />
      </GoogleOAuthProvider>
    </>
  );
}
