"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/admin";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push(redirect);
    router.refresh();
  };

  return (
    <div className="bg-card border border-white/10 rounded-lg p-8">
      <h1 className="text-2xl font-bold text-white mb-2">Admin Login</h1>
      <p className="text-white/60 mb-6">Log in om de content te beheren.</p>

      <form onSubmit={handleLogin} className="space-y-4">
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        <div>
          <label htmlFor="email" className="block text-sm text-white/70 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent"
            placeholder="admin@drpventures.nl"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm text-white/70 mb-2"
          >
            Wachtwoord
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent"
            placeholder="••••••••"
          />
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Laden..." : "Inloggen"}
        </Button>
      </form>

      <div className="mt-6 pt-6 border-t border-white/10">
        <Button href="/" variant="secondary" className="w-full">
          Terug naar website
        </Button>
      </div>
    </div>
  );
}

function LoginFormFallback() {
  return (
    <div className="bg-card border border-white/10 rounded-lg p-8 animate-pulse">
      <div className="h-8 bg-white/10 rounded w-1/3 mb-4" />
      <div className="h-4 bg-white/10 rounded w-2/3 mb-6" />
      <div className="space-y-4">
        <div className="h-12 bg-white/10 rounded" />
        <div className="h-12 bg-white/10 rounded" />
        <div className="h-12 bg-white/10 rounded" />
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <Container className="max-w-md">
        <Suspense fallback={<LoginFormFallback />}>
          <LoginForm />
        </Suspense>
      </Container>
    </div>
  );
}
