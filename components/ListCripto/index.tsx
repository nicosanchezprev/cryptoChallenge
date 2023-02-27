import React from 'react';
import {Alert, FlatList, Image} from 'react-native';
import {ListCriptoProps} from '../../utils/interfaces';
import {Nav, PressableAdd, PressableAddText, Title} from './styles';
import {useAppDispatch, useAppSelector} from '../../redux/hooks/hooks';

import ItemCripto from '../ItemCripto';
import {cleanError} from '../../redux/reducersComp/cryptosSlice';

const ListCripto = ({setModal}: ListCriptoProps) => {
  const {cryptosData, error} = useAppSelector(state => state.crypto);
  const dispatch = useAppDispatch();

  const errorAlert = () => {
    Alert.alert('Error', `${error}`, [
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
        data={cryptosData}
        renderItem={({item}) => <ItemCripto item={item} />}
        keyExtractor={({id}) => id}
        extraData={cryptosData}
        ListFooterComponent={
          <PressableAdd onPress={() => setModal(true)}>
            <PressableAddText>+ Add a Cryptocurrency</PressableAddText>
          </PressableAdd>
        }
      />
      {error !== '' ? errorAlert() : null}
    </>
  );
};

export default ListCripto;
