import Login from './pages/login';
import CriarConta from './pages/criarConta';
import RecuperarConta from './pages/recuperarConta';
import Dashboard from './pages/dashboard';
import Sac from './pages/sac';

import './assets/css/App.css'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <userProvider>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/criarConta' element={<CriarConta/>}/>
            <Route path='/recuperarConta' element={<RecuperarConta/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/sac' element={<Sac/>}/>
          </Routes>
        </userProvider>
      </Router>
      
    </div>
  );
}

export default App;
