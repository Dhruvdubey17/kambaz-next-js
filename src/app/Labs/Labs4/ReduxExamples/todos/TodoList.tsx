"use client";

import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos } = useSelector(
    (state: { todosReducer: { todos: { id: string; title: string }[] } }) =>
      state.todosReducer
  );

  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ListGroup>
        <TodoForm />
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}
