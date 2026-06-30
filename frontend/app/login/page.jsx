"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async () => {
    setError("");
    try {
      const res = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login Failed");
        return;
      }

      localStorage.setItem("token", data.token);
      router.push("/admin");
    } catch (error) {
      setError("Could not connect to server");
    }
  };
  return (
    <div className="min-h-screen justify-center flex items-center flex-col bg-gray-50">
      <h1 className="text-3xl italic text-[#12252d] mb-6">Admin Login</h1>
      <div className="w-full max-w-md p-8 rounded-2xl shadow border-md ">
        <div className="flex flex-col mb-4 gap-3 text-[#12252d]">
          <label htmlFor="username ">Email</label>
          <input
            className="text-normal border rounded-2xl px-3 py-2"
            type="text"
            value={email}
            id="email"
            placeholder="admin@acceleratingdigital.ai"
            onChange={(e) => setEmail(e.target.value)}
          /> 
        </div>
        <div className="flex flex-col mb-4 gap-3 text-[#12252d]">
          <label htmlFor="username ">password</label>
          <input
            className="text-normal border rounded-2xl px-3 py-2"
            type="password"
            value={password}
            id="password"
            placeholder="***********"
            autoComplete="one-time-code"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
        <div className="flex justify-center w-full ">
          <Button
            onclick={handleSubmit}
            title="Log In"
            titleClass="flex items-center justify-center cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
