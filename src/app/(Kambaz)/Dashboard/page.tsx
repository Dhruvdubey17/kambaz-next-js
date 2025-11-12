"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "../Courses/reducer";
import { setEnrollments } from "./enrollmentsReducer";
import * as client from "../Courses/client";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  FormControl,
  Row,
} from "react-bootstrap";
import type { RootState, AppDispatch } from "../store";

type Course = {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  department: string;
  credits: number;
  description: string;
};

type User = {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
};

export default function Dashboard() {
  const dispatch = useDispatch<AppDispatch>();
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { enrollments } = useSelector(
    (state: RootState) => state.enrollmentsReducer
  );
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  ) as {
    currentUser: User | null;
  };

  const [course, setCourse] = useState<Omit<Course, "_id"> | Course>({
    name: "New Course",
    number: "NEW000",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    department: "D000",
    credits: 4,
    description: "New Description",
  });

  const [showAllCourses, setShowAllCourses] = useState(false);
  const [allCourses, setAllCourses] = useState<Course[]>([]);

  const fetchCourses = useCallback(async () => {
    try {
      const courses = await client.findMyCourses();
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  const fetchEnrollments = useCallback(async () => {
    if (!currentUser) return;
    try {
      const enrollments = await client.findEnrollmentsForUser(currentUser._id);
      dispatch(setEnrollments(enrollments));
    } catch (error) {
      console.error(error);
    }
  }, [currentUser, dispatch]);

  const fetchAllCoursesForEnrollment = useCallback(async () => {
    try {
      const courses = await client.fetchAllCourses();
      setAllCourses(courses);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course as Omit<Course, "_id">);
    dispatch(setCourses([...courses, newCourse]));
    setCourse({
      name: "New Course",
      number: "NEW000",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
      department: "D000",
      credits: 4,
      description: "New Description",
    });
  };

  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((c) => c._id !== courseId)));
  };

  const onUpdateCourse = async () => {
    if (!("_id" in course)) {
      alert(
        "Cannot update a course without an _id. Please select a course to edit first."
      );
      return;
    }
    await client.updateCourse(course as Course);
    dispatch(
      setCourses(
        courses.map((c) => {
          if (c._id === (course as Course)._id) {
            return course as Course;
          } else {
            return c;
          }
        })
      )
    );
  };

  useEffect(() => {
    fetchCourses();
    fetchEnrollments();
  }, [fetchCourses, fetchEnrollments]);

  useEffect(() => {
    if (showAllCourses) {
      fetchAllCoursesForEnrollment();
    }
  }, [showAllCourses, fetchAllCoursesForEnrollment]);

  const handleEditCourse = (c: Course) => {
    setCourse(c);
  };

  const handleEnroll = async (courseId: string) => {
    if (currentUser) {
      await client.enrollInCourse(currentUser._id, courseId);
      await fetchEnrollments();
    }
  };

  const handleUnenroll = async (courseId: string) => {
    if (currentUser) {
      await client.unenrollFromCourse(currentUser._id, courseId);
      await fetchEnrollments();
    }
  };

  const isEnrolled = (courseId: string): boolean => {
    if (!currentUser) return false;
    return enrollments.some(
      (enrollment) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );
  };

  const displayedCourses = showAllCourses ? allCourses : courses;
  const isFaculty = currentUser ? currentUser.role === "FACULTY" : false;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={onAddNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              id="wd-update-course-click"
              onClick={onUpdateCourse}
            >
              Update
            </button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            placeholder="Course Name"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            value={course.number}
            className="mb-2"
            placeholder="Course Number"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
          <FormControl
            as="textarea"
            value={course.description}
            rows={3}
            placeholder="Course Description"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      )}

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 id="wd-dashboard-published">
          {showAllCourses ? "All Courses" : "Published Courses"} (
          {displayedCourses.length})
        </h2>
        <button
          onClick={() => setShowAllCourses(!showAllCourses)}
          className="btn btn-primary"
          id="wd-enrollments-btn"
        >
          {showAllCourses ? "Show Enrolled Courses" : "Enrollments"}
        </button>
      </div>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((c) => (
            <Col
              key={c._id}
              className="wd-dashboard-course"
              style={{ width: "300px" }}
            >
              <Card>
                <Link
                  href={`/Courses/${c._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <CardImg
                    src="/images/reactjs.webp"
                    variant="top"
                    width="100%"
                    height={160}
                  />
                  <CardBody>
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {c.name}
                    </CardTitle>
                    <p className="text-muted small">
                      {c.number} • {c.credits} credits
                    </p>
                    <CardText
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "80px" }}
                    >
                      {c.description}
                    </CardText>
                    <Button variant="primary">Go</Button>

                    {isFaculty && (
                      <>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleEditCourse(c);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            onDeleteCourse(c._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                      </>
                    )}

                    {showAllCourses && !isFaculty && (
                      <>
                        {isEnrolled(c._id) ? (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleUnenroll(c._id);
                            }}
                            className="btn btn-danger float-end"
                          >
                            Unenroll
                          </button>
                        ) : (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleEnroll(c._id);
                            }}
                            className="btn btn-success float-end"
                          >
                            Enroll
                          </button>
                        )}
                      </>
                    )}
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
