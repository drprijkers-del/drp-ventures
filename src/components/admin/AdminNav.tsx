"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Container } from "@/components/ui/Container";
import type { User } from "@supabase/supabase-js";

interface AdminNavProps {
  user: User;
}

export function AdminNav({ user }: AdminNavProps) {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-white/10">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/admin" className="flex items-center gap-3">
            <span className="text-lg font-bold text-white">DRP Admin</span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            <Link
              href="/admin"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/admin/content"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Content
            </Link>
            <Link
              href="/"
              className="text-sm text-white/70 hover:text-white transition-colors"
              target="_blank"
            >
              Website bekijken
            </Link>
          </div>

          {/* User menu */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/50">{user.email}</span>
            <button
              onClick={handleLogout}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Uitloggen
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
