import { GoogleLogin } from "@react-oauth/google";

const { useState, useEffect } = require("react");

const GoogleButton = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    // Periksa apakah ada token dalam localStorage
    const token = localStorage.getItem("token");
    if (token) {
      // Jika ada, tandai pengguna sudah login
      setIsLogin(true);
    }
  }, []);

  const onSuccessLogin = (response) => {
    const tokenId = response.credential; // Ini adalah ID token yang perlu Anda verifikasi

    // Kirim token sebagai bagian dari objek JSON dalam permintaan fetch
    fetch(`http://127.0.0.1:8000/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: tokenId }), // Kirim token dalam bentuk objek JSON
    })
      .then((response) => {
        if (!response.ok) {
          console.log("Internal Server Error");
        }
        return response.json();
      })
      .then((data) => {
        // Simpan token ke localStorage atau konteks
        setIsLogin(true);
        localStorage.setItem("token", data.token);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const onFailureLogin = (response) => {
    console.log("Error: ", response);
  };

  return (
    <>
      <div>
        {/* Login Button */}
        {isLogin === false ? (
          <div className="flex justify-center px-4 py-2 lg:px-0 lg:py-0">
            <GoogleLogin onSuccess={onSuccessLogin} onError={onFailureLogin} />
          </div>
        ) : (
          <div className="flex justify-center px-4 py-2 lg:px-0 lg:py-0">
            <p>Sudah Login</p>
          </div>
        )}
        {/* End Login Button */}
      </div>
    </>
  );
};

export default GoogleButton;
