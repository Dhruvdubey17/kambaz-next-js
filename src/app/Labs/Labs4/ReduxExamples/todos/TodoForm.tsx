import { Button, FormControl, ListGroupItem } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo as setTodoAction } from "./todosReducer";

interface Todo {
  id?: string;
  title: string;
  completed?: boolean;
}

interface TodosState {
  todo: Todo;
  todos?: Todo[];
}

interface RootState {
  todosReducer: TodosState;
}

export default function TodoForm() {
  const { todo } = useSelector((state: RootState) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <ListGroupItem>
      <Button onClick={() => dispatch(addTodo(todo))}>Add</Button>
      <Button onClick={() => dispatch(updateTodo(todo))}>Update</Button>
      <FormControl
        value={todo.title}
        onChange={(e) =>
          dispatch(setTodoAction({ ...todo, title: e.target.value }))
        }
      />
    </ListGroupItem>
  );
}
