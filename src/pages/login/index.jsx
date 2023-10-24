import BaseLogin from "../../assets/components/baseLogin";

function Login() {
  return (
    <>
      <BaseLogin>
        <form class="formularioLogin">
          <input type="text" placeholder="insira seu CPF" />
          <input type="text" placeholder="insira sua senha" />
          <button>Logar</button>
        </form>
      </BaseLogin>
    </>
  );
}

export default Login;
