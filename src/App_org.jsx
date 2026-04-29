import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const onchange = (e) => {
    setTodo(e.target.value);
  };
  const onsubmit = (e) => {
    e.preventDefault();
    setTodolist((prevArray) => [todo, ...prevArray]);
  };
  return (
    <>
      <h1>todo list</h1>
      <form>
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={todo}
          onChange={onchange}
        />
        <input type="submit" value="입력" />
      </form>
      <ul>
        {todolist.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </>
  );
}
