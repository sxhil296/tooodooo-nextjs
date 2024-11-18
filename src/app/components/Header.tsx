"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signIn } from "next-auth/react"

const links = [
  { name: "Home", href: "/" },
  { name: "Todos", href: "/todos" },
  { name: "Create", href: "/create-todo" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 h-[70px] border border-b w-full px-6 py-3">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-2xl md:text-4xl font-bold">
          tooodooo
        </Link>

        <nav>
          <ul className="flex items-center justify-between gap-4 text-lg font-medium">
            {links.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                className={`${pathname === link.href ? " font-bold" : ""}`}
              >
                {link.name}
              </Link>
            ))}
            <button onClick={() => signIn("github")}>SignIn</button>
          </ul>
        </nav>
      </div>
    </header>
  );
}
