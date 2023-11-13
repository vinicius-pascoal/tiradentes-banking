import PropTypes from "prop-types";
import { useState } from "react";

import olhoFechado from "../../imgs/dashboard/olhoFechado.png";
import olhoAberto from "../../imgs/dashboard/olhoAberto.png";

const CreditCard = ({
  number = "**** **** **** ****",
  expiration = "**/**",
  cvv = "***",
}) => {
  const [showValues, setShowValues] = useState(true);

  const toggleShowValues = () => {
    setShowValues(!showValues);
  };

  return (
    <div className="fundoCartao relative w-80 h-48 bg-cover bg-center bgi rounded-lg shadow-md overflow-hidden">
      <div className="absolute top-4 left-4 text-white text-lg font-medium">
        {showValues ? number : "0000 0000 0000 0000"}
      </div>
      <div className="absolute bottom-10 left-4 text-white text-sm">
        <h6>Vinicius maynard</h6>
      </div>
      <div className="absolute bottom-4 left-4 text-white text-sm">
        {showValues ? expiration : "01/29"}
      </div>
      <div className="absolute bottom-4 right-4 text-white text-sm">
        {showValues ? cvv : "656"}
      </div>
      <button
        type="button"
        className="absolute top-4 right-4 text-white"
        onClick={toggleShowValues}
      >
        {showValues ? (
          <img src={olhoFechado} alt="olho fechado" />
        ) : (
          <img src={olhoAberto} alt="olho aberto" />
        )}
      </button>
    </div>
  );
};

CreditCard.propTypes = {
  number: PropTypes.string,
  expiration: PropTypes.string,
  cvv: PropTypes.string,
};

export default CreditCard;
