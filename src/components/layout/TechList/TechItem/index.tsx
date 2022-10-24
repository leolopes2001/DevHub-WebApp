/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { useTech } from '../../../../contexts/TechProvider/TechProvider';
import { TextStyled } from '../../../generics/Text';
import { TitleStyled } from '../../../generics/Title';
import { LiStyled } from './style';

interface iTechProps {
  id: string;
  title: string;
  status: string;
}

export const TechItem = ({ id, title, status }: iTechProps) => {
  const { setContentModal } = useTech();

  return (
    <LiStyled onClick={() => setContentModal({ id, title, status })}>
      <TitleStyled variant='title2' tag='h4'>
        {title}
      </TitleStyled>
      <TextStyled variant='text3'>{status}</TextStyled>
    </LiStyled>
  );
};
