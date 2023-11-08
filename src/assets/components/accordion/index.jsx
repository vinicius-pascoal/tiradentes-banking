import React, { useState } from "react";

import PropTypes from 'prop-types';

const Accordion = ({ conteudo, title }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="accordion">
      <button onClick={() => setIsExpanded(!isExpanded)}>
        <h2>{title}</h2>
      </button>
      <div style={isExpanded ? { display: "block" } : { display: "none" }}>
        <p>{conteudo}</p>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  conteudo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Accordion;
