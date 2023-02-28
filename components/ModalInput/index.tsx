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
import {cryptoApiData} from '../../redux/reducersComp/cryptosSlice';
import {useAppDispatch} from '../../redux/hooks/hooks';

const ModalInput = ({modal, setModal}: ModalInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const [isActive, setIsActive] = useState(false);
  const dispatch = useAppDispatch();

  const addCryptocurrency = () => {
    dispatch(cryptoApiData(inputValue)).then(() => {
      setModal(false);
    });
  };

  return (
    <Modal visible={modal} animationType="slide">
      <ModalView>
        <Pressable onPress={() => setModal(false)}>
          <TextPressable>{'< Back to list'}</TextPressable>
        </Pressable>
        <ViewInput>
          <TextTitle>Add a Cryptocurrency</TextTitle>
          <Input
            onChangeText={setInputValue}
            value={inputValue}
            placeholder="Use a name or ticker symbol..."
            keyboardType="default"
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
            col={isActive}
          />
          <PressableAdd
            disabled={inputValue === ''}
            onPress={addCryptocurrency}>
            <TextAdd col={isActive}>Add</TextAdd>
          </PressableAdd>
        </ViewInput>
      </ModalView>
    </Modal>
  );
};

export default ModalInput;
