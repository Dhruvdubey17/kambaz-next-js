"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function Breadcrumb({
  course,
}: {
  course: { name: string } | undefined;
}) {
  const pathname = usePathname();
  const currentPage = pathname.split("/").pop() || "Home";

  return <span className="d-inline">&gt; {currentPage}</span>;
}
