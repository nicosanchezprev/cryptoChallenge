import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Image} from 'react-native';
import {ListCriptoProps} from '../../utils/interfaces';
import {Nav, PressableAdd, PressableAddText, Title} from './styles';
import {useAppDispatch, useAppSelector} from '../../redux/hooks/hooks';

import ItemCripto from '../ItemCripto';
import {cleanError, cryptoApiData} from '../../redux/reducersComp/cryptosSlice';

const ListCripto = ({setModal}: ListCriptoProps) => {
  const {cryptosData, error} = useAppSelector(({crypto}) => crypto);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const errorAlert = () => {
      Alert.alert('Error', `${error}`, [
        {
          text: 'OK',
          onPress: () => dispatch(cleanError()),
        },
      ]);
    };
    if (error !== '') {
      errorAlert();
    }
  }, [error, dispatch]);

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
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(true);
          Promise.all(
            cryptosData.map(crypto => {
              dispatch(cryptoApiData({name: crypto.symbol, refresh: true}));
            }),
          );
          setRefreshing(false);
        }}
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
