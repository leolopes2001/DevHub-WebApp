import * as yup from 'yup';

export default yup.object({
  old_password: yup.string().required('Senha antiga é obrigatória'),
  password: yup
    .string()
    .min(8, 'No minimo 8 caracteres')
    .matches(/[A-Z]/, 'Deve conter ao menos 1 letra maiúscula')
    .matches(/[a-z]/, 'Deve conter ao menos 1 letra minuscula')
    .matches(/(\d)/, 'Deve conter ao menos um número')
    .matches(/(\W)|_/, 'Deve conter um caracter especial')
    .matches(/.{8,}/, 'Deve ter no minimo 8 digitos')
    .required('Senha é obrigatória'),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref('password')],
      'Confirmação de senha deve ser igual a senha'
    ),
});
