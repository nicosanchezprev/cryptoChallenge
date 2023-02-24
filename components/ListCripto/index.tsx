import React from 'react';
import {FlatList, Image} from 'react-native';
import {ListCriptoProps} from '../../utils/interfaces';
import {Nav, PressableAdd, PressableAddText, Title} from './styles';
import {useAppSelector} from '../../redux/hooks/hooks';
import ItemCripto from '../ItemCripto';

const ListCripto = ({setModal}: ListCriptoProps) => {
  const cryptosState = useAppSelector(state => state.crypto.cryptosData);

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
          <PressableAdd onPress={() => setModal(true)}>
            <PressableAddText>+ Add a Cryptocurrency</PressableAddText>
          </PressableAdd>
        }
      />
    </>
  );
};

export default ListCripto;
