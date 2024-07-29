import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { useAuth } from './contexts/AuthContext';
import AccessAdd from './pages/AccessAdd';
import AccessEdit from './pages/AccessEdit';
import Client from './pages/Client';
import ClientAdd from './pages/ClientAdd';
import ClientEdit from './pages/ClientEdit';
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
        <Route
          path="/access/add"
          element={isAuthenticated ? <AccessAdd /> : <Navigate to="/login" />}
        />
        <Route path="/client" element={isAuthenticated ? <Client /> : <Navigate to="/login" />} />
        <Route
          path="/client/add"
          element={isAuthenticated ? <ClientAdd /> : <Navigate to="/login" />}
        />
        <Route
          path="/client/:id"
          element={isAuthenticated ? <ClientEdit /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
