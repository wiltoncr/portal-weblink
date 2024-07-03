import * as yup from 'yup';

const LoginFormSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: yup
    .string()
    .min(5, 'Senha deve ter pelo menos 5 digitos')
    .max(255, 'Senha deve ter no máximo 255 digitos')
    .required('Senha é obrigatória'),
  renember: yup.boolean(),
});

export default LoginFormSchema;
