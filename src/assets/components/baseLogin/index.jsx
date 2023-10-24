import { Children } from "react";
import frameLogo from "../../imgs/login/framelogoCortada.png";
import fotoGarota from "../../imgs/login/garotacartaoCortada.png";

function BaseLogin({ children }) {
  return (
    <>
      <div class="contentLogin">
        <div class="areaLogin">
          <img src={frameLogo} alt="" />
          {children}
        </div>
        <div class="imgLogin">
          <img src={fotoGarota} />
        </div>
      </div>
    </>
  );
}

export default BaseLogin;
