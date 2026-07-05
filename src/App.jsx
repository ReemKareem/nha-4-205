import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Diet from './pages/DietPlan';
import Contact from './pages/ContactUs';
import Progress from './pages/Progress';
import Exercises from './pages/Exercises';
import Transformation from './pages/Transformation';
import Awareness from './pages/Awareness';
import DietPlan from './pages/DietPlan';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const isAuthPage = window.location.pathname === '/login' || window.location.pathname === '/register';
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/transformation" element={<Transformation />} />
        <Route path="/awareness" element={<Awareness />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/diet" element={<DietPlan />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/exercises" element={<Exercises />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}