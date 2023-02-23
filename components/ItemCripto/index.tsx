import React from 'react';
import {Image, Text, View} from 'react-native';
import {ItemCriptoProps} from '../../utils/interfaces';

import {
  CriptoContainer,
  SeconContainer,
  CriptoName,
  CriptoPercentage,
  ImageArrow,
} from './styles';

const ItemCripto = ({item}: ItemCriptoProps) => (
  <CriptoContainer>
    <SeconContainer>
      <Image source={item.img} />
      <View>
        <CriptoName>{item.name}</CriptoName>
        <Text>{item.symbol}</Text>
      </View>
    </SeconContainer>
    <View>
      <CriptoName>{item.price}</CriptoName>
      <CriptoPercentage color={item.percentage > 0}>
        <ImageArrow
          source={
            item.percentage > 0
              ? require('../../assets/img/greenarrow.png')
              : require('../../assets/img/redarrow.png')
          }
        />
        {Math.abs(item.percentage) + '%'}
      </CriptoPercentage>
    </View>
  </CriptoContainer>
);

export default ItemCripto;
