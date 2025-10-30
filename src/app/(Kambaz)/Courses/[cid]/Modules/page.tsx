"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import ModulesControls from "./ModulesControls";
import { ListGroup, ListGroupItem, FormControl } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButton";
import LessonControlButtons from "./LessonControlButtons";
import { v4 as uuidv4 } from "uuid";

interface Lesson {
  _id: string;
  name: string;
  description?: string;
  module: string;
}

interface ModuleWithEditing {
  _id: string;
  name: string;
  description?: string;
  course: string;
  editing?: boolean;
  lessons?: Lesson[];
}

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const [modules, setModules] = useState<ModuleWithEditing[]>(db.modules);
  const [moduleName, setModuleName] = useState("");

  const addModule = () => {
    setModules([
      ...modules,
      {
        _id: uuidv4(),
        name: moduleName,
        course: cid || "",
        lessons: [],
      },
    ]);
    setModuleName("");
  };

  const deleteModule = (moduleId: string) => {
    setModules(modules.filter((m) => m._id !== moduleId));
  };

  const editModule = (moduleId: string) => {
    setModules(
      modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m))
    );
  };

  const updateModule = (module: ModuleWithEditing) => {
    setModules(modules.map((m) => (m._id === module._id ? module : m)));
  };

  return (
    <div>
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}
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
                      updateModule({ ...module, name: e.target.value })
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        updateModule({ ...module, editing: false });
                      }
                    }}
                    defaultValue={module.name}
                  />
                )}
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={deleteModule}
                  editModule={editModule}
                />
              </div>
              {module.description && (
                <div className="wd-description p-3 ps-2">
                  {module.description}
                </div>
              )}
              {module.lessons && (
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
