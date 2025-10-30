"use client";

import { ReactNode, useState } from "react";
import CourseNavigation from "./Navigation";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa";
import Breadcrumb from "./Breadcrumb";
import { courses as dbCourses } from "../../Database";

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
