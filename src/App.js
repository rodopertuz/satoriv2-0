import {HashRouter as Router, Routes, Route} from 'react-router-dom'

import Layout from './layout.js'
import Home from './pages/home.js'
import Programas from './pages/programas.js'
import Horarios from './pages/horarios.js'
import Contacto from './pages/contacto.js'
import Faq from './pages/faq.js'
import Cortesia from './pages/cortesia.js'

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/programas" element={<Programas />} />
            <Route path="/horarios" element={<Horarios />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/faq" element={<Faq />} />
            <Route path='/calendario-reservas/cortesia' element={<Cortesia />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
