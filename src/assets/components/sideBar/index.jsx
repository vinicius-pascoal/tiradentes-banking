import logo from "../../imgs/dashboard/Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Sidebar() {
  return (
    <div className="sideBarFundo col-auto min-vh-100 d-flex flex-column align-items-center">
      <a className="text-decoration-none text-white d-flex align-items-center">
        <img
          src={logo}
          alt="Logo"
          className="img-fluid"
          style={{ maxWidth: "100px" }}
        />
      </a>
      <ul class="nav nav-pills flex-column">
        <li class="nav-item text-white fs-4 d-flex align-items-center">
          <a href="#" class="nav-link text-white fs-5" aria-current="page">
            <i className="fs-4 bi bi-house"></i>
            <span className="ms-2">Dashboard</span>
          </a>
        </li>

        <li class="nav-item text-white fs-4 d-flex align-items-center">
          <a href="#" class="nav-link text-white fs-5" aria-current="page">
            <i className="fs-4 bi bi-credit-card"></i>
            <span className="ms-2">Cartão</span>
          </a>
        </li>
        <li class="nav-item text-white fs-4 d-flex align-items-center">
          <a href="#" class="nav-link text-white fs-5" aria-current="page">
            <i className="fs-4 bi bi-mortarboard"></i>
            <span className="ms-2">Acadêmico</span>
          </a>
        </li>
        <li class="nav-item text-white fs-4 d-flex align-items-center">
          <a href="#" class="nav-link text-white fs-5" aria-current="page">
            <i className="fs-4 bi bi-x-diamond-fill"></i>
            <span className="ms-2">Pix</span>
          </a>
        </li>
        <li class="nav-item text-white fs-4 d-flex align-items-center">
          <a href="#" class="nav-link text-white fs-5" aria-current="page">
            <i className="fs-4 bi bi-arrows-expand"></i>
            <span className="ms-2">Movimentações</span>
          </a>
        </li>
        <li class="nav-item text-white fs-4 d-flex align-items-center">
          <a href="#" class="nav-link text-white fs-5" aria-current="page">
            <i className="fs-4 bi bi-headset"></i>
            <span className="ms-2">Suporte</span>
          </a>
        </li>
        <li class="nav-item text-white fs-4 d-flex align-items-center">
          <a href="#" class="nav-link text-white fs-5" aria-current="page">
            <i className="fs-4 bi bi-gear"></i>
            <span className="ms-2">Configurações</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
