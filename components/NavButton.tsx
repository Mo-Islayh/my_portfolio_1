"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavButton = ({
  route,
  title,
}: {
  route: string;
  title: string;
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={route}
      passHref
      className={`block px-4 py-2 mx-1 text-lg font-medium leading-5  transition duration-150 ease-in-out rounded-md hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100  ${
        pathname == route ? "bg-gray-100 text-gray-700" : "text-slate-200"
      } `}
    >
      {title}
    </Link>
  );
};
