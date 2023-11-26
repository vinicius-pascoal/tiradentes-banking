import BaseLogin from "../../assets/components/baseLogin";
import { useNavigate, Link } from "react-router-dom";

export default function RecuperarConta() {
  const goTo = useNavigate();

  return (
    <BaseLogin>
      <form className="formularioLogin">
        <input type="text" placeholder="insira seu CPF" />
        <button onClick={goTo("/")}>recuperar senha</button>
      </form>
    </BaseLogin>
  );
}
