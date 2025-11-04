"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../../store";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { ListGroup, ListGroupItem, FormControl } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButton";
import LessonControlButtons from "./LessonControlButtons";

interface Lesson {
  _id: string;
  name: string;
  description: string;
  module: string;
}

interface Module {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons?: Lesson[];
  editing?: boolean;
}

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const dispatch = useDispatch<AppDispatch>();

  const [moduleName, setModuleName] = useState("");

  const modules = useSelector(
    (state: RootState) => state.moduleReducer.modules
  );

  return (
    <div className="wd-modules">
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={() => {
          dispatch(
            addModule({ name: moduleName, course: cid || "", description: "" })
          );
          setModuleName("");
        }}
      />

      <br />
      <br />
      <br />

      <ListGroup id="wd-modules" className="rounded-0">
        {modules
          .filter((module) => module.course === cid)
          .map((module) => (
            <ListGroupItem
              key={module._id}
              className="wd-module p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />

                {!module.editing && module.name}

                {module.editing && (
                  <FormControl
                    className="w-50 d-inline-block"
                    onChange={(e) =>
                      dispatch(
                        updateModule({ ...module, name: e.target.value })
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        dispatch(updateModule({ ...module, editing: false }));
                      }
                    }}
                    defaultValue={module.name}
                  />
                )}

                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => dispatch(deleteModule(moduleId))}
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />
              </div>

              {module.description && (
                <div className="wd-description p-3 ps-2">
                  {module.description}
                </div>
              )}

              {module.lessons && module.lessons.length > 0 && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson) => (
                    <ListGroupItem
                      key={lesson._id}
                      className="wd-lesson p-3 ps-1"
                    >
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name}
                      <LessonControlButtons />
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
