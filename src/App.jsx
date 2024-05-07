import "./App.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayValue(inputValue);
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter any value"
        />
        <br></br>
        <Button variant="primary" type="submit" onClick={handleShow}>
          Submit
        </Button>
      </form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Form Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>Display Data : {displayValue}</Modal.Body>
        {/* <Modal.Footer> */}
        {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        {/* </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default App;
