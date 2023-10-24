import BaseLogin from "../../assets/components/baseLogin";

function Login() {
  return (
    <>
      <BaseLogin>
        <form className="formularioLogin">
          <input type="text" placeholder="insira seu CPF" />
          <input type="text" placeholder="insira sua senha" />
          <button>Logar</button>
          <div className="loginLinks">
            <a href="/criarConta">criar conta</a>
            <a href="/RecuperarConta">Recuperar senha</a>
          </div>
        </form>
      </BaseLogin>
    </>
  );
}

export default Login;
