import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Perfil = () => {
  const [nome, setNome] = useState("Nome do Usuário");
  const [email, setEmail] = useState("usuario@example.com");
  const [telefone, setTelefone] = useState("123456789");
  const [endereco, setEndereco] = useState("Rua Exemplo, 123");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "nome":
        setNome(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "telefone":
        setTelefone(value);
        break;
      case "endereco":
        setEndereco(value);
        break;
      default:
        break;
    }
  };

  const handleSave = () => {
    // Lógica para salvar os dados do perfil
    console.log("Dados do perfil salvos:", { nome, email, telefone, endereco });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Perfil</h1>
      <Form>
        <Form.Group controlId="formNome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control
            type="text"
            name="nome"
            value={nome}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formTelefone">
          <Form.Label>Telefone:</Form.Label>
          <Form.Control
            type="tel"
            name="telefone"
            value={telefone}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formEndereco">
          <Form.Label>Endereço:</Form.Label>
          <Form.Control
            as="textarea"
            name="endereco"
            value={endereco}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSave}>
          Salvar
        </Button>
      </Form>
    </div>
  );
};

export default Perfil;
