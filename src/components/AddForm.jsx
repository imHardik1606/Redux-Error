import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../app/Features/todo/todoSlice";

export default function AddForm() {
  let [task, setTask] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (evt) => {
    evt.preventDefault();
    console.log(task);
    dispatch(addTodo(task)); //reducers -> state & action obj
    setTask("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" onChange={(e) => setTask(e.target.value)} />
      <button>Add Task</button>
    </form>
  );
}
