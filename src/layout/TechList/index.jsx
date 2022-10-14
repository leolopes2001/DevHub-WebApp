/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ListStyled } from './style';

import { TechItem } from './TechItem';

export const TechList = ({ techList, setContentModal }) => (
  <ListStyled>
    {techList?.map(({ id, title, status }) => (
      <TechItem
        key={id}
        id={id}
        title={title}
        status={status}
        setContentModal={setContentModal}
      />
    ))}
  </ListStyled>
);
