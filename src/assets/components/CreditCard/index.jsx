
import PropTypes from 'prop-types';
import { useState } from 'react';

const CreditCard = ({ number = '**** **** **** ****', expiration = '**/**', cvv = '***' }) => {
  const [showValues, setShowValues] = useState(false);

  const toggleShowValues = () => {
    setShowValues(!showValues);
  };

  return (
    <div className="relative w-80 h-48 bg-cover bg-center rounded-lg shadow-md overflow-hidden">
      <div className="absolute top-4 left-4 text-white text-lg font-medium">
        {showValues ? number : '**** **** **** ****'}
      </div>
      <div className="absolute bottom-4 left-4 text-white text-sm">
        {showValues ? expiration : '**/**'}
      </div>
      <div className="absolute bottom-4 right-4 text-white text-sm">
        {showValues ? cvv : '***'}
      </div>
      <button
        type="button"
        className="absolute top-4 right-4 text-white"
        onClick={toggleShowValues}
      >
        {showValues ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm1-6a1 1 0 01-2 0V8a1 1 0 012 0v2z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-6a1 1 0 012 0v2a1 1 0 01-2 0v-2zM9 6a1 1 0 012 0v2a1 1 0 01-2 0V6zm-1 4a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
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
