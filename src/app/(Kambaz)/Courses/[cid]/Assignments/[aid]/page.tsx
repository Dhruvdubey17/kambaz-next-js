// import Link from "next/link";
// import { Form, Button, Row, Col } from "react-bootstrap";

// export default function AssignmentEditor() {
//   return (
//     <div id="wd-assignments-editor" className="p-3">
//       <Form>
//         <div className="mb-3">
//           <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
//           <Form.Control type="text" id="wd-name" defaultValue="A1" />
//         </div>

//         <div className="mb-3">
//           <Form.Control
//             as="textarea"
//             rows={10}
//             id="wd-description"
//             defaultValue={`The assignment is available online

// Submit a link to the landing page of your Web application running on Netlify.

// The landing page should include the following:

// - Your full name and section
// - Links to each of the lab assignments
// - Link to the Kanbas application
// - Links to all relevant source code repositories

// The Kanbas application should include a link to navigate back to the landing page.`}
//           />
//         </div>

//         <Row className="mb-3">
//           <Form.Label column sm={3} className="text-end">
//             Points
//           </Form.Label>
//           <Col sm={9}>
//             <Form.Control type="number" id="wd-points" defaultValue={100} />
//           </Col>
//         </Row>

//         <Row className="mb-3">
//           <Form.Label column sm={3} className="text-end">
//             Assignment Group
//           </Form.Label>
//           <Col sm={9}>
//             <Form.Select id="wd-group">
//               <option value="ASSIGNMENTS">ASSIGNMENTS</option>
//               <option value="QUIZ">QUIZ</option>
//               <option value="EXAM">EXAM</option>
//               <option value="PROJECT">PROJECT</option>
//             </Form.Select>
//           </Col>
//         </Row>

//         <Row className="mb-3">
//           <Form.Label column sm={3} className="text-end">
//             Display Grade as
//           </Form.Label>
//           <Col sm={9}>
//             <Form.Select id="wd-display-grade-as">
//               <option value="PERCENTAGE">Percentage</option>
//               <option value="POINTS">Points</option>
//             </Form.Select>
//           </Col>
//         </Row>

//         <Row className="mb-3">
//           <Form.Label column sm={3} className="text-end">
//             Submission Type
//           </Form.Label>
//           <Col sm={9}>
//             <div className="border rounded p-3">
//               <Form.Select id="wd-submission-type" className="mb-3">
//                 <option value="ONLINE">Online</option>
//                 <option value="OFFLINE">Offline</option>
//               </Form.Select>

//               <Form.Label className="fw-bold mb-2">
//                 Online Entry Options
//               </Form.Label>

//               <Form.Check
//                 type="checkbox"
//                 id="wd-text-entry"
//                 label="Text Entry"
//                 className="mb-2"
//               />
//               <Form.Check
//                 type="checkbox"
//                 id="wd-website-url"
//                 label="Website URL"
//                 className="mb-2"
//                 defaultChecked
//               />
//               <Form.Check
//                 type="checkbox"
//                 id="wd-media-recordings"
//                 label="Media Recordings"
//                 className="mb-2"
//               />
//               <Form.Check
//                 type="checkbox"
//                 id="wd-student-annotation"
//                 label="Student Annotation"
//                 className="mb-2"
//               />
//               <Form.Check
//                 type="checkbox"
//                 id="wd-file-uploads"
//                 label="File Uploads"
//               />
//             </div>
//           </Col>
//         </Row>

//         <Row className="mb-3">
//           <Form.Label column sm={3} className="text-end">
//             Assign
//           </Form.Label>
//           <Col sm={9}>
//             <div className="border rounded p-3">
//               <Form.Label htmlFor="wd-assign-to" className="fw-bold">
//                 Assign to
//               </Form.Label>
//               <Form.Select id="wd-assign-to" className="mb-3">
//                 <option value="EVERYONE">Everyone</option>
//                 <option value="GREATERTHAN">Grade 3.5 or more</option>
//                 <option value="LESSTHAN">Grade 3.5 or less</option>
//               </Form.Select>

//               <Form.Label htmlFor="wd-due-date" className="fw-bold">
//                 Due
//               </Form.Label>
//               <Form.Control
//                 type="datetime-local"
//                 id="wd-due-date"
//                 defaultValue="2024-05-13T23:59"
//                 className="mb-3"
//               />

//               <Row>
//                 <Col>
//                   <Form.Label htmlFor="wd-available-from" className="fw-bold">
//                     Available from
//                   </Form.Label>
//                   <Form.Control
//                     type="datetime-local"
//                     id="wd-available-from"
//                     defaultValue="2024-05-06T00:00"
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Label htmlFor="wd-available-until" className="fw-bold">
//                     Until
//                   </Form.Label>
//                   <Form.Control
//                     type="datetime-local"
//                     id="wd-available-until"
//                     defaultValue="2024-05-13T23:59"
//                   />
//                 </Col>
//               </Row>
//             </div>
//           </Col>
//         </Row>

//         <hr />

//         <div className="d-flex justify-content-end">
//           <Link href="/Courses/1234/Assignments">
//             <Button
//               variant="secondary"
//               className="me-2"
//               id="wd-assignment-cancel-btn"
//             >
//               Cancel
//             </Button>
//           </Link>
//           <Link href="/Courses/1234/Assignments">
//             <Button variant="danger" id="wd-assignment-save-btn">
//               Save
//             </Button>
//           </Link>
//         </div>
//       </Form>
//     </div>
//   );
// }

"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import * as db from "../../../../Database";
import { Button } from "react-bootstrap";

interface Assignment {
  _id: string;
  title: string;
  course: string;
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignments: Assignment[] = db.assignments;

  const assignment = assignments.find((a) => a._id === aid);

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          Assignment Name
        </label>
        <input
          id="wd-name"
          className="form-control"
          value={assignment?.title || ""}
          readOnly
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
          defaultValue={`The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include:
- Your full name and section
- Links to each of the lab assignments
- Link to the Kanbas application
- Links to all relevant source code repositories`}
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
            defaultValue={100}
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
                defaultValue="2024-05-13"
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
                  defaultValue="2024-05-06"
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
                  defaultValue="2024-05-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="d-flex justify-content-end">
        <Link
          href={`/Courses/${cid}/Assignments`}
          className="btn btn-secondary me-2"
        >
          Cancel
        </Link>
        <Link href={`/Courses/${cid}/Assignments`} className="btn btn-danger">
          Save
        </Link>
      </div>
    </div>
  );
}
