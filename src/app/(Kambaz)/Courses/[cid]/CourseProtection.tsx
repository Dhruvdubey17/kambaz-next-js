"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

type User = {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
};

export default function CourseProtection({
  children,
}: {
  children: React.ReactNode;
}) {
  const { cid } = useParams();
  const router = useRouter();
  const { enrollments } = useSelector(
    (state: RootState) => state.enrollmentsReducer
  );
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  ) as {
    currentUser: User | null;
  };

  useEffect(() => {
    if (!currentUser) {
      router.push("/Account/Signin");
      return;
    }

    // Faculty can access all courses
    if (currentUser.role === "FACULTY") {
      return;
    }

    // Check if user is enrolled in this course
    const isEnrolled = enrollments.some(
      (enrollment) =>
        enrollment.user === currentUser._id && enrollment.course === cid
    );

    if (!isEnrolled) {
      alert("You must be enrolled in this course to access it.");
      router.push("/Dashboard");
    }
  }, [currentUser, enrollments, cid, router]);

  return <>{children}</>;
}
