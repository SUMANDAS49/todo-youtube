import React from 'react';
import Todo from './Todo';

const TodoList = ({todos}) => {

  return (
    <div>
      <ul>
          ul TodoList.js Start
        {todos.map(()=>(<Todo />))}
          ul TodoList.js End
      </ul>
    </div>
  );
};

export default TodoList;
