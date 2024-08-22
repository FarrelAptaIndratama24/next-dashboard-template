"use client";

import { UserGroupIcon, HomeIcon, InboxIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Users",
    href: "/users",
    icon: UserGroupIcon,
  },
  {
    name: "Inbox",
    href: "/inbox",
    icon: InboxIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const isActive = pathname === link.href;
        const LinkIcon = link.icon;
        
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3
              ${isActive ? 'bg-blue-100 text-blue-600' : 'bg-gray-50 hover:bg-sky-100 hover:text-blue-600'}`}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
