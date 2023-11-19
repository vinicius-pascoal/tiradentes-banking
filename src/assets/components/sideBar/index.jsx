import { Link } from "react-router-dom";

import logo from "../../imgs/dashboard/Logo.png";

import ModalPix from "../ModalPix";
import ModalTed from "../modalTed";

export default function Sidebar() {
  return (
    <div className="sideBarFundo col-auto min-vh-100 d-flex flex-column justify-between">
      <div className="text-decoration-none text-white d-flex align-items-center">
        <img
          src={logo}
          alt="Logo"
          className="img-fluid logoNav"
          style={{ maxWidth: "100px" }}
        />
      </div>
      <ul className="nav nav-pills flex-column flex-grow">
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
          <Link to="/perfil" className="nav-link text-white fs-5" aria-current="page">
            <i className="fs-4 bi bi-gear"></i>
            <span className="ms-2">Perfil</span>
          </Link>
        </li>
        <li className="nav-item text-white fs-4 d-flex align-items-center">
          <ModalTed />
        </li>
        <li className="nav-item text-white fs-4 d-flex align-items-center">
          <Link
            to="/movimentacoes"
            className="nav-link text-white fs-5"
            aria-current="page"
          >
            {/* <AiOutlineExpand className="fs-4" /> */}
            <span className="ms-2">Movimentações</span>
          </Link>
        </li>
        <li className="nav-item text-white fs-4 d-flex align-items-center">
          <Link to="/sac" className="nav-link text-white fs-5" aria-current="page">
            {/* <BiHeadset className="fs-4" /> */}
            <span className="ms-2">Suporte</span>
          </Link>
        </li>
        <li className="nav-item text-white fs-4 d-flex align-items-center">
          <Link
            to="/academico"
            className="nav-link text-white fs-5"
            aria-current="page"
          >
            {/* <BiMortarboard className="fs-4" /> */}
            <span className="ms-2">Acadêmico</span>
          </Link>
        </li>
        <li className="nav-item text-white fs-4 d-flex align-items-center">
          <ModalPix />
        </li>
      </ul>
    </div>
  );
}
