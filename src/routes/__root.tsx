import { Outlet, Link, createRootRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { FloatingActions } from "@/components/FloatingActions";
import { TooltipProvider } from "@/components/ui/tooltip";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-bold text-gradient-berry">404</h1>
        <h2 className="mt-4 font-display text-2xl font-bold text-foreground">Lost in the playground</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for ran off to play somewhere else.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-berry px-6 py-3 text-sm font-bold text-berry-foreground shadow-pop transition-transform hover:scale-105"
          >
            Take me home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <TooltipProvider delayDuration={200}>
      <Navbar />
      <main className="min-h-[60vh]">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <FloatingActions />
      <Toaster position="top-center" richColors />
    </TooltipProvider>
  );
}
