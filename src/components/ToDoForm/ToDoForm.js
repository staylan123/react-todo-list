import React from 'react';
import { Form } from 'react-bootstrap';

import './ToDoForm.css'

const ToDoForm = ({ submitForm, input, setInput }) => {
  // Handle Text Input
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(input);
    setInput('');
    submitForm(input);
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Control
        className={'formInput'}
        type="text"
        placeholder="Enter ToDo..."
        required
        onChange={(e) => setInput(e.target.value)}
        value={input}
        maxLength="18"
      />
    </Form>
  );
};

export default ToDoForm;
