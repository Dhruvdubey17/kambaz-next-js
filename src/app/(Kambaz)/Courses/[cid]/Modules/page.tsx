// "use client";
// import ModulesControls from "./ModulesControls";
// import { ListGroup, ListGroupItem } from "react-bootstrap";
// import { BsGripVertical } from "react-icons/bs";
// import ModuleControlButtons from "./ModuleControlButton";
// import LessonControlButtons from "./LessonControlButtons";

// export default function Modules() {
//   return (
//     <div>
//       <ModulesControls />
//       <br />
//       <br />
//       <br />
//       <ListGroup className="rounded-0" id="wd-modules">
//         <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
//           <div className="wd-title p-3 ps-2 bg-secondary">
//             <BsGripVertical className="me-2 fs-3" /> Week 1{" "}
//             <ModuleControlButtons />
//           </div>
//           <ListGroup className="wd-lessons rounded-0">
//             <ListGroupItem className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES{" "}
//               <LessonControlButtons />
//             </ListGroupItem>
//             <ListGroupItem className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> Introduction to the
//               course <LessonControlButtons />
//             </ListGroupItem>
//             <ListGroupItem className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> Learn what is Web
//               Development <LessonControlButtons />
//             </ListGroupItem>
//             <ListGroupItem className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> Set up your environment{" "}
//               <LessonControlButtons />
//             </ListGroupItem>
//           </ListGroup>
//           <ListGroup className="wd-lessons rounded-0">
//             <ListGroupItem className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> READING{" "}
//               <LessonControlButtons />
//             </ListGroupItem>
//             <ListGroupItem className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> Fullstack Developer -
//               Chapter 1 - Introduction <LessonControlButtons />
//             </ListGroupItem>
//             <ListGroupItem className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> Fullstack Developer -
//               Chapter 2 - Getting environment ready <LessonControlButtons />
//             </ListGroupItem>
//           </ListGroup>
//           <ListGroup className="wd-lessons rounded-0">
//             <ListGroupItem className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> SLIDES{" "}
//               <LessonControlButtons />
//             </ListGroupItem>
//             <ListGroupItem className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> Intro to Web Development{" "}
//               <LessonControlButtons />
//             </ListGroupItem>
//             <ListGroupItem className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> Creating a server with
//               Node.js and Express <LessonControlButtons />
//             </ListGroupItem>
//             <ListGroupItem className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> Creating a react
//               application <LessonControlButtons />
//             </ListGroupItem>
//           </ListGroup>
//         </ListGroupItem>

//         <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
//           <div className="wd-title p-3 ps-2 bg-secondary">
//             <BsGripVertical className="me-2 fs-3" /> Week 2{" "}
//             <ModuleControlButtons />
//           </div>
//           <ListGroup className="wd-lessons rounded-0">
//             <ListGroupItem className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES{" "}
//               <LessonControlButtons />
//             </ListGroupItem>
//             <ListGroupItem className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> HTML for beginners{" "}
//               <LessonControlButtons />
//             </ListGroupItem>
//             <ListGroupItem className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> Learn how to create user
//               interfaces with HTML <LessonControlButtons />
//             </ListGroupItem>
//             <ListGroupItem className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> Deploy app on netlify{" "}
//               <LessonControlButtons />
//             </ListGroupItem>
//           </ListGroup>
//           <ListGroup className="wd-lessons rounded-0">
//             <ListGroupItem className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> SLIDES{" "}
//               <LessonControlButtons />
//             </ListGroupItem>
//             <ListGroupItem className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> Intro to HTML and DOM{" "}
//               <LessonControlButtons />
//             </ListGroupItem>
//             <ListGroupItem className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> Formatting web content
//               with headings, paragraphs, lists <LessonControlButtons />
//             </ListGroupItem>
//             <ListGroupItem className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> Adding forms to your web
//               pages <LessonControlButtons />
//             </ListGroupItem>
//           </ListGroup>
//         </ListGroupItem>

//         <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
//           <div className="wd-title p-3 ps-2 bg-secondary">
//             <BsGripVertical className="me-2 fs-3" /> Week 3{" "}
//             <ModuleControlButtons />
//           </div>
//           <ListGroup className="wd-lessons rounded-0">
//             <ListGroupItem className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES{" "}
//               <LessonControlButtons />
//             </ListGroupItem>
//             <ListGroupItem className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> CSS Fundamentals{" "}
//               <LessonControlButtons />
//             </ListGroupItem>
//             <ListGroupItem className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> Designing user interfaces
//               with CSS <LessonControlButtons />
//             </ListGroupItem>
//           </ListGroup>
//           <ListGroup className="wd-lessons rounded-0">
//             <ListGroupItem className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> SLIDES{" "}
//               <LessonControlButtons />
//             </ListGroupItem>
//             <ListGroupItem className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> Cascading Style Sheets
//               Introduction <LessonControlButtons />
//             </ListGroupItem>
//             <ListGroupItem className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> Adding style to your web
//               pages <LessonControlButtons />
//             </ListGroupItem>
//             <ListGroupItem className="wd-lesson p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" /> Using tailwind CSS{" "}
//               <LessonControlButtons />
//             </ListGroupItem>
//           </ListGroup>
//         </ListGroupItem>
//       </ListGroup>
//     </div>
//   );
// }

"use client";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import ModulesControls from "./ModulesControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButton";
import LessonControlButtons from "./LessonControlButtons";

interface Lesson {
  _id: string;
  name: string;
  description?: string;
  module: string;
}

interface Module {
  _id: string;
  name: string;
  description?: string;
  course: string;
  lessons?: Lesson[];
}

export default function Modules() {
  const { cid } = useParams();
  const modules: Module[] = db.modules;

  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />
      <ListGroup id="wd-modules" className="rounded-0">
        {modules
          .filter((module: Module) => module.course === cid)
          .map((module: Module) => (
            <ListGroupItem
              key={module._id}
              className="wd-module p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> {module.name}{" "}
                <ModuleControlButtons />
              </div>
              {/* Display module description if it exists */}
              {module.description && (
                <div className="wd-description p-3 ps-2">
                  {module.description}
                </div>
              )}
              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson: Lesson) => (
                    <ListGroupItem
                      key={lesson._id}
                      className="wd-lesson p-3 ps-1"
                    >
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name}{" "}
                      <LessonControlButtons />
                      {/* Display lesson description if it exists */}
                      {lesson.description && (
                        <div className="wd-lesson-description text-muted small ps-5 mt-1">
                          {lesson.description}
                        </div>
                      )}
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
}
