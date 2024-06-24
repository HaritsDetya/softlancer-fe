// pages/index.js
import React, { useEffect, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ActiveUserContent from "@/components/admin/ActiveUserContent";
import axios from "axios";
import { useRouter } from "next/router";

export default function Active_User() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (!token || user.is_admin === 0) {
      router.push("/");
    }
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(process.env.API_URL + "/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(res.data.users);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="font-poppins">
      <GoogleOAuthProvider clientId={clientId}>
        <ActiveUserContent users={users} isLoading={isLoading} />
      </GoogleOAuthProvider>
    </div>
  );
}
