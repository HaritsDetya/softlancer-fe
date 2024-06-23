import React, { useEffect, useState } from "react";
import Header from "@/components/user/Header";
import { GoogleOAuthProvider } from "@react-oauth/google";
import EditProfile from "@/components/user/profil/EditProfile";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import axios from "axios";
import PreferencesProfile from "@/components/user/profil/PreferencesProfile";

export default function Profile() {
  const clientId = "532428073853-42sjai5bl9o19r8r31tksi0n86v25vos.apps.googleusercontent.com";
  const [user, setUser] = useState({});
  const [refferences, setRefferences] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/");
      return;
    }
    const parsedUser = JSON.parse(user);
    if (parsedUser.phone_number === null) {
      toast.info("Please fill your phone number first");
    }
    fetchUserRefferences();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
      return;
    }

    const data = localStorage.getItem("user");
    if (data) {
      try {
        const parsedUser = JSON.parse(data);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, [router]);

  const updatePhoneNumber = async (phoneNumber) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.info("Please login first");
        return;
      }

      const data = {
        phone_number: phoneNumber,
      };

      const res = await axios.patch(`${process.env.API_URL}/update-user`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        toast.error("Failed to update phone number");
        return;
      }

      const user = localStorage.getItem("user");
      if (user && phoneNumber) {
        const updatedUser = JSON.parse(user);
        updatedUser.phone_number = phoneNumber;
        localStorage.setItem("user", JSON.stringify(updatedUser));
      }

      return toast.success("Phone number updated successfully");
    } catch {
      return toast.error("Failed to update phone number");
    }
  };

  //Logic For fetching user refferences
  const fetchUserRefferences = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${process.env.API_URL}/profile-refferences`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRefferences(res.data.data);
    } catch (error) {
      toast.error("Failed to fetch user refferences");
    }
  };

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <Header />
        <div className="grid grid-cols-2 gap-x-2 gap-y-2 px-20 py-11 bg-background max-md:px-5">
          <EditProfile user={user} updatePhoneNumber={updatePhoneNumber} />
          <PreferencesProfile refferences={refferences} />
        </div>
      </GoogleOAuthProvider>
    </>
  );
}
