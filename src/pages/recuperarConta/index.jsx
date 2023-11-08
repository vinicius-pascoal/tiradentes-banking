import BaseLogin from "../../assets/components/baseLogin";

export default function RecuperarConta() {
  return (
    <BaseLogin>
      <form className="formularioLogin">
        <input type="text" placeholder="insira seu CPF" />
        <button>recuperar senha</button>
      </form>
    </BaseLogin>
  );
}
