import { Children } from "react";
import frameLogo from "../../imgs/login/framelogoCortada.png";
import fotoGarota from "../../imgs/login/garotacartaoCortada.png";

function BaseLogin() {
  return (
    <>
      <div class="contentLogin">
        <div class="areaLogin">
          <img src={frameLogo} alt="" />
        </div>
        <div class="imgLogin">
          <img src={fotoGarota} />
        </div>
      </div>
    </>
  );
}

export default BaseLogin;
