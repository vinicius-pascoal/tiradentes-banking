import propaganda from "../../assets/imgs/academico/propaganda.webp";

export default function academico() {
  return (
    <div className="financeScream">
      <div className="financeBox h-max">
        <h2>Opções de financiamento e descontos</h2>
        <div className="flex justify-center">
          <img src={propaganda} alt="" srcset="" />
        </div>
      </div>
      <div className="financeBox h-max">
        <h2>Suas mensalidades</h2>
        <ul className="listaMensalidaes">
          <li>
            <span>Parcela 1 </span>
            <p>Valor: R$ 1.000,00</p>
          </li>
          <li>
            <span>Parcela 2 </span>
            <p>Valor: R$ 1.000,00</p>
          </li>
          <li>
            <span>Parcela 3 </span>
            <p>valor: R$ 1.000,00</p>
          </li>
          <li>
            <span>Parcela 4 </span>
            <p>Valor: R$ 1.000,00</p>
          </li>
          <li>
            <span>Parcela 5 </span>
            <p>Valor: R$ 1.000,00</p>
          </li>
          <li>
            <span>Parcela 6 </span>
            <p>Valor: R$ 1.000,00</p>
          </li>
          <li>
            <span>Parcela 7 </span>
            <p>Valor: R$ 1.000,00</p>
          </li>
          <li>
            <span>Parcela 8 </span>
            <p>Valor: R$ 1.000,00</p>
          </li>
          <li>
            <span>Parcela 9 </span>
            <p>Valor: R$ 1.000,00</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
