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
      onClick={() => {
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
      }}
      href={href}
      className={`${pathname === href ? "text-primary" : "text-inherit"}`}
    >
      {children}
    </Link>
  );
}
