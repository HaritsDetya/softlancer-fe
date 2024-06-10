import FindJob from "@/components/user/JobContainer";
import Footer from "@/components/user/Footer";
import Header from "@/components/user/Header";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Projects() {
  const clientId = "532428073853-42sjai5bl9o19r8r31tksi0n86v25vos.apps.googleusercontent.com";

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <Header active={"find-job"} />
      </GoogleOAuthProvider>
    </>
  );
}
