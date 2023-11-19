import CreditCard from "../../assets/components/CreditCard";
import CircularProgress from "../../assets/components/CircularProgress";
import ModalPix from "../../assets/components/ModalPix";
import ModalTed from "../../assets/components/modalTed";

import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex justify-center mt-56 bashboardResponsive">
      <CreditCard />
      <div className="flex bg-white p-4 rounded-xl w-fit mx-28  bashboardResponsive ">
        <div>
          <h1>Meu Cartão</h1>
          <div>
            <CircularProgress progress={68} />
          </div>
        </div>
        <div className="flex-col flex justify-around">
          <div className="ml-28 flex justify-between flex-col">
            <div>
              <div className="flex justify-between">
                <div>
                  <span className="font-bold">Saldo</span>
                </div>
                <div>
                  <span className="font-bold text-indigo-500">R$ 1600,00</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-bold">Limite disponível</span>
                </div>
                <div>
                  <span className="font-bold text-indigo-500">R$ 600,00</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span>Limite Total</span>
                </div>
                <div>
                  <span>R$ 1.800,00</span>
                </div>
              </div>
            </div>
            <div className=" mt-20 flex justify-between">
              <div className="flex justify-between">
                <div className="w-10 h-10">
                  <ModalPix tipo={"cartao"} />
                </div>
                <div className="w-10 h-10 justify-center flex ">
                  <Link
                    to="/movimentacoes"
                    className="nav-link"
                    aria-current="page"
                  >
                    <i className="fs-4 bi bi-arrows-expand"></i>
                  </Link>
                </div>
                <div className="w-10 h-10 ">
                  <ModalTed tipo={"cartao"} />
                </div>
              </div>
              <div className="ml-2">
                <p>Venc: 07/11</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
