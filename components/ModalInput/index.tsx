import React, {useState} from 'react';
import {Modal, Pressable} from 'react-native';

import {
  Input,
  ModalView,
  PressableAdd,
  TextAdd,
  TextPressable,
  TextTitle,
  ViewInput,
} from './styles';

import {ModalInputProps} from '../../utils/interfaces';
import {ThemeProvider} from 'styled-components/native';
import {theme} from '../../utils/theme';
import {cryptoApiData} from '../../redux/reducersComp/cryptosSlice';
import {useAppDispatch} from '../../redux/hooks/hooks';

const ModalInput = ({modal, setModal}: ModalInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const [isActive, setIsActive] = useState(false);
  const dispatch = useAppDispatch();

  const themeInputChange = {
    back: theme.colors.white,
    border: theme.colors.yellow,
    borderPX: '2px',
  };
  const themeInputDefault = {
    back: theme.colors.skyBlue,
    border: theme.colors.blue2,
    borderPX: '1px',
  };
  const themePresTextChange = {
    col: theme.colors.blue,
  };
  const themePresTextDefault = {
    col: theme.colors.grey2,
  };

  const addCryptocurrencie = () => {
    dispatch(cryptoApiData(inputValue)).then(() => {
      setModal(false);
    });
  };

  return (
    <Modal visible={modal} animationType={'slide'}>
      <ModalView>
        <Pressable onPress={() => setModal(false)}>
          <TextPressable>{'< Back to list'}</TextPressable>
        </Pressable>
        <ViewInput>
          <TextTitle>Add a Cryptocurrency</TextTitle>
          <ThemeProvider
            theme={isActive ? themeInputChange : themeInputDefault}>
            <Input
              onChangeText={setInputValue}
              value={inputValue}
              placeholder="Use a name or ticker symbol..."
              keyboardType="default"
              onFocus={() => setIsActive(true)}
              onBlur={() => setIsActive(false)}
            />
          </ThemeProvider>
          <PressableAdd
            onPress={() => {
              addCryptocurrencie();
            }}>
            <ThemeProvider
              theme={isActive ? themePresTextChange : themePresTextDefault}>
              <TextAdd>Add</TextAdd>
            </ThemeProvider>
          </PressableAdd>
        </ViewInput>
      </ModalView>
    </Modal>
  );
};

export default ModalInput;
