import React, { useState } from "react";

function App() {
  const [newtodo, setNewtodo] = useState("");
  const [todos, setTodos] = useState(["리액트 공부하기", "아침 운동하기"]);
  const [좋아요수, 좋아요수변경] = useState([0, 0]);

  return (
    <div>
      <input
        value={newtodo}
        onChange={(e) => {
          setNewtodo(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          const newTodos = [...todos, newtodo];
          setTodos(newTodos);
          setNewtodo("");
          좋아요수변경([...좋아요수, 0]);
        }}
      >
        추가
      </button>
      {todos.map((할일, 할일인덱스) => {
        return (
          <>
            <div>
              {할일인덱스} {할일}
            </div>
            <button
              onClick={() => {
                const 업데이트좋아요 = [...좋아요수];
                업데이트좋아요[할일인덱스] += 1;
                좋아요수변경(업데이트좋아요);
              }}
            >
              좋아요{좋아요수[할일인덱스]}
            </button>
            <button
              onClick={() => {
                const 삭제후배열 = todos.filter((todo, index) => {
                  return index !== 할일인덱스;
                });
                setTodos(삭제후배열);
              }}
            >
              삭제
            </button>
          </>
        );
      })}
    </div>
  );
}

export default App;
