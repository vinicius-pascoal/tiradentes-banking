import React, { useState } from "react";
import Accordion from "../../assets/components/accordion";


const Sac = () => {
  const [items, setItems] = useState([
    {
      title: "Item 1",
      content: "Este é o conteúdo do item 1.",
    },
    {
      title: "Item 2",
      content: "Este é o conteúdo do item 2.",
    },
  ]);

  return (
    <div>
      {items.map((item) => (
        <Accordion key={item.title} title={item.title} conteudo = {item.content} />
      ))}
    </div>
  );
};

export default Sac;