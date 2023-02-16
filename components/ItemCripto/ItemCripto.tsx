/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Text, View } from 'react-native';

import { ItemCriptoProps } from '../../utils/interfaces';

import {
  CriptoContainer,
  SeconContainer,
  CriptoName,
  CriptoPercentageGreen,
  CriptoPercentageRed,
} from './ItemCripto-Styles';

const ItemCripto = ({item}: ItemCriptoProps) => {

  let auxPercentage = item.percentage.toString();

  if (auxPercentage.substring(0, 1) === '-') {
    const resultado = auxPercentage.substring(1);
    auxPercentage = resultado;
  }

  return (
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
        {item.percentage > 0 ?
          <CriptoPercentageGreen>
            <Image source={require('../assets/img/greenarrow.png')}/>
            {auxPercentage + '%'}
          </CriptoPercentageGreen> :
          <CriptoPercentageRed>
            <Image source={require('../assets/img/redarrow.png')}/>
            {auxPercentage + '%'}
          </CriptoPercentageRed>
        }
      </View>
    </CriptoContainer>
  );
};

export default ItemCripto;
