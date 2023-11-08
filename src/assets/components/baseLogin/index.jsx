import frameLogo from "../../imgs/login/framelogoCortada.png";
import fotoGarota from "../../imgs/login/garotacartaoCortada.png";

import PropTypes from 'prop-types';

function BaseLogin({ children }) {
  return (
    <div className="contentLogin">
      <div className="areaLogin">
        <img src={frameLogo} alt="" />
        {children}
      </div>
      <div className="imgLogin">
        <img src={fotoGarota} alt="" />
      </div>
    </div>
  );
}

BaseLogin.propTypes = {
  children: PropTypes.node,
};

export default BaseLogin;
