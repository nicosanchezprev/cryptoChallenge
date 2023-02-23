import React, {useEffect} from 'react';
import {Alert, FlatList, Image} from 'react-native';
import {ListCriptoProps} from '../../utils/interfaces';
import {Nav, PressableAdd, PressableAddText, Title} from './styles';
import {useAppDispatch, useAppSelector} from '../../redux/hooks/hooks';
import ItemCripto from '../ItemCripto';
import {cleanError} from '../../redux/reducersComp/cryptosSlice';

const ListCripto = ({setModal}: ListCriptoProps) => {
  const cryptosState = useAppSelector(state => state.crypto.cryptosData);
  const errorState = useAppSelector(state => state.crypto.error);
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log('ERROR: ', errorState);
    console.log('CRYPTOS: ', cryptosState);
  }, [errorState, cryptosState]);

  const errorAlert = () => {
    Alert.alert('Error', `${errorState}`, [
      {
        text: 'OK',
        onPress: () => dispatch(cleanError()),
      },
    ]);
  };

  return (
    <>
      <Nav>
        <Title>CryptoTracker Pro</Title>
        <Image source={require('../../assets/img/avatar.png')} />
      </Nav>
      <FlatList
        data={cryptosState}
        renderItem={({item}) => <ItemCripto item={item} />}
        keyExtractor={({id}) => id}
        extraData={cryptosState}
        ListFooterComponent={
          <>
            <PressableAdd onPress={() => setModal(true)}>
              <PressableAddText>+ Add a Cryptocurrency</PressableAddText>
            </PressableAdd>
          </>
        }
      />
      {errorState !== '' ? errorAlert() : null}
    </>
  );
};

export default ListCripto;
