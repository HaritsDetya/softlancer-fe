// pages/index.js
import React from "react";
import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <h1 className="bg-backgtext-3xl font-bold underline">
      Hello world!
    </h1>
  );
}
