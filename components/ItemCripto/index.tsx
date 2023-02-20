import React from 'react';
import {Image, Text, View} from 'react-native';
import {ItemCriptoProps} from '../../utils/interfaces';
import {theme} from '../../utils/theme';

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
      {item.percentage > 0 ? (
        <CriptoPercentage color={theme.colors.green}>
          <ImageArrow source={require('../../assets/img/greenarrow.png')} />
          {item.percentage + '%'}
        </CriptoPercentage>
      ) : (
        <CriptoPercentage color={theme.colors.red}>
          <ImageArrow source={require('../../assets/img/redarrow.png')} />
          {Math.abs(item.percentage) + '%'}
        </CriptoPercentage>
      )}
    </View>
  </CriptoContainer>
);

export default ItemCripto;
