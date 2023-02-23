import React from 'react';
import {Alert, Pressable, Text, View} from 'react-native';
import {useAppDispatch} from '../../redux/hooks/hooks';
import {deleteCrypto} from '../../redux/reducersComp/cryptosSlice';
import {ItemCriptoProps} from '../../utils/interfaces';
import {theme} from '../../utils/theme';

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
    return '-' + q.match(regex)[0];
  } else {
    let t = n.toString();
    let regex = /(\d*.\d{0,2})/;
    return t.match(regex)[0];
  }
};

const ItemCripto = ({item}: ItemCriptoProps) => {
  const dispatch = useAppDispatch();

  const buttonAlert = () =>
    Alert.alert('Delete Cryptocurrencie', `You want to delete ${item.name}?`, [
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
          <CriptoPrice>{'$' + truncPrice(item.price)}</CriptoPrice>
          {item.percentage > 0 ? (
            <ViewArrow>
              <ImageArrow source={require('../../assets/img/greenarrow.png')} />
              <CriptoPercentage color={theme.colors.green}>
                {truncPrice(item.percentage) + '%'}
              </CriptoPercentage>
            </ViewArrow>
          ) : (
            <ViewArrow>
              <ImageArrow source={require('../../assets/img/redarrow.png')} />
              <CriptoPercentage color={theme.colors.red}>
                {truncPrice(item.percentage) + '%'}
              </CriptoPercentage>
            </ViewArrow>
          )}
        </View>
      </CriptoContainer>
    </Pressable>
  );
};

export default ItemCripto;
