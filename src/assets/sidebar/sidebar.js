import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../../assets/imgs/dashboard/Logo.png"

function sidebarMenu() {
    return(
        <div className="container-fluid">
            <div className="row">
                    <div className="bg-dark col-auto col-md-2 min-vh-100 d-flex flex-column align-items-center">
                        <a className="text-decoration-none text-white d-flex align-items-center">
                            <img src={logo} alt="Logo" className="img-fluid" />
                        </a>
                        <ul class="nav nav-pills flex-column">
                            <li class="nav-item text-white fs-4">
                                <a href="#" class="nav-link text-white fs-5" aria-current="page">
                                    <i className="fs-4 bi bi-speedometer2"></i>
                                    <span className="ms-2">Dashboard</span>
                                </a>
                            </li>

                            <li class="nav-item text-white fs-4">
                                <a href="#" class="nav-link text-white fs-5" aria-current="page">
                                    <i className="fs-4 bi bi-house"></i>
                                    <span className="ms-2">Dashboard</span>
                                </a>
                            </li>
                        </ul>
                    </div>

            </div>
        </div>

    )

}

export default sidebarMenu