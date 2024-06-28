import FindJob from "@/components/user/JobContainer";
import Footer from "@/components/user/Footer";
import Header from "@/components/user/Header";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useEffect, useState } from "react";

export default function Projects() {
  const clientId = "532428073853-42sjai5bl9o19r8r31tksi0n86v25vos.apps.googleusercontent.com";
  const [project, setProject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const FetchProjects = async () => {
    try {
      const res = await axios.get(process.env.API_URL + "/projects");
      const response = res.data;
      setProject(response.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // if (user) {
  //   const userData = JSON.parse(user);
  //   if (userData.phone_number === null) {
  //     router.push("/profile");
  //   }
  // }

  useEffect(() => {
    FetchProjects();
  }, []);

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <Header active={"find-job"} />
        <FindJob projects={project} isLoading={isLoading} />
      </GoogleOAuthProvider>
    </>
  );
}
