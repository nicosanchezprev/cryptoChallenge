/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, Image } from 'react-native';
import { DataCriptoInfo, ListCriptoProps } from '../../utils/interfaces';
import { Nav, PressableAdd, PressableAddText, Title } from './ListCripto-Styles';

import ItemCripto from '../ItemCripto/ItemCripto';

const DataCripto: DataCriptoInfo[] = [
  {
    id: '1',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '$7,215.68',
    percentage: 1.82,
    img: require('../assets/img/bitcoin.png'),
  },
  {
    id: '2',
    name: 'Ethereum',
    symbol: 'ETH',
    price: '$146.83',
    percentage: 1.46,
    img: require('../assets/img/ethereum.png'),
  },
  {
    id: '3',
    name: 'XRP',
    symbol: 'XRP',
    price: '$0.220568',
    percentage: -2.47,
    img: require('../assets/img/xrp.png'),
  },
];

const ListCripto = ({setModal}: ListCriptoProps) => {
  return (
    <FlatList
      data={DataCripto}
      renderItem={({item}: {item: DataCriptoInfo}) => <ItemCripto item={item} />}
      keyExtractor={item => item.id}
      scrollEnabled={true}
      ListHeaderComponent={
        <>
          <Nav>
            <Title>CryptoTracker Pro</Title>
            <Image source={require('../assets/img/avatar.png')}/>
          </Nav>
        </>
      }
      ListFooterComponent={
        <>
          <PressableAdd onPress={() => setModal(true)}>
            <PressableAddText>+ Add a Cryptocurrency</PressableAddText>
          </PressableAdd>
        </>
      }
    />
  );
};

export default ListCripto;
