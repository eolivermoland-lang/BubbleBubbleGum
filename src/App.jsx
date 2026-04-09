import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tjenester from './pages/Tjenester';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tjenester" element={<Tjenester />} />
      </Routes>
    </Router>
  );
}

export default App;
