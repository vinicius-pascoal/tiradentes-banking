import BaseLogin from "../../assets/components/baseLogin";
import { useNavigate, Link } from "react-router-dom";
import { InputMask } from '@react-input/mask';

export default function RecuperarConta() {
  const goTo = useNavigate();

  return (
    <BaseLogin>
      <form className="formularioLogin">
        <InputMask mask="___.___.___-__"
          replacement={{ _: /\d/ }}
          placeholder="insira seu CPF"/>
        {/* <input type="text" placeholder="insira seu CPF" /> */}
        <button onClick={goTo("/")}>recuperar senha</button>
      </form>
    </BaseLogin>
  );
}
