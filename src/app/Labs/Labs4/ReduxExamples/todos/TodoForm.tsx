"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListGroupItem, Button, FormControl } from "react-bootstrap";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

interface Todo {
  id: string;
  title: string;
}

interface TodosState {
  todos: Todo[];
  todo: Todo;
}

export default function TodoForm() {
  const dispatch = useDispatch();

  const todo = useSelector(
    (state: { todosReducer: TodosState }) => state.todosReducer.todo
  );

  return (
    <ListGroupItem>
      <Button
        onClick={() => dispatch(updateTodo(todo))}
        id="wd-update-todo-click"
        className="me-2 bg-warning"
      >
        Update
      </Button>
      <Button
        onClick={() => dispatch(addTodo(todo))}
        id="wd-add-todo-click"
        className="me-2 bg-success"
      >
        Add
      </Button>
      <FormControl
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />
    </ListGroupItem>
  );
}
