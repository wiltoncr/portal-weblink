import './Login.css';

import { AxiosError } from 'axios';
import { Navigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import LoginForm from '../../Components/LoginForm';
import { useAuth } from '../../contexts/AuthContext'; // Importe o contexto de autenticação

const Login = () => {
  const { isAuthenticated, login } = useAuth();
  interface LoginData {
    email: string;
    password: string;
    remember: boolean;
  }

  const handleSubmit = async (data: LoginData) => {
    try {
      await login(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        const { response } = error;
        if (response && response.data.errors && Array.isArray(response.data.errors)) {
          response.data.errors.forEach((error: string) => {
            toast.error(error);
          });
        } else {
          toast.error('Erro interno no servidor');
        }
      } else {
        toast.error('Erro desconhecido');
      }
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      <ToastContainer />
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
