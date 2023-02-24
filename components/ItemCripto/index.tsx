import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {ItemCriptoProps} from '../../utils/interfaces';

import {
  CriptoContainer,
  SeconContainer,
  CriptoName,
  CriptoPercentage,
  ImageArrow,
  ViewArrow,
  CriptoPrice,
  CriptoImg,
} from './styles';

export const truncPrice = (n: any) => {
  if (n === null) {
    return 0;
  }
  if (n < 0) {
    let t = n.toString();
    let q = t.substring(1);
    let regex = /(\d*.\d{0,2})/;
    return q.match(regex)[0];
  } else {
    let t = n.toString();
    let regex = /(\d*.\d{0,2})/;
    return t.match(regex)[0];
  }
};

const ItemCripto = ({item}: ItemCriptoProps) => {
  return (
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
          <CriptoPrice>{'$' + truncPrice(item.price)}</CriptoPrice>
          <ViewArrow>
            <ImageArrow
              source={
                item.percentage > 0
                  ? require('../../assets/img/greenarrow.png')
                  : require('../../assets/img/redarrow.png')
              }
            />
            <CriptoPercentage color={item.percentage > 0}>
              {truncPrice(item.percentage) + '%'}
            </CriptoPercentage>
          </ViewArrow>
        </View>
      </CriptoContainer>
    </Pressable>
  );
};

export default ItemCripto;
