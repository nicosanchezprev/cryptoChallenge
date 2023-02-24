import React, {useState, useEffect} from 'react';
import {PrincipalView} from './styles';
import ListCripto from '../ListCripto';
import ModalInput from '../ModalInput';
import {getMultiple} from '../../utils/asyncFunctions';
import {addCrypto} from '../../redux/reducersComp/cryptosSlice';
import {useAppDispatch} from '../../redux/hooks/hooks';

const Criptotracker: () => JSX.Element = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const asyncSearch = async () => {
      const allStorage = await getMultiple();
      allStorage?.map(item => {
        dispatch(addCrypto(item[1] ? JSON.parse(item[1]) : null));
      });
    };
    asyncSearch();
  }, [dispatch]);

  return (
    <PrincipalView>
      <ListCripto setModal={setModal} />
      {modal && <ModalInput modal={modal} setModal={setModal} />}
    </PrincipalView>
  );
};

export default Criptotracker;
