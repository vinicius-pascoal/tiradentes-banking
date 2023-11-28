import BaseLogin from "../../assets/components/baseLogin";
import { InputMask } from '@react-input/mask';

function CriarConta() {
  return (
    <BaseLogin>
      <form className="formularioLogin">
      <InputMask mask="___.___.___-__"
          replacement={{ _: /\d/ }}
          placeholder="Insira seu CPF"/>
        {/* <input type="text" placeholder="Insira seu CPF" /> */}
        <input type="text" placeholder="Insira sua senha" />
        <button>criar conta</button>
      </form>
    </BaseLogin>
  );
}

export default CriarConta;
