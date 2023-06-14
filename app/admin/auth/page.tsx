"use client";

import axios from "axios";
import { useState } from "react";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
console.log(apiUrl);

export default function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onLogin = async () => {
    console.log(username, password);
    try {
      const response = await axios.post(
        `${apiUrl}/admin/login`,
        {
          username,
          password,
        },
        config
      );
      if (response.status === 200) {
        window.location.href = "/";
      }
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[#FFFFFF] mx-auto min-h-screen">
        <h1 className="text-4xl font-bold mb-6">CMS Login</h1>
        <form className="flex flex-col w-1/4">
          <div className="flex flex-col mb-4">
            <label
              htmlFor="email"
              className="text-xl font-semibold mb-2  self-start"
            >
              Username
            </label>
            <input
              id="email"
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username or email"
              className="bg-[#f2f2f2] rounded-md p-2"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="password" className="text-xl font-semibold mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="bg-[#f2f2f2] rounded-md p-2"
            />
          </div>
          <button
            className="bg-black rounded-md p-2 text-white mt-4 w-1/2 mx-auto"
            onClick={onLogin}
            type="button"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
