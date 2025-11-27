"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../../store";
import { setModules, editModule, updateModule } from "./reducer";
import { ListGroup, ListGroupItem, FormControl } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButton";
import LessonControlButtons from "./LessonControlButtons";
import * as client from "../../client";

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
  editing?: boolean;
}

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const [moduleName, setModuleName] = useState("");

  const modules = useSelector(
    (state: RootState) => state.moduleReducer.modules
  );

  const fetchModules = useCallback(async () => {
    const modules = await client.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  }, [cid, dispatch]);

  useEffect(() => {
    fetchModules();
  }, [fetchModules]);

  const onCreateModuleForCourse = async () => {
    if (!cid) return;
    const newModule = {
      name: moduleName,
      course: cid,
    };
    const createdModule = await client.createModuleForCourse(cid, newModule);
    dispatch(setModules([...modules, createdModule]));
    setModuleName("");
  };

  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(cid as string, moduleId);
    dispatch(setModules(modules.filter((m) => m._id !== moduleId)));
  };

  const onUpdateModule = async (module: Module) => {
    await client.updateModule(module);
    const newModules = modules.map((m) => (m._id === module._id ? module : m));
    dispatch(setModules(newModules));
  };

  return (
    <div className="wd-modules">
      <ModulesControls
        setModuleName={setModuleName}
        moduleName={moduleName}
        addModule={onCreateModuleForCourse}
      />

      <br />
      <br />
      <br />

      <ListGroup id="wd-modules" className="rounded-0">
        {modules.map((module: Module) => (
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
                  defaultValue={module.name}
                  onChange={(e) =>
                    dispatch(updateModule({ ...module, name: e.target.value }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      onUpdateModule({ ...module, editing: false });
                    }
                  }}
                />
              )}

              <ModuleControlButtons
                moduleId={module._id}
                deleteModule={(moduleId) => onRemoveModule(moduleId)}
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
                {module.lessons.map((lesson: Lesson) => (
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
