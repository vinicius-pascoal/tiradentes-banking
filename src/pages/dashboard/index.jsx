import CreditCard from "../../assets/components/CreditCard";
import CircularProgress from "../../assets/components/CircularProgress";
import ModalPix from "../../assets/components/modalPix";
import ModalTed from "../../assets/components/modalTed";

import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex justify-around mt-56">
      <CreditCard />
      <div className="flex-col fle justify-between bg-white p-4 rounded-md w-max">
        <h1>Meu Cartão</h1>
        <div>
          <CircularProgress progress={68} />
        </div>
        <div className="flex-col flex justify-between">
          <div className="flex justify-between flex-col">
            <div>
              <div className="flex justify-between">
                <div>
                  <span>Limite disponivel</span>
                </div>
                <div>
                  <span>R$ 600,00</span>
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
            <div className="flex justify-between">
              <div className="flex justify-between">
                <div>
                  <ModalPix />
                </div>
                <div>
                  <Link
                    to="/movimentacoes"
                    className="nav-link"
                    aria-current="page"
                  >
                    <i className="fs-4 bi bi-arrows-expand"></i>
                  </Link>
                </div>
                <div>
                  <ModalTed />
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
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
