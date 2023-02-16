/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Modal,
} from 'react-native';

import { Principalview } from './Criptotracker-Styles';
import ListCripto from '../ListCripto/ListCripto';

const Criptotracker: () => JSX.Element = () => {
  const [modal, setModal] = useState(false);
  return (
    <Principalview>
      <ListCripto setModal={setModal} />
    </Principalview>
  );
};

export default Criptotracker;
