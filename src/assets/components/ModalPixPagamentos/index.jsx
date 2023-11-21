import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import ModalPixConfirm from "../ModalPixConfirm";

export default function ModalPixPagamentos() {
  const [show, setShow] = useState(false);
  const [valor, setValor] = useState("0");
  const [pessoa, setPessoa] = useState(" ");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [awaitConfirm, setAwaitConfirm] = useState(false);

  const callConfirm = () => {
    setAwaitConfirm(true);
  };

  const handleConfirm = () => {
    setAwaitConfirm(false);
    handleClose();
  };

  const handleCancel = () => {
    setAwaitConfirm(false);
    handleClose();
  };

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
              <Form.Control
                onChange={(e) => {
                  setPessoa(e.target.value);
                }}
                type="text"
                placeholder="***.***.***."
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Valor</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setValor(e.target.value);
                }}
                autoFocus
              />
            </Form.Group>
          </Form>
          <ModalPixConfirm
            pessoa={pessoa}
            valor={valor}
            show={awaitConfirm}
            onCancel={handleCancel}
            onConfirm={handleConfirm}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Sair
          </Button>
          <Button variant="primary" onClick={callConfirm}>
            Pagar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
