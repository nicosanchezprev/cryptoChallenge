import React, {useState} from 'react';
import {PrincipalView} from './styles';
import ListCripto from '../ListCripto';

const Criptotracker: () => JSX.Element = () => {
  const [modal, setModal] = useState(false);
  return (
    <PrincipalView>
      <ListCripto setModal={setModal} />
    </PrincipalView>
  );
};

export default Criptotracker;
