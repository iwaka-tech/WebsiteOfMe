
"use client";

import { usePathname } from "next/navigation";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import { Navbar } from "@/components/Navbar";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <div className="relative min-h-screen">
      <BackgroundVideo />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
