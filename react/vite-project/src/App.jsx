import React, { useState, useMemo, memo } from "react";

const App = () => {
  const [count, setCount] = React.useState(0);
  const [items, setItems] = React.useState([1, 2, 3]);

  // useMemo 사용: items 합계 계산
  // items가 바뀔 때만 계산하고, 그렇지 않으면 이전 계산값 재사용
  const total = useMemo(() => items.reduce((a, b) => a + b, 0), [items]);

  return (
    <div>
      <h1>Total: {total}</h1> {/* 계산된 total 출력 */}
      <Child count={count} /> {/* Child 컴포넌트에 count 전달 */}
      <button onClick={() => setCount((c) => c + 1)}>
        Increase Count
      </button>{" "}
      {/* 버튼 클릭 시 count 증가 → App 재렌더링 */}
    </div>
  );
};

// Child 컴포넌트
// memo로 감싸서 props(count)가 바뀌지 않으면 재렌더링 안 함
const Child = memo(({ count }) => {
  console.log("Child 렌더링");
  return <div>Child Count: {count}</div>;
});

export default App;
