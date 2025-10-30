import React, { useState } from "react";
import { ListGroup, Button, FormControl } from "react-bootstrap";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
type Todo = { id: string; title: string };

const TodoForm: React.FC<{
  todo: Todo;
  setTodo: React.Dispatch<React.SetStateAction<Todo>>;
  addTodo: (newTodo: Todo) => void;
  updateTodo: (updatedTodo: Todo) => void;
}> = ({ todo, setTodo, addTodo, updateTodo }) => {
  return (
    <ListGroup.Item>
      <FormControl
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <Button onClick={() => addTodo(todo)} id="wd-add-todo-click">
        {" "}
        Add{" "}
      </Button>
      <Button onClick={() => updateTodo(todo)} id="wd-update-todo-click">
        {" "}
        Update{" "}
      </Button>
    </ListGroup.Item>
  );
};
export default function TodoList() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" },
  ]);
  const [todo, setTodo] = useState<Todo>({ id: "-1", title: "Learn Mongo" });
  const addTodo = (newTodo: Todo) => {
    const newTodos = [
      ...todos,
      { ...newTodo, id: new Date().getTime().toString() },
    ];
    setTodos(newTodos);
    setTodo({ id: "-1", title: "" });
  };
  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((t) => t.id !== id);
    setTodos(newTodos);
  };
  const updateTodo = (updatedTodo: Todo) => {
    const newTodos = todos.map((item) =>
      item.id === updatedTodo.id ? updatedTodo : item
    );
    setTodos(newTodos);
    setTodo({ id: "-1", title: "" });
  };
  return (
    <div>
      <h2>Todo List</h2>
      <ListGroup>
        <TodoForm
          todo={todo}
          setTodo={setTodo}
          addTodo={addTodo}
          updateTodo={updateTodo}
        />
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            setTodo={setTodo}
          />
        ))}
      </ListGroup>
      <ListGroup>
        <ListGroup.Item>
          <Button onClick={() => addTodo(todo)} id="wd-add-todo-click">
            {" "}
            Add{" "}
          </Button>
          <Button onClick={() => updateTodo(todo)} id="wd-update-todo-click">
            {" "}
            Update{" "}
          </Button>
          <FormControl
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          />
        </ListGroup.Item>
        {todos.map((todo) => (
          <ListGroup.Item key={todo.id}>
            <Button
              onClick={() => deleteTodo(todo.id)}
              id="wd-delete-todo-click"
            >
              {" "}
              Delete{" "}
            </Button>
            <Button onClick={() => setTodo(todo)} id="wd-set-todo-click">
              {" "}
              Edit{" "}
            </Button>
            {todo.title}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}
