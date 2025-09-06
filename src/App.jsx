import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Generator from "./components/Generator"
import Splinetool from "./components/Splinetool"
import Viewer from "./components/Viewer"
function App() {

  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [infoarray, setinfoarray] = useState([])

  return (
    <div className="relative min-h-screen w-full text-white bg-fixed [background:radial-gradient(120%_120%_at_50%_10%,#000000_40%,#1e40af_100%)] overflow-hidden">

      <div className="fixed top-0 right-0 h-screen w-[50%] z-0 pointer-events-none hidden md:block">
        <Splinetool />
      </div>

      <div className="relative z-10 sm:px-4 pt-2 space-y-6">
        <Navbar />
        <div className="flex flex-col lg:flex-row flex-wrap gap-5 mx-4 sm:mx-6 md:mx-10 px-2 sm:px-6 md:px-10">
          <Card form={form} setform={setform} infoarray={infoarray} setinfoarray={setinfoarray} />
          <Generator setform={setform} />
        </div>
        <Viewer infoarray={infoarray} setinfoarray={setinfoarray} />
      </div>
    </div>
  );

}

export default App