import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import Menu from './pages/Menu'
import AdminDashboard from './admin/AdminDashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import SidebarAdmin from './components/SidebarAdmin'
import ManageMenu from './admin/ManageMenu'
import ManageUsers from './admin/ManageUsers'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();
  // Hide Navbar on /login, /register, and all /admin routes
  const hideNavbar = location.pathname === '/login' || location.pathname === '/register' || location.pathname.startsWith('/admin');
  // Show sidebar only on /admin and its subroutes
  const showSidebar = location.pathname.startsWith('/admin');

  return (
    <>
      {!hideNavbar && <Navbar />}
      <div className="flex min-h-screen">
        {showSidebar && <SidebarAdmin />}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/manage-menu" element={<ManageMenu />} />
            <Route path="/admin/manage-users" element={<ManageUsers />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;