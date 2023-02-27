import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
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

const ItemCripto = ({item}: ItemCriptoProps) => (
  <Pressable>
    <CriptoContainer>
      <SeconContainer>
        <CriptoImg source={item.img} />
        <View>
          <CriptoName>{item.name}</CriptoName>
          <Text>{item.symbol}</Text>
        </View>
      </SeconContainer>
      <View>
        <CriptoPrice>{'$' + item.price.toFixed(2)}</CriptoPrice>
        <ViewArrow>
          <Image
            source={
              item.percentage > 0
                ? require('../../assets/img/greenarrow.png')
                : require('../../assets/img/redarrow.png')
            }
          />
          <CriptoPercentage color={item.percentage >= 0}>
            {Math.abs(Number(item.percentage.toFixed(2))) + '%'}
          </CriptoPercentage>
        </ViewArrow>
      </View>
    </CriptoContainer>
  </Pressable>
);

export default ItemCripto;
