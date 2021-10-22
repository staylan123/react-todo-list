import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const EditModal = ({ id, todos, setTodos, editingModal, setEditingModal }) => {
  const [editText, setEditText] = useState("");

  // Allows for closing Modal with X, Backdrop and Cancel Button
  const closeModalHandler = () => {
    setEditingModal(false);
  };

  // Searches for specified Todo, and replaces old text with updated text
  const updateToDoHandler = () => {
    const index = todos.findIndex((todo) => todo.id === id);
    todos[index].text = editText;
    setTodos([...todos]);
    setEditingModal(false);
  };

  return (
    <Modal show={editingModal} onHide={closeModalHandler}>
      <Modal.Header closeButton>
        <Modal.Title>Edit To Do</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <Form.Control
            type="text"
            maxLength="18"
            onChange={(e) => setEditText(e.target.value)}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModalHandler}>
          Cancel
        </Button>
        <Button variant="primary" onClick={updateToDoHandler}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
