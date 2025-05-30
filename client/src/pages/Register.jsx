import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    } else if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    try {
      const response = await fetch("/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      if (response.ok) {
        setRegisterSuccess(true);
        setTimeout(() => navigate("/login"), 1200);
      } else {
        const data = await response.json();
        setError(data.message || "Registration failed.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen h-screen overflow-hidden bg-[#fff6fa] flex flex-col items-center justify-center font-['Poppins'] text-[#a85e7c] relative">
      <button
        type="button"
        className="absolute top-6 left-6 text-[#a85e7c] border border-[#a85e7c] rounded px-3 py-1 text-sm hover:bg-[#ffb6d5] hover:text-white transition"
        onClick={() => window.location.href = '/'}
      >
        &larr; Back to Home
      </button>
      <div className="mb-6 flex flex-col items-center mt-16">
        <h1 className="text-3xl font-bold mb-1 text-[#a85e7c]">Welcome to Betsubara</h1>
        <p className="text-[#a85e7c]/80 text-base text-center max-w-xs mb-2">Create a customer account to order your favorite dishes. Please fill in your details below to sign up.</p>
      </div>
      {registerSuccess && (
        <div className="mb-4 px-4 py-2 bg-green-100 border border-green-300 text-green-700 rounded text-center animate-fade-in">
          Registration successful! Redirecting to Login...
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 rounded-2xl shadow-2xl p-10 w-full max-w-md flex flex-col gap-6 border border-[#ffb6d5]"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-1 text-center text-[#a85e7c]">
          Register a new account
        </h2>
        <p className="text-center text-[#a85e7c]/70 text-base mb-4">
          Enter your email and password to create a customer account
        </p>
        {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
        <div className="flex flex-col gap-1">
          <label htmlFor="register-email" className="font-semibold text-[#a85e7c]">Email</label>
          <input
            id="register-email"
            type="email"
            placeholder="betsubara@gmail.com"
            className="border border-[#ffb6d5] bg-[#fff6fa] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffb6d5] text-[#a85e7c] placeholder-[#a85e7c]/50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
          />
        </div>
        <div className="flex flex-col gap-1 relative">
          <label htmlFor="register-password" className="font-semibold text-[#a85e7c]">Password</label>
          <input
            id="register-password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            className="border border-[#ffb6d5] bg-[#fff6fa] rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#ffb6d5] text-[#a85e7c] placeholder-[#a85e7c]/50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />
          <button
            type="button"
            className="absolute right-3 top-9 text-[#a85e7c] focus:outline-none"
            tabIndex={-1}
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 2.25 12c2.083 3.61 6.017 6 9.75 6 1.563 0 3.06-.322 4.396-.9M6.53 6.53A9.956 9.956 0 0 1 12 6c3.733 0 7.667 2.39 9.75 6a10.45 10.45 0 0 1-2.042 2.727M6.53 6.53l10.94 10.94M6.53 6.53l-2.55-2.55m13.02 13.02l2.55 2.55" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12C4.333 8.39 8.267 6 12 6c3.733 0 7.667 2.39 9.75 6-2.083 3.61-6.017 6-9.75 6-3.733 0-7.667-2.39-9.75-6z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              </svg>
            )}
          </button>
        </div>
        <div className="flex flex-col gap-1 relative">
          <label htmlFor="register-confirm-password" className="font-semibold text-[#a85e7c]">Confirm Password</label>
          <input
            id="register-confirm-password"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Re-enter your password"
            className="border border-[#ffb6d5] bg-[#fff6fa] rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#ffb6d5] text-[#a85e7c] placeholder-[#a85e7c]/50"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="new-password"
          />
          <button
            type="button"
            className="absolute right-3 top-9 text-[#a85e7c] focus:outline-none"
            tabIndex={-1}
            onClick={() => setShowConfirmPassword((v) => !v)}
            aria-label={showConfirmPassword ? "Hide password" : "Show password"}
          >
            {showConfirmPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 2.25 12c2.083 3.61 6.017 6 9.75 6 1.563 0 3.06-.322 4.396-.9M6.53 6.53A9.956 9.956 0 0 1 12 6c3.733 0 7.667 2.39 9.75 6a10.45 10.45 0 0 1-2.042 2.727M6.53 6.53l10.94 10.94M6.53 6.53l-2.55-2.55m13.02 13.02l2.55 2.55" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12C4.333 8.39 8.267 6 12 6c3.733 0 7.667 2.39 9.75 6-2.083 3.61-6.017 6-9.75 6-3.733 0-7.667-2.39-9.75-6z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              </svg>
            )}
          </button>
        </div>
        <button
          type="submit"
          className="bg-[#ffb6d5] text-white font-semibold rounded px-4 py-2 mt-2 hover:bg-[#a85e7c] hover:text-[#fff6fa] transition"
        >
          Register
        </button>
        <div className="text-center text-[#a85e7c]/70 text-sm mt-2">
          Already have an account?{' '}
          <span
            className="underline cursor-pointer hover:text-[#a85e7c]"
            onClick={() => navigate('/login')}
          >
            Login
          </span>
        </div>
      </form>
    </div>
  );
}
