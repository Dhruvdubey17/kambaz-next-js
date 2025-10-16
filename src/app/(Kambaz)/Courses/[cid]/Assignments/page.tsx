// "use client";

// import Link from "next/link";
// import { BsGripVertical, BsSearch, BsPlus } from "react-icons/bs";
// import { IoEllipsisVertical } from "react-icons/io5";
// import { FaCheckCircle } from "react-icons/fa";
// import { Button, Form, InputGroup } from "react-bootstrap";
// import { MdAssignmentAdd } from "react-icons/md";
// import { FaPlus } from "react-icons/fa";

// export default function Assignments() {
//   return (
//     <div id="wd-assignments" className="p-3">
//       <div className="d-flex justify-content-between mb-3">
//         <InputGroup style={{ width: "300px" }}>
//           <InputGroup.Text className="bg-white">
//             <BsSearch />
//           </InputGroup.Text>
//           <Form.Control
//             type="text"
//             placeholder="Search for Assignments"
//             id="wd-search-assignment"
//           />
//         </InputGroup>
//         <div>
//           <Button
//             variant="secondary"
//             className="me-2"
//             id="wd-add-assignment-group"
//           >
//             <BsPlus className="me-1" /> Group
//           </Button>
//           <Button variant="danger" id="wd-add-assignment">
//             <BsPlus className="me-1" /> Assignment
//           </Button>
//         </div>
//       </div>
//       <div className="border border-secondary p-3 mb-3 bg-light d-flex justify-content-between align-items-center">
//         <div className="d-flex align-items-center">
//           <BsGripVertical className="me-2 fs-4" />
//           <strong>ASSIGNMENTS</strong>
//         </div>
//         <div className="d-flex align-items-center">
//           <span className="text-muted border border-dark rounded-pill px-3 py-1 me-2">
//             40% of Total
//           </span>
//           <FaPlus className="p-1 me-2 fs-4" />
//           <IoEllipsisVertical className="fs-4" />
//         </div>
//       </div>
//       <ul id="wd-assignment-list" className="list-group">
//         <li className="wd-assignment-list-item list-group-item p-3 border border-secondary">
//           <div className="d-flex justify-content-between align-items-center">
//             <div className="d-flex align-items-center">
//               <BsGripVertical className="me-2 fs-4" />
//               <div className="me-3 text-success fs-3">
//                 <MdAssignmentAdd />
//               </div>
//               <div>
//                 <Link
//                   href="/Courses/1234/Assignments/123"
//                   className="wd-assignment-link text-dark fw-bold text-decoration-none"
//                 >
//                   A1
//                 </Link>
//                 <div className="text-danger small">Multiple Modules</div>
//                 <div className="small text-muted">
//                   <strong>Not available until</strong> May 6 at 12:00am |
//                 </div>
//                 <div className="small text-muted">
//                   <strong>Due</strong> May 13 at 11:59pm | 100 pts
//                 </div>
//               </div>
//             </div>
//             <div>
//               <FaCheckCircle className="text-success fs-4 me-2" />
//               <IoEllipsisVertical className="fs-4" />
//             </div>
//           </div>
//         </li>

//         <li className="wd-assignment-list-item list-group-item p-3 border border-secondary">
//           <div className="d-flex justify-content-between align-items-center">
//             <div className="d-flex align-items-center">
//               <BsGripVertical className="me-2 fs-4" />
//               <div className="me-3 text-success fs-3">
//                 <MdAssignmentAdd />
//               </div>
//               <div>
//                 <Link
//                   href="/Courses/1234/Assignments/123"
//                   className="wd-assignment-link text-dark fw-bold text-decoration-none"
//                 >
//                   A2
//                 </Link>
//                 <div className="text-danger small">Multiple Modules</div>
//                 <div className="small text-muted">
//                   <strong>Not available until</strong> May 13 at 12:00am |
//                 </div>
//                 <div className="small text-muted">
//                   <strong>Due</strong> May 20 at 11:59pm | 100 pts
//                 </div>
//               </div>
//             </div>
//             <div>
//               <FaCheckCircle className="text-success fs-4 me-2" />
//               <IoEllipsisVertical className="fs-4" />
//             </div>
//           </div>
//         </li>

//         <li className="wd-assignment-list-item list-group-item p-3 border border-secondary">
//           <div className="d-flex justify-content-between align-items-center">
//             <div className="d-flex align-items-center">
//               <BsGripVertical className="me-2 fs-4" />
//               <div className="me-3 text-success fs-3">
//                 <MdAssignmentAdd />
//               </div>
//               <div>
//                 <Link
//                   href="/Courses/1234/Assignments/123"
//                   className="wd-assignment-link text-dark fw-bold text-decoration-none"
//                 >
//                   A3
//                 </Link>
//                 <div className="text-danger small">Multiple Modules</div>
//                 <div className="small text-muted">
//                   <strong>Not available until</strong> May 20 at 12:00am |
//                 </div>
//                 <div className="small text-muted">
//                   <strong>Due</strong> May 27 at 11:59pm | 100 pts
//                 </div>
//               </div>
//             </div>
//             <div className="d-flex align-items-center">
//               <FaCheckCircle className="text-success fs-4 me-2" />
//               <IoEllipsisVertical className="fs-4" />
//             </div>
//           </div>
//         </li>
//       </ul>
//     </div>
//   );
// }

"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import * as db from "../../../Database";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";

interface Assignment {
  _id: string;
  title: string;
  course: string;
}

export default function Assignments() {
  const { cid } = useParams();
  const assignments: Assignment[] = db.assignments;

  // Filter assignments for the current course
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === cid
  );

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
        <div>
          <button
            id="wd-add-assignment-group"
            className="btn btn-secondary me-2"
          >
            <FaPlus className="me-1" /> Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger">
            <FaPlus className="me-1" /> Assignment
          </button>
        </div>
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
              <FaPlus className="me-2" />
              <IoEllipsisVertical className="fs-4" />
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
                <div>
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
