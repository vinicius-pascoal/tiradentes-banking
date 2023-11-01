import BaseLogin from "../../assets/components/baseLogin";
import React, { useState } from 'react';

export default function RecuperarConta() {
  return (
    <>
      <BaseLogin>
        <form className="formularioLogin">
        <input type="text" placeholder="Insira seu CPF (000 000 000-00)" mask="###.###.###-##" value="123.456.789-01" />
          <button>Recuperar Senha</button>
        </form>
      </BaseLogin>
    </>
  );
}
