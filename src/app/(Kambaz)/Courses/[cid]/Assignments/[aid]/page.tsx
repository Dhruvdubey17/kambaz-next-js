"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { addAssignment, updateAssignment } from "../reducer";
import { v4 as uuidv4 } from "uuid";

type User = {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
};

interface Assignment {
  _id: string;
  title: string;
  course: string;
  description?: string;
  points?: number;
  dueDate?: string;
  availableFrom?: string;
  availableUntil?: string;
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
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

  const existingAssignment = assignments.find((a) => a._id === aid);
  const isNewAssignment = aid === "new";

  const [assignment, setAssignment] = useState<Omit<Assignment, "_id">>({
    title: "",
    course: cid as string,
    description: "",
    points: 100,
    dueDate: "2024-05-13",
    availableFrom: "2024-05-06",
    availableUntil: "2024-05-20",
  });

  useEffect(() => {
    if (existingAssignment && !isNewAssignment) {
      setAssignment({
        title: existingAssignment.title,
        course: existingAssignment.course,
        description: existingAssignment.description || "",
        points: existingAssignment.points || 100,
        dueDate: existingAssignment.dueDate || "2024-05-13",
        availableFrom: existingAssignment.availableFrom || "2024-05-06",
        availableUntil: existingAssignment.availableUntil || "2024-05-20",
      });
    }
  }, [existingAssignment, isNewAssignment]);

  const handleSave = () => {
    if (isNewAssignment) {
      const newAssignment: Assignment = {
        ...assignment,
        _id: uuidv4(),
      };
      dispatch(addAssignment(newAssignment));
    } else {
      const updatedAssignment: Assignment = {
        ...assignment,
        _id: aid as string,
      };
      dispatch(updateAssignment(updatedAssignment));
    }
    router.push(`/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };

  const isFaculty = currentUser ? currentUser.role === "FACULTY" : false;

  if (!isFaculty) {
    return (
      <div className="container mt-4">
        <div className="alert alert-warning">
          You do not have permission to edit assignments.
        </div>
      </div>
    );
  }

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          Assignment Name
        </label>
        <input
          id="wd-name"
          className="form-control"
          value={assignment.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">
          Description
        </label>
        <textarea
          id="wd-description"
          className="form-control"
          rows={10}
          value={assignment.description}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
        />
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-points" className="col-sm-3 col-form-label text-end">
          Points
        </label>
        <div className="col-sm-9">
          <input
            id="wd-points"
            className="form-control"
            type="number"
            value={assignment.points}
            onChange={(e) =>
              setAssignment({ ...assignment, points: Number(e.target.value) })
            }
          />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-group" className="col-sm-3 col-form-label text-end">
          Assignment Group
        </label>
        <div className="col-sm-9">
          <select id="wd-group" className="form-select">
            <option>ASSIGNMENTS</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <label
          htmlFor="wd-display-grade-as"
          className="col-sm-3 col-form-label text-end"
        >
          Display Grade as
        </label>
        <div className="col-sm-9">
          <select id="wd-display-grade-as" className="form-select">
            <option>Percentage</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <label
          htmlFor="wd-submission-type"
          className="col-sm-3 col-form-label text-end"
        >
          Submission Type
        </label>
        <div className="col-sm-9">
          <div className="border p-3">
            <select id="wd-submission-type" className="form-select mb-3">
              <option>Online</option>
            </select>

            <div className="mb-2">
              <strong>Online Entry Options</strong>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-text-entry"
              />
              <label className="form-check-label" htmlFor="wd-text-entry">
                Text Entry
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-website-url"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="wd-website-url">
                Website URL
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-media-recordings"
              />
              <label className="form-check-label" htmlFor="wd-media-recordings">
                Media Recordings
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-student-annotation"
              />
              <label
                className="form-check-label"
                htmlFor="wd-student-annotation"
              >
                Student Annotation
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-file-upload"
              />
              <label className="form-check-label" htmlFor="wd-file-upload">
                File Uploads
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <label className="col-sm-3 col-form-label text-end">Assign</label>
        <div className="col-sm-9">
          <div className="border p-3">
            <div className="mb-3">
              <label htmlFor="wd-assign-to" className="form-label">
                <strong>Assign to</strong>
              </label>
              <input
                id="wd-assign-to"
                className="form-control"
                defaultValue="Everyone"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="wd-due-date" className="form-label">
                <strong>Due</strong>
              </label>
              <input
                type="date"
                id="wd-due-date"
                className="form-control"
                value={assignment.dueDate}
                onChange={(e) =>
                  setAssignment({ ...assignment, dueDate: e.target.value })
                }
              />
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="wd-available-from" className="form-label">
                  <strong>Available from</strong>
                </label>
                <input
                  type="date"
                  id="wd-available-from"
                  className="form-control"
                  value={assignment.availableFrom}
                  onChange={(e) =>
                    setAssignment({
                      ...assignment,
                      availableFrom: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="wd-available-until" className="form-label">
                  <strong>Until</strong>
                </label>
                <input
                  type="date"
                  id="wd-available-until"
                  className="form-control"
                  value={assignment.availableUntil}
                  onChange={(e) =>
                    setAssignment({
                      ...assignment,
                      availableUntil: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="d-flex justify-content-end">
        <button onClick={handleCancel} className="btn btn-secondary me-2">
          Cancel
        </button>
        <button onClick={handleSave} className="btn btn-danger">
          Save
        </button>
      </div>
    </div>
  );
}
