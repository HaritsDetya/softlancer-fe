import Header from "@/components/user/Header";
import React, { useEffect } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ApplySection from "@/components/user/ApplySection";
import { useRouter } from "next/router";
import axios from "axios";
import Sidebar from "@/components/user/apply-job/Sidebar";
import ApplyJobContainer from "@/components/user/apply-job/ApplyJobContainer";
import Description from "@/components/user/apply-job/Description";

export default function ApplyJobDescription() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const [data, setData] = React.useState({});
  const router = useRouter();
  const { id } = router.query;

  const FetchData = async () => {
    try {
      const res = await axios.get(`${process.env.API_URL}/projects/${id}`);
      if (!res.data.data) {
        router.push("/404");
      } else {
        setData(res.data.data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (id) {
      FetchData();
    }
  }, [id]);

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Header />
      <ApplyJobContainer>
        <Sidebar id={id} />
        <Description project={data} company={data.company} />
      </ApplyJobContainer>
    </GoogleOAuthProvider>
  );
}
