// import { redirect } from "next/navigation";

// export default async function CoursesPage({
//   params,
// }: {
//   params: Promise<{ cid: string }>;
// }) {
//   const { cid } = await params;
//   redirect(`/Courses/${cid}/Home`);
// }

import { redirect } from "next/navigation";

interface CoursesPageProps {
  params: { cid: string };
}

export default function CoursesPage({ params }: CoursesPageProps) {
  redirect(`/Courses/${params.cid}/Home`);
}
