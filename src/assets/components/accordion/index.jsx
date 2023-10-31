import React, { useState } from "react";

const Accordion = ({conteudo,title}) => {
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

export default Accordion ;