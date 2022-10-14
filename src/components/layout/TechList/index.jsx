/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ListStyled, EmptyLi } from './style';

import { TechItem } from './TechItem';

export const TechList = ({ techList, setContentModal }) => (
  <ListStyled>
    {techList.length ? (
      techList.map(({ id, title, status }) => (
        <TechItem
          key={id}
          id={id}
          title={title}
          status={status}
          setContentModal={setContentModal}
        />
      ))
    ) : (
      <EmptyLi>Ainda não foi adicionado nenhuma tecnologia!</EmptyLi>
    )}
  </ListStyled>
);
