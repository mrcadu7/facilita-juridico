import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Home from './components/pages/Home';
import Cadastrar from './components/pages/Cadastrar';
import Cadastros from './components/pages/Cadastros';

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cadastrar" element={<Cadastrar/>} />
          <Route path="/cadastros" element={<Cadastros/>} />
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
