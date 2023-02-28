import styled from 'styled-components/native';

import {theme} from '../../utils/theme';

export const ModalView = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.white};
  padding: 30px 20px 30px 20px;
`;

export const TextPressable = styled.Text`
  color: ${theme.colors.blue};
  font-size: 16px;
  font-weight: 500;
`;

export const ViewInput = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
`;

export const TextTitle = styled.Text`
  font-weight: 800;
  font-size: 24px;
  align-self: flex-start;
  margin-bottom: 10px;
  color: ${theme.colors.black};
`;

interface PropsInput {
  col: boolean;
}

export const Input = styled.TextInput<PropsInput>`
  background-color: ${props =>
    props.col ? theme.colors.white : theme.colors.skyBlue};
  padding: 10px;
  width: 100%;
  border: ${props => (props.col ? '2px' : '1px')} solid
    ${props => (props.col ? theme.colors.yellow : theme.colors.blue2)};
  border-radius: 2px;
`;

export const PressableAdd = styled.Pressable`
  background-color: ${theme.colors.yellow};
  border-radius: 2px;
  padding: 10px 50px 10px 50px;
  align-self: flex-end;
`;

interface TextAddProps {
  col: boolean;
}

export const TextAdd = styled.Text<TextAddProps>`
  font-weight: 800;
  font-size: 18px;
  color: ${props => (props.col ? theme.colors.blue : theme.colors.grey2)};
`;
