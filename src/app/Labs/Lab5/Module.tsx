"use client";

import React, { useState } from "react";
import { FormControl } from "react-bootstrap";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function WorkingWithModule() {
  const [module, setModule] = useState({
    id: "CS101",
    name: "Introduction to Computer Science",
    description: "Learn the fundamentals of programming",
    course: "Computer Science",
  });

  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-module">
      <h3>Working With Module Object</h3>

      {/* RETRIEVING MODULE */}
      <h4>Retrieving Module</h4>
      <a
        id="wd-retrieve-module"
        className="btn btn-primary m-2"
        href={`${MODULE_API_URL}`}
      >
        Get Module
      </a>
      <hr />

      {/* RETRIEVING MODULE NAME */}
      <h4>Retrieving Module Name</h4>
      <a
        id="wd-retrieve-module-name"
        className="btn btn-primary m-2"
        href={`${MODULE_API_URL}/name`}
      >
        Get Module Name
      </a>
      <hr />

      {/* MODIFYING MODULE NAME */}
      <h4>Modifying Module Name</h4>
      <a
        id="wd-update-module-name"
        className="btn btn-primary float-end"
        href={`${MODULE_API_URL}/name/${module.name}`}
      >
        Update Module Name
      </a>
      <FormControl
        className="w-75 mb-2"
        id="wd-module-name"
        defaultValue={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <hr />

      {/* MODIFYING MODULE DESCRIPTION */}
      <h4>Modifying Module Description</h4>
      <a
        id="wd-update-module-description"
        className="btn btn-primary float-end"
        href={`${MODULE_API_URL}/description/${module.description}`}
      >
        Update Module Description
      </a>
      <FormControl
        className="w-75 mb-2"
        id="wd-module-description"
        as="textarea"
        rows={3}
        defaultValue={module.description}
        onChange={(e) => setModule({ ...module, description: e.target.value })}
      />
      <hr />
    </div>
  );
}
