import './Register.css';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

import RegisterForm from '../../Components/RegisterForm';

const Register = () => {
  const handleSubmit = (data: any) => {
    console.log('Dados do novo usuário: ', data);
    // Lógica para enviar os dados do novo usuário para a API, por exemplo
  };

  return (
    <div className="container">
      <ToastContainer />
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Register;
