import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ModalPixPagamentos from "../modalPixPagamentos";
import ModalPixReceber from "../modalPixReceber";

export default function modalPix({ children }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="" onClick={handleShow}>
        <i className="fs-4 bi bi-x-diamond-fill"></i>
        {children ? { children } : ""}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pix</Modal.Title>
        </Modal.Header>
        <Modal.Body className="flex justify-around">
          <ModalPixPagamentos />
          <ModalPixReceber />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Sair
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
