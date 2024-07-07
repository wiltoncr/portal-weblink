import './Login.css';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import LoginForm from '../../Components/LoginForm';
import authService from '../../services/auth';

interface LoginData {
  email: string;
  password: string;
  remember: boolean;
}

const Login = () => {
  const [redirectTO, setRedirecTO] = useState('');

  const handleSubmit = async (data: LoginData) => {
    try {
      const res = await authService.authenticate(data);
      authService.setLoggedUser(res.data);
      setRedirecTO('/');
    } catch (error: unknown) {
      if (error instanceof Error) {
        // Tratar como um erro comum
        console.log(error.response.data);

        toast.error(error.message);
      } else if (typeof error === 'string') {
        // Se for uma string, tratar como uma mensagem de erro
        toast.error(error);
      } else if (error instanceof Array) {
        // Se for um array, pode ser um conjunto de erros
        error.forEach((erro: string) => toast.error(erro));
      } else {
        // Caso contrário, exibir uma mensagem genérica de erro
        toast.error('Erro desconhecido');
      }
    }
  };

  if (redirectTO !== '') {
    return <Navigate to={redirectTO} />;
  }
  return (
    <div className="container">
      <ToastContainer />
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
