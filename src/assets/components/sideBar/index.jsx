import { Link } from "react-router-dom";

import logo from "../../imgs/dashboard/Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Sidebar() {
  return (
    <div className="sideBarFundo col-auto min-vh-100 d-flex flex-column align-items-center">
      <div className="text-decoration-none text-white d-flex align-items-center">
        <img
          src={logo}
          alt="Logo"
          className="img-fluid logoNav"
          style={{ maxWidth: "100px" }}
        />
      </div>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item text-white fs-4 d-flex align-items-center">
          <Link
            to="/dashboard"
            className="nav-link text-white fs-5"
            aria-current="page"
          >
            <i className="fs-4 bi bi-house"></i>
            <span className="ms-2">Dashboard</span>
          </Link>
        </li>

        <li className="nav-item text-white fs-4 d-flex align-items-center">
          <Link to="#" className="nav-link text-white fs-5" aria-current="page">
            <i className="fs-4 bi bi-credit-card"></i>
            <span className="ms-2">Cartão</span>
          </Link>
        </li>
        <li className="nav-item text-white fs-4 d-flex align-items-center">
          <Link to="/academico" className="nav-link text-white fs-5" aria-current="page">
            <i className="fs-4 bi bi-mortarboard"></i>
            <span className="ms-2">Acadêmico</span>
          </Link>
        </li>
        <li className="nav-item text-white fs-4 d-flex align-items-center">
          <Link to="#" className="nav-link text-white fs-5" aria-current="page">
            <i className="fs-4 bi bi-x-diamond-fill"></i>
            <span className="ms-2">Pix</span>
          </Link>
        </li>
        <li className="nav-item text-white fs-4 d-flex align-items-center">
          <Link to="/movimentacoes" className="nav-link text-white fs-5" aria-current="page">
            <i className="fs-4 bi bi-arrows-expand"></i>
            <span className="ms-2">Movimentações</span>
          </Link>
        </li>
        <li className="nav-item text-white fs-4 d-flex align-items-center">
          <Link to="/sac" className="nav-link text-white fs-5" aria-current="page">
            <i className="fs-4 bi bi-headset"></i>
            <span className="ms-2">Suporte</span>
          </Link>
        </li>
        <li className="nav-item text-white fs-4 d-flex align-items-center">
          <Link to="#" className="nav-link text-white fs-5" aria-current="page">
            <i className="fs-4 bi bi-gear"></i>
            <span className="ms-2">Configurações</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
