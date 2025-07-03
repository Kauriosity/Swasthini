import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Login from './pages/Login';
 import About from './pages/about';
import Contact from './pages/contact';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
