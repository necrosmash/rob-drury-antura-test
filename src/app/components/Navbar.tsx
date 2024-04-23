"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Navbar.module.css";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "User", href: "/user" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className={`${styles.navbar}`}>
      {navLinks.map((link, index) => {
        const isActive =
          (link.name === "Home" && pathname === "/") ||
          (link.name !== "Home" && pathname.startsWith(link.href));
        return (
          <Link
            className={`
                ${styles.link}
                ${navLinks.length - 1 !== index && styles.nonFinalLink}
                ${isActive && styles.activeLink}
              `}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
