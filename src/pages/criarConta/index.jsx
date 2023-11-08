import BaseLogin from "../../assets/components/baseLogin";

function CriarConta() {
  return (
    <BaseLogin>
      <form className="formularioLogin">
        <input type="text" placeholder="insira seu CPF" />
        <input type="text" placeholder="insira sua senha" />
        <button>criar conta</button>
      </form>
    </BaseLogin>
  );
}

export default CriarConta;
