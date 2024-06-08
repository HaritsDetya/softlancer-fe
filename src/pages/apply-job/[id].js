import Header from "@/components/user/Header";
import React, { useEffect } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ApplySection from "@/components/user/ApplySection";
import { useRouter } from "next/router";
import axios from "axios";

export default function ApplyJob() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const [data, setData] = React.useState({});
  const router = useRouter();

  const FetchData = async () => {
    try {
      const id = router.query.id;
      const res = await axios.get(process.env.API_URL + `/projects/${id}`);
      if (res.data.data === null) {
        router.push("/404");
      }
      const data = res.data;
      setData(data.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <Header />
        <ApplySection project={data} company={data.company} />
      </GoogleOAuthProvider>
    </>
  );
}
