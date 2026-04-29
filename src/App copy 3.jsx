import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

import "./App.css";

 function App() {
  const student={
    name: "홍길동",
    age: 20,
    gender: "male"
  }
  return (
<h1>학생정보</h1>
<hr/>
<p>{student}</p>
  )
}
