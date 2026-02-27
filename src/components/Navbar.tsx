"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, BookOpen, PenTool } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "За мен", href: "/", icon: User },
  { name: "Полезно", href: "/useful", icon: BookOpen },
  { name: "Мисли", href: "/statuses", icon: PenTool },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full flex justify-center p-6 sticky top-0 z-50">
      <div className="flex items-center gap-2 p-1 glass rounded-full px-6">
        <Link href="/" className="font-headline font-bold text-xl mr-6 text-accent">
          Моят Свят
        </Link>
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                pathname === item.href
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              )}
            >
              <item.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
