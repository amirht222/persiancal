"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

export default function NavItem({ children, href }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${pathname === href ? "text-primary" : "text-inherit"}`}
    >
      {children}
    </Link>
  );
}
