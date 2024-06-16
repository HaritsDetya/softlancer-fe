import "@/styles/globals.css";
import React from "react";
import "react-toastify/dist/ReactToastify.css";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;
