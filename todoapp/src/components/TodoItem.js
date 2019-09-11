import React from "react";

const TodoItem = props => {
  return (
    <div>
      <div className="todoItem">{props.data.item}</div>
    </div>
  );
};

export default TodoItem;
