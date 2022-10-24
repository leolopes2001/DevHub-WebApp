import * as yup from 'yup';
export default yup.object({
    name: yup.string().required('Nome é obrigatório'),
    email: yup
      .string()
      .email('Deve ser um e-mail válido')
      .required('Email é obrigatório'),
    bio: yup.string().required('Biografia é obrigatório'),
    contact: yup.string().required('Contato é obrigatório'),
    course_module: yup.string().required('Módulo do curso é obrigatório'),
  });