import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ModalPixConfirm({
  show,
  onCancel,
  onConfirm,
  valor,
  pessoa,
}) {
  return (
    <Modal show={show} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Confirma?</Modal.Title>
      </Modal.Header>
      <Modal.Body className="h-60">
        <h3>para:</h3>
        <h5>{pessoa}</h5>
        <h3>Valor:</h3>
        <h5>{valor}</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={onConfirm}>
          Confirmar
        </Button>
        <Button variant="secondary" onClick={onCancel}>
          Sair
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

ModalPixConfirm.propTypes = {
  show: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};
