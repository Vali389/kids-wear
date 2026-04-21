import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Logo } from "@/components/Logo";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Sign up — Tinytots" },
      { name: "description", content: "Create your Tinytots account." },
    ],
  }),
  component: SignupPage,
});

function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  return (
    <div className="mx-auto flex min-h-[80vh] max-w-md items-center justify-center px-4 py-10">
      <div className="w-full rounded-3xl border border-border bg-card p-8 shadow-pop">
        <Logo className="mx-auto justify-center" />
        <h1 className="mt-6 text-center font-display text-3xl font-bold">Join the tribe 🌈</h1>
        <p className="mt-1 text-center text-sm text-muted-foreground">Get 10% off your first order.</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Account created! (demo)");
          }}
          className="mt-6 space-y-4"
        >
          {(["name", "email", "password"] as const).map((k) => (
            <div key={k}>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-muted-foreground capitalize">
                {k}
              </label>
              <input
                type={k === "password" ? "password" : k === "email" ? "email" : "text"}
                required
                value={form[k]}
                onChange={(e) => setForm((f) => ({ ...f, [k]: e.target.value }))}
                className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm font-medium outline-none focus:border-berry"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-berry py-3.5 font-display text-base font-bold text-berry-foreground shadow-pop transition-transform hover:scale-[1.02] active:scale-95"
          >
            Create account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have one?{" "}
          <Link to="/login" className="font-bold text-berry hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
