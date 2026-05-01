import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Logo } from "@/components/Logo";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — Kathyayani Kids Wear" },
      { name: "description", content: "Sign in to your Kathyayani Kids Wear account." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  return (
    <div className="mx-auto flex min-h-[80vh] max-w-md items-center justify-center px-4 py-10">
      <div className="w-full rounded-3xl border border-border bg-card p-8 shadow-pop">
        <Logo className="mx-auto justify-center" />
        <h1 className="mt-6 text-center font-display text-3xl font-bold">Welcome back!</h1>
        <p className="mt-1 text-center text-sm text-muted-foreground">Sign in to continue shopping.</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("You're signed in! (demo)");
          }}
          className="mt-6 space-y-4"
        >
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-muted-foreground">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm font-medium outline-none focus:border-berry"
              placeholder="you@happy.com"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-muted-foreground">Password</label>
            <input
              type="password"
              required
              value={form.password}
              onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm font-medium outline-none focus:border-berry"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-berry py-3.5 font-display text-base font-bold text-berry-foreground shadow-pop transition-transform hover:scale-[1.02] active:scale-95"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          New here?{" "}
          <Link to="/signup" className="font-bold text-berry hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
