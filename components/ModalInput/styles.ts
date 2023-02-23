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
  theme: {back: string; border: string; borderPX: string};
}

export const Input = styled.TextInput<PropsInput>`
  background-color: ${props => props.theme.back};
  padding: 10px;
  width: 100%;
  border: ${props => props.theme.borderPX} solid ${props => props.theme.border};
  border-radius: 2px;
`;
Input.defaultProps = {
  theme: {
    back: theme.colors.skyBlue,
    border: theme.colors.blue2,
    borderPX: '1px',
  },
};

export const PressableAdd = styled.Pressable`
  background-color: ${theme.colors.yellow};
  border-radius: 2px;
  padding: 10px 50px 10px 50px;
  align-self: flex-end;
`;

interface TextAddProps {
  theme: {col: string};
}

export const TextAdd = styled.Text<TextAddProps>`
  font-weight: 800;
  font-size: 18px;
  color: ${props => props.theme.col};
`;
TextAdd.defaultProps = {
  theme: {
    col: theme.colors.grey2,
  },
};
