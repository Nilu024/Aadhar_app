import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './components/Login';
import Register from './components/Register';
import MobileNavbar from './components/MobileNavbar';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MobileNavbar" element={<MobileNavbar />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      <MobileNavbar />
    </>
  );
}

export default App;