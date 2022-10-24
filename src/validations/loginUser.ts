import * as yup from 'yup';

export default yup.object({
  email: yup
    .string()
    .email('Deve ser um e-mail válido')
    .required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
});
