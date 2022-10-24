import * as yup from 'yup';

export default yup.object({
  title: yup.string().required('O título é obrigatório'),
  status: yup.string().required(),
});
