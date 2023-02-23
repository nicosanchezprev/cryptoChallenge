import React, {useState} from 'react';
import {PrincipalView} from './styles';
import ListCripto from '../ListCripto';
import ModalInput from '../ModalInput';

const Criptotracker: () => JSX.Element = () => {
  const [modal, setModal] = useState(false);

  return (
    <PrincipalView>
      <ListCripto setModal={setModal} />
      {modal && <ModalInput modal={modal} setModal={setModal} />}
    </PrincipalView>
  );
};

export default Criptotracker;
