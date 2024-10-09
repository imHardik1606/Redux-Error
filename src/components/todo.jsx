import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, markAsDone } from "../app/Features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();

  const clickHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const doneHandler = (id) => {
    dispatch(markAsDone(id));
  };

  return (
    <>
      <AddForm />
      <h3>Todo List App</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={todo.isDone?{textDecoration: 'line-through'}:null}>
            {todo.task}
            <button onClick={() => clickHandler(todo.id)}>Delete</button>
            <button onClick={() => doneHandler(todo.id)}>Mark as Done</button>
          </li>
        ))}
      </ul>
    </>
  );
}
