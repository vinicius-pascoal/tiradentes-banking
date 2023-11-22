import propaganda from "../../assets/imgs/academico/propaganda.webp";

export default function academico() {
  return (
    <div className="financeScream bashboardResponsive mt-20">
      <div className="financeBox h-max">
        <h2>Opções de financiamento e descontos</h2>
        <div className="flex justify-center">
          <img src={propaganda} alt="" />
        </div>
      </div>
      <div className="financeBox h-max">
        <h2>Suas mensalidades</h2>
        <ul className="listaMensalidaes">
          <li>
            <span>Parcela 1 </span>
            <p>Valor: R$ 1.000,00</p>
            <p className="text-red-600">Validade: 31/1 </p>
          </li>
          <li>
            <span>Parcela 2 </span>
            <p>Valor: R$ 1.000,00</p>
            <p className="text-orange-500">Validade: 31/2 </p>
          </li>
          <hr />
          <li>
            <span>Parcela 3 </span>
            <p>valor: R$ 1.000,00</p>
            <p className="text-green-500">Validade: 31/3 </p>
          </li>
          <li>
            <span>Parcela 4 </span>
            <p>Valor: R$ 1.000,00</p>
            <p className="text-green-500">Validade: 31/4 </p>
          </li>
          <li>
            <span>Parcela 5 </span>
            <p>Valor: R$ 1.000,00</p>
            <p className="text-green-500">Validade: 31/5 </p>
          </li>
          <li>
            <span>Parcela 6 </span>
            <p>Valor: R$ 1.000,00</p>
            <p className="text-green-500">Validade: 31/6 </p>
          </li>
          <li>
            <span>Parcela 7 </span>
            <p>Valor: R$ 1.000,00</p>
            <p className="text-green-500">Validade: 31/6 </p>
          </li>
          <li>
            <span>Parcela 8 </span>
            <p>Valor: R$ 1.000,00</p>
            <p className="text-green-500">Validade: 31/7 </p>
          </li>
          <li>
            <span>Parcela 9 </span>
            <p>Valor: R$ 1.000,00</p>
            <p className="text-green-500">Validade: 31/8 </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
