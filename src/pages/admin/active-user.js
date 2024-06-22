// pages/index.js
import React, { useEffect, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ActiveUserContent from "@/components/admin/ActiveUserContent";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

export default function Active_User() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const router = useRouter();
  const [admin, setAdmin] = useState(null);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(process.env.API_URL + "/users");
      setUsers(res.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    const storedAdmin = localStorage.getItem("admin");
    if (storedAdmin) {
      setAdmin(JSON.parse(storedAdmin));
    }
  }, []);

  useEffect(() => {
    if (admin && admin.phone_number === null) {
      router.push("/profile");
      toast.info("Please fill your phone number first");
    }
  }, [admin, router]);

  return (
    <div className="font-poppins">
      <GoogleOAuthProvider clientId={clientId}>
        <ActiveUserContent users={users} isLoading={isLoading} />
      </GoogleOAuthProvider>
    </div>
  );
}
