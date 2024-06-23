// pages/index.js
import React, { useEffect, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ActiveUserContent from "@/components/admin/ActiveUserContent";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

export default function Active_User() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const [admin, setAdmin] = useState(null);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    // const storedAdmin = localStorage.getItem("admin");
    // if (storedAdmin) {
    //   try {
    //     const parsedAdmin = JSON.parse(storedAdmin);
    //     setAdmin(parsedAdmin);
    //   } catch (error) {
    //     console.error("Error parsing admin data from localStorage:", error);
    //   }
    // }
  }, []);

  return (
    <div className="font-poppins">
      <GoogleOAuthProvider clientId={clientId}>
        <ActiveUserContent users={users} isLoading={isLoading} />
      </GoogleOAuthProvider>
    </div>
  );
}
