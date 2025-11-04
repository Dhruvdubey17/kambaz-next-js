"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { Button, ListGroupItem } from "react-bootstrap";
import { deleteTodo, setTodo } from "./todosReducer";

interface Todo {
  id: string;
  title: string;
}

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useDispatch();

  return (
    <ListGroupItem key={todo.id}>
      <Button
        onClick={() => dispatch(setTodo(todo))}
        id="wd-set-todo-click"
        className="me-2"
      >
        Edit
      </Button>
      <Button
        onClick={() => dispatch(deleteTodo(todo.id))}
        id="wd-delete-todo-click"
        className="me-2 bg-danger"
      >
        Delete
      </Button>
      {todo.title}
    </ListGroupItem>
  );
}
