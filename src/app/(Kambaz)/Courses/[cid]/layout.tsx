// import { ReactNode } from "react";
// import CourseNavigation from "./Navigation";
// import { FaAlignJustify } from "react-icons/fa";
// import Breadcrumb from "./Breadcrumb";
// import { courses } from "../../Database";

// export default async function CoursesLayout({
//   children,
//   params,
// }: Readonly<{
//   children: ReactNode;
//   params: Promise<{ cid: string }>;
// }>) {
//   const { cid } = await params;
//   const course = courses.find((course) => course._id === cid);

//   return (
//     <div id="wd-courses">
//       <h2 className="text-danger">
//         <FaAlignJustify className="me-4 fs-4 mb-1" />
//         {course?.name} <Breadcrumb course={course} />
//       </h2>{" "}
//       <hr />
//       <div className="d-flex">
//         <div className="d-none d-md-block">
//           <CourseNavigation cid={cid} />
//         </div>
//         <div className="flex-fill">{children}</div>
//       </div>
//     </div>
//   );
// }

"use client";

import { ReactNode, useState } from "react";
import CourseNavigation from "./Navigation";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa";
import Breadcrumb from "./Breadcrumb";
import { courses as dbCourses } from "../../Database";

// Infer Course type from database
type Course = (typeof dbCourses)[number];

interface RootState {
  coursesReducer: {
    courses: Course[];
  };
}

export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams<{ cid: string }>();
  const { courses } = useSelector((state: RootState) => state.coursesReducer);

  const course = courses.find((course) => course._id === cid);

  const [showNavigation, setShowNavigation] = useState(true);

  const toggleNavigation = () => setShowNavigation(!showNavigation);

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify
          className="me-4 fs-4 mb-1"
          style={{ cursor: "pointer" }}
          onClick={toggleNavigation}
        />
        {course?.name} <Breadcrumb course={course} />
      </h2>
      <hr />
      <div className="d-flex">
        {showNavigation && (
          <div className="d-none d-md-block">
            <CourseNavigation cid={cid || ""} />
          </div>
        )}
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
