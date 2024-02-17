"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link className={`rounded-xl py-1.5 px-4 ${pathName === link.url && "bg-black text-white"}`} href={link.url}>
      {link.title}
    </Link>
  );
};

export default NavLink;
