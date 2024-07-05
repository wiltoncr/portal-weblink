import './Login.css';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

import LoginForm from '../../Components/LoginForm';

const Login = () => {
  const handleSubmit = (data: any) => {
    console.log('Dados válidos: ', data);
    // Aqui você poderia adicionar lógica adicional de login
  };

  return (
    <div className="container">
      <ToastContainer />
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
