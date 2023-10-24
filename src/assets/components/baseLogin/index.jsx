import frameLogo from "../../imgs/login/framelogoCortada.png";
import fotoGarota from "../../imgs/login/garotacartaoCortada.png";

function BaseLogin({ children }) {
  return (
    <>
      <div className="contentLogin">
        <div className="areaLogin">
          <img src={frameLogo} alt="" />
          {children}
        </div>
        <div className="imgLogin">
          <img src={fotoGarota} />
        </div>
      </div>
    </>
  );
}

export default BaseLogin;
