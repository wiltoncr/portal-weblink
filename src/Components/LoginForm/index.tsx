import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FaLock, FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

import LoginFormSchema from './LoginFormSchema';

interface LoginFormProps {
  onSubmit: (data: any) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginFormSchema),
  });

  const onError = (error: any) => {
    Object.values(error).forEach((fieldError: any) => {
      toast.error(fieldError.message);
    });
  };

  return (
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
          <input type="checkbox" {...register('remember')} />
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
  );
};

export default LoginForm;
