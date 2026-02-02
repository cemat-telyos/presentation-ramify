"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/");
      router.refresh();
    } else {
      setError("Mot de passe incorrect");
      setLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage: "url(/bg-dark.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#1E1E1E]/95" />
      
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-serif text-white mb-2">Ramify</h1>
          <p className="text-white/50 font-sans">Social Media Performance Report</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-sans text-white/70 mb-2">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-ramify-gold500 focus:ring-1 focus:ring-ramify-gold500 transition-colors"
              placeholder="Entrez le mot de passe"
              required
              autoFocus
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm font-sans">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-ramify-gold500 hover:bg-ramify-gold500/90 text-ramify-grey900 font-sans font-medium rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Vérification..." : "Accéder à la présentation"}
          </button>
        </form>

        <p className="text-center text-white/30 text-xs font-sans mt-8">
          Document confidentiel — Usage interne
        </p>
      </div>
    </div>
  );
}
