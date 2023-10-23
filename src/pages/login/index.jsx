import frameLogo from "../../assets/imgs/login/framelogoCortada.png";
import fotoGarota from "../../assets/imgs/login/garotacartaoCortada.png";

function Login() {
  return (
    <>
      <div class="contentLogin">
        <div class="areaLogin">
          <img src={frameLogo} alt="" />
          <form class="formularioLogin">
            <input type="text" placeholder="insira seu CPF" />
            <input type="text" placeholder="insira sua senha" />
            <button>Logar</button>
          </form>
        </div>
        <div class="imgLogin">
          <img src={fotoGarota} />
        </div>
      </div>
    </>
  );
}

export default Login;
