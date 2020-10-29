import React from 'react';

const Form = ({ todos, setTodos}) => {

const submitTodoHandler = (e)=>{
    e.preventDefault();
    setTodos([...todos, {key: Math.random() * 1000}]);
    // setInputText("");
};

return (
    <div>
      <form>
          <button onClick={submitTodoHandler} type="submit">Create</button>        
      </form>
    </div>
  );
};

export default Form;
