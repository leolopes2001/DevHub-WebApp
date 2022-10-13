/* eslint-disable arrow-body-style */

import { ModalStyled } from './style';

export const ModalEditTech = () => {
  return (
    <ModalStyled>
      <div className='overlay'>
        <form className='content'>
          <div>
            <h6>Tecnologia Detalhes</h6>
            <button type='button'>X</button>
          </div>

          <div>
            <label htmlFor='techName'>Nome do projeto </label>
            <input type='text' id='techName' disabled/>
          </div>

          <div>
            <label htmlFor='status'>Selecionar status</label>
            <select name='status' id=''>
              <option value=''>1</option>
              <option value=''>1</option>
              <option value=''>1</option>
              <option value=''>1</option>
              <option value=''>1</option>
            </select>
          </div>

          <div>
            <button type='submit' id='edit'>
              Salvar alterações
            </button>
            <button type='submit' id='delete'>
              Excluir
            </button>
          </div>
        </form>
      </div>
    </ModalStyled>
  );
};
