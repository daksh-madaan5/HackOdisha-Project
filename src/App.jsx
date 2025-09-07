import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Generator from "./components/Generator"
import Splinetool from "./components/Splinetool"
import Viewer from "./components/Viewer"
function App() {

  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [infoarray, setinfoarray] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  
  const handlechange = (e) => {
    setCredentials(credentials => ({ ...credentials, [e.target.name]: e.target.value }))
  }
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    if (credentials.email && credentials.password) {
      setIsLoggedIn(!isLoggedIn);
    } else {
      alert("Please enter email & password");
    }
  };

  if(!isLoggedIn){
  return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from-black via-indigo-950 to-blue-900">
        <div className="bg-black/70 p-8 rounded-2xl shadow-[0_0_25px_rgba(59,130,246,0.7)] w-96 text-center border border-blue-500/40">
          
          {/* 🔑 Animated Icon */}
          <lord-icon
            src="https://cdn.lordicon.com/xuoapdes.json"
            trigger="hover"
            colors="primary:#60a5fa,secondary:#3b82f6"
            style={{ width: "80px", height: "80px", margin: "0 auto 20px" }}
          ></lord-icon>

          <h2 className="text-3xl font-bold text-blue-300 mb-6 tracking-wide">
            PasseCure Login
          </h2>

          {/* Email */}
          <input
            type="email"
            name = "email"
            value = {credentials.email}
            placeholder="Email"
            onChange={handlechange}
            className="w-full p-3 mb-4 rounded-lg bg-blue-900/40 border border-blue-400 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Password + Toggle Icon */}
          <div className="flex items-center mb-4">
            <input
              type={showPassword ? "text" : "password"}
              name = "password"
              value = {credentials.password}
              placeholder="Password"
              onChange={handlechange}
              className="flex-1 p-3 rounded-lg bg-blue-900/40 border border-blue-400 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="ml-2 p-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition shadow-[0_0_10px_rgba(59,130,246,0.8)]"
            >
              <img
                src={showPassword ? "/eye.png" : "/eyecross.png"}
                style={{ width: "25px", height: "25px" }}
              ></img>
            </button>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition shadow-[0_0_20px_rgba(59,130,246,0.9)]"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden">

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