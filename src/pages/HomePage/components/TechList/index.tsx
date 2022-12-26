import { useTech } from '../../../../contexts/TechProvider/TechProvider';
import { ListStyled, EmptyLi } from './style';

import { TechItem } from './TechItem';

export const TechList = () => {
  const { techList } = useTech();

  return (
    <ListStyled>
      {techList.length ? (
        techList.map(({ id, title, status }) => (
          <TechItem key={id} id={id} title={title} status={status} />
        ))
      ) : (
        <EmptyLi>Ainda não foi adicionado nenhuma tecnologia!</EmptyLi>
      )}
    </ListStyled>
  );
};
