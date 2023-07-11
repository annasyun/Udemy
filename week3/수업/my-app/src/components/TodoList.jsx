import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  // state 값으로 초기 값 설정한 건 처음에만 유효함!!!!
  // state 값이 변경되면 바로 렌더링됨!

  // const todos = [];
  // state 값이 아니면 push가 되도 렌더링이 새로 안됨!!
  // push해도 첫번째값만 바뀌는 이유는??? 새로고침 되면서 계속 빈배열로 todos값이 세팅되기 때문!!!!

  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    console.log(newTodo);
    setTodos([...todos, newTodo]);
    setNewTodo("");
    // state 값 중 원본 배열값은 변경하면 안됨! 스프레드 연산자 사용하기!
    // newTodos.push(newTodo);
    // push 연산자 대신 스프레드 연산자와 쉼표(,)를 통해서 새로운 값 넣기!
    // console.log(todos);
  };
  const handleNewTodoValue = (e) => {
    setNewTodo(e.target.value);
    console.log(newTodo);
  };

  //   const handleOnEnter = (e) => {
  //     if (e.key === "Enter") {
  //       handleAddTodo();
  //     }
  //   };

  //   useEffect(() => {}, [todos]);
  // state값 변경되면 자동으로 렌더링되기 때문에 useEffect 필요 없음

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodo();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>TodoList</h1>
        <label htmlFor="">todo:</label>
        <input
          type="text"
          placeholder="input todo"
          value={newTodo}
          onChange={handleNewTodoValue}
          //   onKeyUp={handleOnEnter}
        />
        <button type="button" onClick={handleAddTodo}>
          add
        </button>
      </form>
      <ul>
        {todos ? (
          todos.map((v, i) => {
            return <li key={i}>{v}</li>;
          })
        ) : (
          <p>할일을 추가해주세요!</p>
        )}
      </ul>
    </>
  );
};

export default TodoList;
