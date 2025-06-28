import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
