import { useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import { AnimatePresence, motion } from 'framer-motion';
import { toast } from 'react-toastify';
import {
  ModalStyled,
  BoxHeader,
  BoxInputName,
  BoxSelect,
  BoxPadding,
  BoxButton,
} from './style';

import { LabelStyled } from '../../../../../components/Text';
import { TitleStyled } from '../../../../../components/Title';
import { ButtonStyled } from '../../../../../components/Button';
import { InputStyled } from '../../../../../components/Input/style';
import { SelectStyled } from '../../../../../components/Select/style';
import { useTech } from '../../../../../contexts/TechProvider/TechProvider';
import api from '../../../../../service/api';
import { useOutsideClick } from '../../../../../hooks/useOutsideClick';

const schema = yup.object({
  status: yup.string().required(),
});

export const ModalEditTech = () => {
  const { contentModal, setContentModal, setTechList } = useTech();

  const modalRef = useOutsideClick(() => setContentModal(null));

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formData) => {
    const submitter = window.event.submitter.name;

    const id = contentModal?.id;

    try {
      await api.put(`/users/techs/${id}`, formData);

      if (submitter === 'edit') {
        setTechList((oldTechList) => [
          ...oldTechList.map((tech) =>
            tech.id === id ? { ...tech, ...formData } : tech
          ),
        ]);

        setContentModal(null);

        toast.success('Alterações salvas!');
      } else if (submitter === 'delete') {
        await api.delete(`/users/techs/${contentModal?.id}`);

        setTechList((oldTechList) => [
          ...oldTechList.filter((tech) => tech.id !== id),
        ]);

        setContentModal(null);
        toast.success('Tecnologia deletada!');
      }
    } catch (err) {
      toast.error('Verifique os dados e tente novamente!');
    }
  };
  return (
    <AnimatePresence>
      {contentModal && (
        <ModalStyled>
          <div className='overlay'>
            <motion.div
              initial={{ opacity: 0, y: '-100px' }}
              animate={{ opacity: 1, y: '0px' }}
              exit={{ opacity: 0, y: '-100px' }}
              transition={{ duration: 0.4 }}
            >
              <form
                className='content'
                ref={modalRef}
                onSubmit={handleSubmit(onSubmit)}
              >
                <BoxHeader>
                  <TitleStyled variant='title2' tag='h6'>
                    Tecnologia Detalhes
                  </TitleStyled>
                  <ButtonStyled
                    variant='btnCloseModal'
                    type='button'
                    onClick={() => setContentModal(null)}
                  >
                    X
                  </ButtonStyled>
                </BoxHeader>

                <BoxPadding>
                  <BoxInputName>
                    <LabelStyled htmlFor='techName'>
                      Nome do projeto
                    </LabelStyled>
                    <InputStyled
                      type='text'
                      value={contentModal.title}
                      id='techName'
                      disabled
                    />
                  </BoxInputName>

                  <BoxSelect>
                    <LabelStyled htmlFor='status'>
                      Selecionar status
                    </LabelStyled>
                    <SelectStyled {...register('status')}>
                      <option value='Iniciante'>Iniciante</option>
                      <option value='Intermediário'>Intermediário</option>
                      <option value='Avançado'>Avançado</option>
                    </SelectStyled>
                  </BoxSelect>

                  <BoxButton>
                    <ButtonStyled
                      variant='saveChange'
                      type='submit'
                      name='edit'
                    >
                      Salvar alterações
                    </ButtonStyled>
                    <ButtonStyled
                      variant='deleteTech'
                      type='submit'
                      name='delete'
                    >
                      Excluir
                    </ButtonStyled>
                  </BoxButton>
                </BoxPadding>
              </form>
            </motion.div>
          </div>
        </ModalStyled>
      )}
    </AnimatePresence>
  );
};
