import React from 'react';
import BaseLogin from "../../assets/components/baseLogin";
import { InputMask } from '@react-input/mask';


function CriarConta() {
  // const [cpf, setCpf] = React.useState('')
  
  return (
    <>
      <BaseLogin>
        <form className="formularioLogin">
          <InputMask mask="___.___.___-__" 
            replacement={{ _: /\d/ }}
            placeholder="Insira seu CPF"
            // onChange={(e) => setCpf(e.target.value)}
            />
            <input type="text" placeholder="Insira sua senha" />
            <button>Criar Conta</button>
        </form>
      </BaseLogin>
    </>
  );
}

export default CriarConta;
