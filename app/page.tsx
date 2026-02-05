"use client";
import { useState } from "react";
import { Navbar, Footer, Services, Transactions, Welcome,Loader } from "./components";

export default function Home() {
  const [state, setState] = useState({col:false,
    num:0
  })
  return (
    <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome /> 
        </div>
        <Services />
        <Transactions />
        <Footer />
    </div>
  );
}
