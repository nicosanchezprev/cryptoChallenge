import React from 'react';
import {Alert, Image, Pressable, Text, View} from 'react-native';
import {useAppDispatch} from '../../redux/hooks/hooks';
import {deleteCrypto} from '../../redux/reducersComp/cryptosSlice';

import {ItemCriptoProps} from '../../utils/interfaces';

import {
  CriptoContainer,
  SeconContainer,
  CriptoName,
  CriptoPercentage,
  ViewArrow,
  CriptoPrice,
  CriptoImg,
} from './styles';

const ItemCripto = ({item}: ItemCriptoProps) => {
  const dispatch = useAppDispatch();

  const buttonAlert = () =>
    Alert.alert('Delete Cryptocurrency', `You want to delete ${item.name}?`, [
      {
        text: 'Cancel',
      },
      {
        text: 'Accept',
        onPress: () => dispatch(deleteCrypto(item.name)),
      },
    ]);

  return (
    <Pressable onPress={buttonAlert}>
      <CriptoContainer>
        <SeconContainer>
          <CriptoImg source={item.img} />
          <View>
            <CriptoName>{item.name}</CriptoName>
            <Text>{item.symbol}</Text>
          </View>
        </SeconContainer>
        <View>
          <CriptoPrice>
            {item.price === null ? '$' + '-' : '$' + item.price.toFixed(2)}
          </CriptoPrice>
          <ViewArrow>
            <Image
              source={
                item.percentage > 0
                  ? require('../../assets/img/greenarrow.png')
                  : require('../../assets/img/redarrow.png')
              }
            />
            <CriptoPercentage
              color={item.percentage >= 0 && item.percentage !== null}>
              {item.percentage === null
                ? '-' + '%'
                : Math.abs(Number(item.percentage.toFixed(2))) + '%'}
            </CriptoPercentage>
          </ViewArrow>
        </View>
      </CriptoContainer>
    </Pressable>
  );
};

export default ItemCripto;
