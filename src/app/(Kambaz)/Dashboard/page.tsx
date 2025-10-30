"use client";

import { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { courses as dbCourses } from "../Database";
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

// Infer Course type from your Database
type Course = (typeof dbCourses)[number];

interface RootState {
  coursesReducer: {
    courses: Course[];
  };
}

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const dispatch = useDispatch();

  // State for the course currently being edited/added
  const [course, setCourse] = useState<Omit<Course, "_id">>({
    name: "New Course",
    number: "NEW000",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    department: "D000",
    credits: 4,
    description: "New Description",
  });

  // Add new course
  const handleAddNewCourse = () => {
    dispatch(addNewCourse(course));
    // Reset the form
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

  // Update course
  const handleUpdateCourse = () => {
    if (!("_id" in course)) {
      alert(
        "Cannot update a course without an _id. Please select a course to edit first."
      );
      return;
    }
    dispatch(updateCourse(course as Course));
  };

  // Delete course
  const handleDeleteCourse = (_id: string) => {
    dispatch(deleteCourse(_id));
  };

  // Load course into form for editing
  const handleEditCourse = (c: Course) => {
    setCourse(c);
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          onClick={handleAddNewCourse}
        >
          Add
        </button>
        <button
          className="btn btn-warning float-end me-2"
          onClick={handleUpdateCourse}
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
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((c) => (
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
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleEditCourse(c);
                      }}
                      className="btn btn-warning me-2 float-end"
                    >
                      Edit
                    </button>
                    <Button variant="primary">Go</Button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleDeleteCourse(c._id);
                      }}
                      className="btn btn-danger float-end"
                    >
                      Delete
                    </button>
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
