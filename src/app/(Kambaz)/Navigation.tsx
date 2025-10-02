"use client";

import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function KambazNavigation() {
  const pathname = usePathname();

  const links = [
    { href: "/Account", icon: FaRegCircleUser, label: "Account" },
    { href: "/Dashboard", icon: AiOutlineDashboard, label: "Dashboard" },
    { href: "/Courses/1234/Home", icon: LiaBookSolid, label: "Courses" },
    { href: "/Calendar", icon: IoCalendarOutline, label: "Calendar" },
    { href: "/Inbox", icon: FaInbox, label: "Inbox" },
    { href: "/Labs", icon: LiaCogSolid, label: "Labs" },
  ];

  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 120 }}
      id="wd-kambaz-navigation"
    >
      <ListGroupItem
        className="bg-black border-0 text-center"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      >
        <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
      </ListGroupItem>

      {links.map((link, index) => {
        const Icon = link.icon;

        // Special handling for Courses - match any /Courses route
        const isActive =
          link.label === "Courses"
            ? pathname?.startsWith("/Courses")
            : pathname === link.href || pathname?.startsWith(link.href + "/");

        // Icon color: white for Account, red for all others
        const iconColor =
          link.label === "Account" ? "text-white" : "text-danger";

        return (
          <ListGroupItem
            key={index}
            className={`border-0 text-center ${
              isActive ? "bg-white" : "bg-black"
            }`}
          >
            <Link
              href={link.href}
              className={`text-decoration-none ${
                isActive ? "text-danger" : "text-white"
              }`}
            >
              <Icon className={`fs-1 ${iconColor}`} />
              <br />
              {link.label}
            </Link>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
}
