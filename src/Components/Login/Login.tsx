import './Login.css';
import 'react-toastify/dist/ReactToastify.css';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FaLock, FaUser } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';

import LoginFormSchema from './LoginFormSchema';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = (data) => {
    console.log('Dados válidos: ', data);
    toast.success('Login bem-sucedido!');
  };

  const onError = (error: any) => {
    // Exibe um toast de erro para cada campo com erro
    Object.values(error).forEach((fieldError: any) => {
      toast.error(fieldError.message);
    });
  };

  return (
    <div className="container">
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <h1>Acesse o sistema</h1>
        <div className="input-field">
          <input
            type="email"
            {...register('email')}
            placeholder="Digite seu E-mail"
            autoComplete="off"
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            {...register('password')}
            placeholder="Digite sua senha"
            autoComplete="off"
          />
          <FaLock className="icon" />
        </div>
        <div className="recall-forget">
          <label>
            <input type="checkbox" {...register('renember')} />
            Lembre de mim
          </label>
          <a href="#">Esqueceu a senha?</a>
        </div>
        <button type="submit">Entrar</button>
        <div className="signup-link">
          <p>
            Não tenho uma conta?<a href="#">Registrar</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
