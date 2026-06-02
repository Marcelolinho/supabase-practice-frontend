"use client";

import { useState } from "react";
import TextField from "./TextField";

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleForgotPassword = () => {
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%] max-w-[420px] rounded-3xl border border-white/40 bg-pink-100/40 p-8 shadow-xl backdrop-blur-md"
    >
      <div className="flex flex-col gap-4">
        <TextField
          id="email"
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          id="password"
          label="Password"
          type="password"
          placeholder="••••••••"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex items-center justify-between">
          <label
            htmlFor="remember"
            className="flex items-center gap-2 text-sm text-neutral-700"
          >
            <input
              id="remember"
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 rounded border-neutral-300 text-violet-600 outline-none focus-visible:ring-2 focus-visible:ring-violet-300/60"
            />
            Remember me
          </label>
        </div>

        <button
          type="submit"
          className="h-11 w-full rounded-xl bg-black text-sm font-semibold text-white outline-none transition hover:bg-neutral-800 focus-visible:ring-2 focus-visible:ring-violet-300/60"
        >
          Create an Account
        </button>
      </div>
    </form>
  );
}
