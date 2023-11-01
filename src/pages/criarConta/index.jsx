import React, { useState } from 'react';
import BaseLogin from "../../assets/components/baseLogin";
import InputMask from 'react-input-mask';
import { useForm, Controller } from "react-hook-form";

function CriarConta() {
  const [cpf, setCpf] = React.useState('')
  const { register, handleSubmit, control } = useForm();
  
  return (
    <>
      <BaseLogin>
        <form className="formularioLogin">
          <input
              type="text"
              placeholder="Insira seu CPF (000 000 000-00)"
              mask="###.###.###-##"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
          />
          <Controller
            as={InputMask}
            control={control}
            mask="999.999.999-99"
            name="cpf"
          />
          <input type="text" placeholder="insira sua senha" />
          <button>criar conta</button>
        </form>
      </BaseLogin>
    </>
  );
}

export default CriarConta;
