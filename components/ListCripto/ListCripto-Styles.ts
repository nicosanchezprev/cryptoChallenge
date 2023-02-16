/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

import { theme } from '../../utils/theme';

export const Nav = styled.View`
  background-color: ${theme.colors.blue};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 40px 20px 40px 20px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  color: ${theme.colors.white};
  font-size: 20px;
  font-weight: 700;
`;

export const PressableAdd = styled.Pressable`
  align-items: center;
  justify-content: center;
  margin: 50px 0 50px 0;
`;

export const PressableAddText = styled.Text`
  color: ${theme.colors.blue};
  font-weight: 500;
  font-size: 16px;
`;



