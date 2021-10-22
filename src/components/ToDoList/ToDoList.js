import React, { useState, useEffect } from "react";
import ToDo from "../ToDo/ToDo";
import Header from "../Header/Header";
import ToDoForm from "../ToDoForm/ToDoForm";
import { Container, ListGroup } from "react-bootstrap";

import "./ToDoList.css";

const ToDoList = () => {
  const localTodos = JSON.parse(localStorage.getItem("todos")) || [];

  const [todos, setTodos] = useState(localTodos);
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addToDo = (todo) => {
    setTodos([
      ...todos,
      {
        text: todo,
        completed: false,
        id: Date.now(),
      },
    ]);
  };

  return (
    <Container className={"mainContainer"}>
      <Header />
      <ToDoForm submitForm={addToDo} setInput={setInput} input={input} />
      <ListGroup />
      {todos.map((todo) => (
        <ToDo
          text={todo.text}
          completed={todo.completed}
          id={todo.id}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
      <ListGroup />
    </Container>
  );
};

export default ToDoList;
