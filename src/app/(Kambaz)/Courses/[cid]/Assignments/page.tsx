"use client";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { deleteAssignment } from "./reducer";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus, FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

type User = {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
};

export default function Assignments() {
  const { cid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const { assignments } = useSelector(
    (state: RootState) => state.assignmentsReducer
  );
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  ) as {
    currentUser: User | null;
  };

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === cid
  );

  const isFaculty = currentUser ? currentUser.role === "FACULTY" : false;

  const handleDeleteAssignment = (assignmentId: string) => {
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      dispatch(deleteAssignment(assignmentId));
    }
  };

  const handleAddAssignment = () => {
    router.push(`/Courses/${cid}/Assignments/new`);
  };

  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <input
            id="wd-search-assignment"
            className="form-control"
            placeholder="Search for Assignments"
            style={{ width: "300px" }}
          />
        </div>
        {isFaculty && (
          <div>
            <button
              id="wd-add-assignment-group"
              className="btn btn-secondary me-2"
            >
              <FaPlus className="me-1" /> Group
            </button>
            <button
              id="wd-add-assignment"
              className="btn btn-danger"
              onClick={handleAddAssignment}
            >
              <FaPlus className="me-1" /> Assignment
            </button>
          </div>
        )}
      </div>

      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-assignment-list-item list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div>
              <BsGripVertical className="me-2 fs-3" />
              ASSIGNMENTS
            </div>
            <div>
              <span className="badge rounded-pill bg-secondary border border-dark me-2">
                40% of Total
              </span>
              {isFaculty && (
                <>
                  <FaPlus className="me-2" />
                  <IoEllipsisVertical className="fs-4" />
                </>
              )}
            </div>
          </div>

          <ul className="wd-assignment-list list-group rounded-0">
            {courseAssignments.map((assignment) => (
              <li
                key={assignment._id}
                className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <FaRegCheckCircle className="text-success me-2 fs-5" />
                  <div>
                    <Link
                      className="wd-assignment-link text-decoration-none text-dark fw-bold"
                      href={`/Courses/${cid}/Assignments/${assignment._id}`}
                    >
                      {assignment.title}
                    </Link>
                    <div className="text-muted small">
                      <span className="text-danger">Multiple Modules</span> |{" "}
                      <strong>Not available until</strong> May 6 at 12:00am |
                      <strong> Due</strong> May 13 at 11:59pm | 100 pts
                    </div>
                  </div>
                </div>
                {isFaculty && (
                  <div className="d-flex align-items-center">
                    <Link
                      href={`/Courses/${cid}/Assignments/${assignment._id}`}
                      className="btn btn-link text-dark"
                    >
                      <FaPencil />
                    </Link>
                    <button
                      onClick={() => handleDeleteAssignment(assignment._id)}
                      className="btn btn-link text-danger"
                    >
                      <FaTrash />
                    </button>
                    <IoEllipsisVertical className="fs-4" />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
