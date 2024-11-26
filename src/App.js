import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import MoreInfo from './pages/MoreInfo'
import Contact from './pages/Contact'
import Simulation from './pages/Simulation'
import MenuButtons from './components/menu/MenuButtons';
import './App.css';

function App() {
  return (
    <Router>
      <div className = 'appBackground'>
        
          <MenuButtons />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/more-info" element={<MoreInfo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/simulation" element={<Simulation />} />

          {/* Redirección a "/" si no se encuentra la ruta */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>


      </div>

    </Router>
  );
}

export default App;
