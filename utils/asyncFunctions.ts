import AsyncStorage from '@react-native-async-storage/async-storage';

import {DataCriptoInfo} from './interfaces';

export const storeData = async (value: DataCriptoInfo) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(`${value.name}`, jsonValue);
  } catch (e: any) {
    console.log(e);
  }
};

export const removeValue = async (keyName: string) => {
  try {
    await AsyncStorage.removeItem(keyName);
  } catch (e: any) {
    console.log(e);
  }
};

export const getAllKeys = async () => {
  let keys;
  try {
    keys = await AsyncStorage.getAllKeys();
    if (keys !== undefined) {
      return keys;
    }
  } catch (e: any) {
    console.log(e);
  }
};

export const getMultiple = async () => {
  try {
    let values;
    let asyncKeys = await getAllKeys();
    console.log('asynckeys', asyncKeys);
    values = await AsyncStorage.multiGet(asyncKeys ? asyncKeys : ['null']);
    return values;
  } catch (e: any) {
    console.log(e);
  }
};
