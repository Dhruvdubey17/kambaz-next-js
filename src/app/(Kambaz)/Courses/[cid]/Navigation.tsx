"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation() {
  const pathname = usePathname();

  const links = [
    { href: "/Courses/1234/Home", label: "Home", id: "wd-course-home-link" },
    {
      href: "/Courses/1234/Modules",
      label: "Modules",
      id: "wd-course-modules-link",
    },
    {
      href: "https://piazza.com/class/mf08v5tcamaem",
      label: "Piazza",
      id: "wd-course-piazza-link",
      external: true,
    },
    {
      href: "https://northeastern.instructure.com/courses/225999/external_tools/35048",
      label: "Zoom",
      id: "wd-course-zoom-link",
      external: true,
    },
    {
      href: "/Courses/1234/Assignments",
      label: "Assignments",
      id: "wd-course-quizzes-link",
    },
    {
      href: "/Courses/1234/Quizzes",
      label: "Quizzes",
      id: "wd-course-assignments-link",
    },
    {
      href: "/Courses/1234/Grades",
      label: "Grades",
      id: "wd-course-grades-link",
    },
    {
      href: "/Courses/1234/People/Table",
      label: "People",
      id: "wd-course-people-link",
    },
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const isActive = !link.external && pathname === link.href;

        return (
          <Link
            key={link.id}
            href={link.href}
            id={link.id}
            className={`list-group-item border-0 ${
              isActive ? "active" : "text-danger"
            }`}
            {...(link.external && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
