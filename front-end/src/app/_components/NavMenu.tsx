"use client";

import Link from "next/link";

export default function NavMenu({
  menu,
}: {
  menu: { label: string; href: string; id: string };
}) {
  return (
    <li key={menu.id}>
      <Link href={menu.href} className="nav-link">
        {menu.label}
      </Link>
    </li>
  );
}
