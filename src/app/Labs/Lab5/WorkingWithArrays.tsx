"use client";

import React, { useState } from "react";
import { FormControl } from "react-bootstrap";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function WorkingWithArrays() {
  const API = `${HTTP_SERVER}/lab5/todos`;
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>

      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="btn btn-primary m-2" href={API}>
        Get Todos
      </a>
      <hr />

      <h4>Retrieving an Item from an Array by ID</h4>
      <a
        id="wd-retrieve-todo-by-id"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}`}
      >
        Get Todo by ID
      </a>
      <FormControl
        id="wd-todo-id"
        defaultValue={todo.id}
        className="w-50 mb-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr />

      <h4>Filtering Array Items</h4>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary m-2"
        href={`${API}?completed=true`}
      >
        Get Completed Todos
      </a>
      <hr />

      <h4>Creating new Items in an Array</h4>
      <a
        id="wd-create-todo"
        className="btn btn-primary m-2"
        href={`${API}/create`}
      >
        Create Todo
      </a>
      <hr />

      <h4>Removing from an Array</h4>
      <a
        id="wd-remove-todo"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}/delete`}
      >
        Remove Todo with ID = {todo.id}
      </a>
      <FormControl
        defaultValue={todo.id}
        className="w-50 mb-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr />

      <h4>Updating an Item in an Array</h4>
      <a
        href={`${API}/${todo.id}/title/${todo.title}`}
        id="wd-update-todo-title"
        className="btn btn-primary float-end"
      >
        Update Title
      </a>
      <FormControl
        defaultValue={todo.id}
        className="w-25 float-start me-2 mb-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
        placeholder="ID"
      />
      <FormControl
        defaultValue={todo.title}
        className="w-50 float-start mb-2"
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        placeholder="Title"
      />
      <br />
      <br />
      <hr />

      <h4>Updating Todo Description</h4>
      <a
        href={`${API}/${todo.id}/description/${todo.description}`}
        id="wd-update-todo-description"
        className="btn btn-primary float-end"
      >
        Update Description
      </a>
      <FormControl
        defaultValue={todo.id}
        className="w-25 float-start me-2 mb-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
        placeholder="ID"
      />
      <FormControl
        defaultValue={todo.description}
        className="w-50 float-start mb-2"
        as="textarea"
        rows={2}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        placeholder="Description"
      />
      <br />
      <br />
      <hr />

      <h4>Updating Todo Completed Status</h4>
      <a
        href={`${API}/${todo.id}/completed/${todo.completed}`}
        id="wd-update-todo-completed"
        className="btn btn-primary float-end"
      >
        Update Completed
      </a>
      <FormControl
        defaultValue={todo.id}
        className="w-25 float-start me-2 mb-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
        placeholder="ID"
      />
      <input
        type="checkbox"
        checked={todo.completed}
        className="float-start mb-2 form-check-input"
        onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
        id="wd-todo-completed"
      />
      <label htmlFor="wd-todo-completed" className="float-start ms-2">
        Completed
      </label>
      <br />
      <br />
      <hr />
    </div>
  );
}
