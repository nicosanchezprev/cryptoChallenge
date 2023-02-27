import React, {useEffect, useState} from 'react';
import {PrincipalView} from './styles';
import ListCripto from '../ListCripto';
import {useAppDispatch} from '../../redux/hooks/hooks';
import {cryptoApiData} from '../../redux/reducersComp/cryptosSlice';

const Criptotracker: () => JSX.Element = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(cryptoApiData('btc'));
    dispatch(cryptoApiData('usdt'));
    dispatch(cryptoApiData('eth'));
  }, [dispatch]);

  return (
    <PrincipalView>
      <ListCripto setModal={setModal} />
    </PrincipalView>
  );
};

export default Criptotracker;
