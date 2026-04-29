import React, { useState, useEffect } from "react";

function App2() {
  const [counter, setCounter] = useState(0);

  const onclick = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    console.log("화면이 렌더링되었습니다");
    return () => {
      console.log("화면이 제거되었습니다");
    };
  }, []);

  useEffect(() => {
    console.log("화면이 업데이트되었습니다");
  }, [counter]);

  return (
    <>
      <h1>React Functional Component</h1>
      <hr />
      <p>{counter}</p>
      <button onClick={onclick}>click</button>
    </>
  );
}

export default App2;
