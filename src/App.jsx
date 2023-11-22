import Login from "./pages/login";
import CriarConta from "./pages/criarConta";
import RecuperarConta from "./pages/recuperarConta";
import Dashboard from "./pages/dashboard";
import BaseSite from "./assets/components/baseSite";
import Sac from "./pages/sac";
import Academico from "./pages/academico";
import Movimentacoaes from "./pages/movimentacoes";

import "./assets/css/App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useState } from "react";
import Perfil from "./pages/perfil";

function App() {
  const [logged, setLogged] = useState(false);

  return (
    <div className="App">
      <Router basename="/tiradentes-banking">
        <Routes>
          <Route path="/" element={<Login setLogged={setLogged} />} />
          <Route path="/criarConta" element={<CriarConta />} />
          <Route path="/recuperarConta" element={<RecuperarConta />} />
          <Route element={<BaseSite />}>
            {logged ? (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/sac" element={<Sac />} />
                <Route path="/academico" element={<Academico />} />
                <Route path="/movimentacoes" element={<Movimentacoaes />} />
                <Route path="/perfil" element={<Perfil />} />
              </>
            ) : (
              <></>
            )}
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
