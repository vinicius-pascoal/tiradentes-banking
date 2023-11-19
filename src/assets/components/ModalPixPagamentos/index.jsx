import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import ModalPixConfirm from "../ModalPixConfirm";

export default function ModalPixPagamentos() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [awaitConfirm, setAwaitConfirm] = useState(false);

  const handleConfirm = () => {
    setAwaitConfirm(false);
    handleClose();
  }

  const handleCancel = () => {
    setAwaitConfirm(false);
    handleClose();
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Pagar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pix</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Chave Pix</Form.Label>
              <Form.Control type="text" placeholder="***.***.***." autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Valor</Form.Label>
              <Form.Control type="text" autoFocus />
            </Form.Group>
          </Form>
          <ModalPixConfirm show={awaitConfirm} onCancel={handleCancel} onConfirm={handleConfirm} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Sair
          </Button>
          <Button variant="primary" onClick={() => setAwaitConfirm(true)}>
            Pagar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
