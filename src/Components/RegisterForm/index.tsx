import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

import RegisterFormSchema from './RegisterFormSchema';

interface RegisterFormProps {
  onSubmit: (data: any) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterFormSchema),
  });

  const onError = (error: any) => {
    Object.values(error).forEach((fieldError: any) => {
      toast.error(fieldError.message);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <h1>Crie sua conta</h1>
      <div className="input-field">
        <input type="text" {...register('name')} placeholder="Digite seu nome" autoComplete="off" />
        <FaUser className="icon" />
      </div>
      <div className="input-field">
        <input
          type="email"
          {...register('email')}
          placeholder="Digite seu E-mail"
          autoComplete="off"
        />
        <FaEnvelope className="icon" />
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
      <button type="submit">Registrar</button>
    </form>
  );
};

export default RegisterForm;
