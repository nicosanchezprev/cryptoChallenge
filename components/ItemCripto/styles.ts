import styled from 'styled-components/native';
import {theme} from '../../utils/theme';

export const CriptoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px 0 20px;
  padding: 20px 0 20px 0;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${theme.colors.grey};
`;

export const SeconContainer = styled.View`
  flex-direction: row;
  align-items: center;
  column-gap: 8px;
`;

export const CriptoName = styled.Text`
  font-weight: 600;
  font-size: 16px;
  color: ${theme.colors.black};
`;

interface CriptoPercentageProps {
  color: boolean;
}
export const CriptoPercentage = styled.Text<CriptoPercentageProps>`
  color: ${props =>
    props.color === true ? theme.colors.green : theme.colors.red}
  text-align: right;
`;

export const ImageArrow = styled.Image`
  margin-right: 4px;
`;
