import EditModal from "../UI/EditModal";
import React, { useState, Fragment } from "react";
import { Button } from "react-bootstrap";

import "./ToDo.css";

const ToDo = ({ text, id, completed, todos, setTodos }) => {
  const [editingModal, setEditingModal] = useState(false);

  // Filters Array of todos, without the selected (removed) one
  const removeToDoHandler = () => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Checks for todo index coresponding to checkbox, will change its completed value to the opposite
  const completeToDoHandler = () => {
    const index = todos.findIndex((todo) => todo.id === id);
    todos[index].completed = !todos[index].completed;
    setTodos([...todos]);
  };

  // Enables for opening the edit modal
  const editToDoHandler = () => {
    setEditingModal(true);
  };

  return (
    <Fragment>
      <div className={'todoItemContainer'}>
        <input
          className={'checkBox'}
          type="checkbox"
          onClick={completeToDoHandler}
          checked={completed}
          onChange={() => {}}
        />
        <li className={!completed ? 'todoItem' : 'todoItem completedtodoItem'}>
          {text}
        </li>
        <span>
          <Button
            className={'todoButton'}
            varient="warning"
            size="sm"
            onClick={editToDoHandler}
          >
            <i className={"bi bi-wrench"}></i>
          </Button>
          <Button
            className={'todoButton'}
            variant="danger"
            size="sm"
            onClick={removeToDoHandler}
          >
            <i className={"bi bi-trash"}></i>
          </Button>
        </span>
      </div>
      <EditModal
        text={text}
        id={id}
        todos={todos}
        setTodos={setTodos}
        editingModal={editingModal}
        setEditingModal={setEditingModal}
      />
    </Fragment>
  );
};

export default ToDo;
