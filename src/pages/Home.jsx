import React, { useState } from "react";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Both email and password are required.");
      return;
    }

    // 🔐 Simulate auth (replace with real backend call)
    console.log("Logging in:", { email, password });

    // Clear form + errors
    setError("");
    setEmail("");
    setPassword("");

    // Optional: Redirect to chat, set auth in Zustand, etc.
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <form
        onSubmit={handleLogin}
        className="w-[90%] sm:w-[40vw] bg-white p-8 rounded-2xl shadow-xl"
      >
        <h1 className="text-3xl font-semibold mb-6 text-center text-blue-600">
          Chat Buddy Login
        </h1>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-11 px-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-11 px-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm mb-4 transition-all">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Home;
