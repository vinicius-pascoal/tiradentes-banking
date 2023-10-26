
import homeIcon from "../../assets/imgs/dashboard/1564508_home_main_room_estate_property_icon.png";
import cardIcon from "../../assets/imgs/dashboard/211635_card_icon.png";
import pixIcon from "../../assets/imgs/dashboard/8666421_pix_icon.png";
import acadIcon from "../../assets/imgs/dashboard/6785119_academic_cap_square_icon.png";
import moveIcon from "../../assets/imgs/dashboard/9042363_data_transfer_up_icon.png";
import supIcon from "../../assets/imgs/dashboard/9054987_bx_support_icon.png";
import configIcon from "../../assets/imgs/dashboard/3844439_gear_setting_settings_wheel_icon.png";
import profilePic from "../../assets/imgs/dashboard/profile.png"
import sidebarMenu from "../../assets/sidebar/sidebar";
import logo from "../../assets/imgs/dashboard/Logo.png"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Dashboard() {
  return (
    
    <div className="container-fluid">
            <div className="row">
                    <div className="bg-dark col-auto col-md-2 min-vh-100 d-flex flex-column align-items-center">
                        <a className="text-decoration-none text-white d-flex align-items-center">
                            <img src={logo} alt="Logo" className="img-fluid" style={{maxWidth: "100px"}} />
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

    </div>
</div>
  //   <div class="sidebar">
  //   <ul>
  //       <img class="logo" src={profilePic} alt="Logo do banco"/>
  //       <li>
  //         <img src={homeIcon} alt="Logo 1"/>
  //         <a href="#">Início</a>
  //       </li>
  //       <li>
  //         <img src={cardIcon} alt="Logo 2"/>
  //         <a href="#">Cartão</a>
  //       </li>
  //       <li>
  //         <img src={pixIcon} alt="Logo 3"/>
  //         <a href="#">Pix</a>
  //       </li>
  //       <li>
  //         <img src={acadIcon} alt="Logo 4"/>
  //         <a href="#">Acadêmico</a>
  //       </li>
  //       <li>
  //         <img src={moveIcon} alt="Logo 5"/>
  //         <a href="#">Movimentações</a>
  //       </li>
  //       <li>
  //         <img src={supIcon} alt="Logo 6"/>
  //         <a href="#">Suporte</a>
  //       </li>
  //       <li>
  //         <img src={configIcon} alt="Logo 7"/>
  //         <a href="#">Configurações</a>
  //       </li>
  //     </ul>  
  // </div>
  );
  
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//       <sidebarMenu
//       />
    
// );