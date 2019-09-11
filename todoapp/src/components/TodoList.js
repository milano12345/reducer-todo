import React, { useState, useReducer } from "react";
import { reducer, initalState } from "../reducers/reducers";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState("");

  const [state, dispatch] = useReducer(reducer, initalState);

  const changeHandler = e => {
    setTodos(e.target.value);
  };

  const addItem = e => {
    e.preventDefault();
    const newItem = {
      text: todos,
      id: Date.now(),
      completed: false
    };
    const action = {
      type: "ADD_ITEM",
      payload: newItem
    };
    dispatch(action);

    console.log(state.items);
  };

  return (
    <div className="todoListMain">
      <div className="header">
        <form onSubmit={addItem}>
          <input
            onChange={changeHandler}
            value={todos}
            placeholder="enter task"
          ></input>
          <button type="submit">add</button>
        </form>
        <div className="tasks">
          <TodoItem entries={state.items} />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
