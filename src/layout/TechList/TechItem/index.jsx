/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { TextStyled } from '../../../components/Text';
import { TitleStyled } from '../../../components/Title';
import { LiStyled } from './style';

export const TechItem = ({ setContentModal, id, title, status }) => (
    <LiStyled onClick={() => setContentModal({ id, title, status })}>
      <TitleStyled variant='title2' tag='h4'>
        {title}
      </TitleStyled>
      <TextStyled variant='text3'>{status}</TextStyled>
    </LiStyled>
  );
