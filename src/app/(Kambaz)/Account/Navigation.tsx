"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../store";

type User = {
  _id: string;
  username: string;
  role: string;
  firstName: string;
  lastName: string;
};

export default function AccountNavigation() {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  ) as { currentUser: User | null };

  const pathname = usePathname();

  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const href = `/Account/${link}`;
        const isActive = pathname === href;
        return (
          <Link
            key={link}
            href={href}
            id={`wd-account-${link.toLowerCase()}-link`}
            className={`list-group-item border-0 ${
              isActive ? "active" : "text-danger"
            }`}
          >
            {link}
          </Link>
        );
      })}
      {currentUser && currentUser.role === "ADMIN" && (
        <Link
          href="/Account/Users"
          id="wd-account-users-link"
          className={`list-group-item border-0 ${
            pathname.endsWith("Users") ? "active" : "text-danger"
          }`}
        >
          Users
        </Link>
      )}
    </div>
  );
}
