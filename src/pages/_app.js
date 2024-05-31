import "@/styles/globals.css"
import Header from "@/components/user/Header.js"
import Hero from "@/components/user/Hero.js"
import Partnership from "@/components/user/Partnership.js"
import FindJob from "@/components/user/FindJob"
import ApplyJob from "@/components/user/ApplyJob"
import History from "@/components/user/History"
import Footer from "@/components/user/Footer.js"
import React from "react"
import Image from "next/image"

function App({ Component, pageProps }) {
  return (
    <div>
      <Header/>
      <Hero/>
      <Partnership/>
      <FindJob/>
      <ApplyJob/>
      <History/>
      {/* <Component {...pageProps} /> */}
      <Footer/>
    </div>
  )
}

export default App