import Login from './pages/login'

import './assets/css/App.css';
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
          </Routes>
        </userProvider>
      </Router>
      
    </div>
  );
}

export default App;
