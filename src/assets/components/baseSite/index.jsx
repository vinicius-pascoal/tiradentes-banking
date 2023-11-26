import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../../imgs/dashboard/Logo.png";
import hamburger from "../../imgs/dashboard/hamburger.svg";
import profile from "../../imgs/dashboard/profile.svg";
import ModalPix from "../ModalPix";
import ModalTed from "../modalTed";

export default function BaseSite() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="fundoSite overflow-hidden h-screen">
      <button
        type="button"
        title="menu"
        className="menu-btn"
        onClick={toggleSidebar}
      >
        <img
          src={hamburger}
          alt=""
          width={30}
          height={30}
          style={{ filter: "invert(100%)", fill: "white" }}
        />
      </button>

      <div
        className={`sideBarFundo col-auto min-vh-100 flex-column justify-between sideBar ${
          sidebarVisible ? "show" : ""
        }`}
      >
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
            <Link
              to="/perfil"
              className="nav-link text-white fs-5"
              aria-current="page"
            >
              <i class="fs-4 bi bi-person-fill"></i>
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
              <i className="fs-4 bi bi-arrows-expand"></i>
              <span className="ms-2">Movimentações</span>
            </Link>
          </li>
          <li className="nav-item text-white fs-4 d-flex align-items-center">
            <Link
              to="/academico"
              className="nav-link text-white fs-5"
              aria-current="page"
            >
              <i className="fs-4 bi bi-mortarboard"></i>
              <span className="ms-2">Acadêmico</span>
            </Link>
          </li>
          <li className="nav-item text-white fs-4 d-flex align-items-center">
            <ModalPix />
          </li>
          <li className="nav-item text-white fs-4 d-flex align-items-center">
            <Link
              to="/sac"
              className="nav-link text-white fs-5"
              aria-current="page"
            >
              <i className="fs-4 bi bi-headset"></i>
              <span className="ms-2">Suporte</span>
            </Link>
          </li>{" "}
          <li className="nav-item text-white fs-4 d-flex align-items-center">
            <Link
              to="/"
              className="nav-link text-white fs-5"
              aria-current="page"
            >
              <i class="fs-4 bi bi-box-arrow-left"></i>
              <span className="ms-2">Sair</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="fundoImg">
        <Outlet />
      </div>
    </div>
  );
}
