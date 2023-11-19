import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ModalPixPagamentos from "../mMdalPixPagamentos";
import ModalPixReceber from "../modalPixReceber";

export default function modalPix({ tipo }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {tipo === "cartao" ? (
        <Button variant="" onClick={handleShow}>
          <i className="fs-4 bi bi-x-diamond-fill"></i>
        </Button>
      ) : (
        <li className="nav-item text-white fs-4 d-flex align-items-center">
          <Button className="nav-link text-white fs-5" variant="" onClick={handleShow}>
            <i className="fs-4 bi bi-x-diamond-fill"></i>
            <span className="ms-2">Pix</span>
          </Button>
        </li>
      )}

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
