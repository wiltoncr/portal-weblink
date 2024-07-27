import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { useAuth } from './contexts/AuthContext';
import AccessEdit from './pages/AccessEdit';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

export default function AppRoutes() {
  const { isAuthenticated } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="/register"
          element={isAuthenticated ? <Register /> : <Navigate to="/login" />}
        />
        <Route
          path="/access/:id"
          element={isAuthenticated ? <AccessEdit /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
