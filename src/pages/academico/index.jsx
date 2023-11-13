import propaganda from "../../assets/imgs/academico/propaganda.webp";

export default function academico() {
  return (
    <div className="financeScream">
      <div className="financeBox h-max">
        <h2>financiamento de cursos e descontos</h2>
        <div className="flex justify-center">
          <img src={propaganda} alt="" srcset="" />
        </div>
      </div>
      <div className="financeBox h-max">
        <h2>suas mensalidades</h2>
        <ul className="listaMensalidaes">
          <li>
            <span>parcela 1 </span>
            <p>valor: R$ 1.000,00</p>
          </li>
          <li>
            <span>parcela 2 </span>
            <p>valor: R$ 1.000,00</p>
          </li>
          <li>
            <span>parcela 3 </span>
            <p>valor: R$ 1.000,00</p>
          </li>
          <li>
            <span>parcela 4 </span>
            <p>valor: R$ 1.000,00</p>
          </li>
          <li>
            <span>parcela 4 </span>
            <p>valor: R$ 1.000,00</p>
          </li>
          <li>
            <span>parcela 4 </span>
            <p>valor: R$ 1.000,00</p>
          </li>
          <li>
            <span>parcela 4 </span>
            <p>valor: R$ 1.000,00</p>
          </li>
          <li>
            <span>parcela 4 </span>
            <p>valor: R$ 1.000,00</p>
          </li>
          <li>
            <span>parcela 4 </span>
            <p>valor: R$ 1.000,00</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
