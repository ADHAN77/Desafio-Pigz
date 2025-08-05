import styled from 'styled-components/native';
import { colors } from '../../styles/colors';
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';

import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const isSmallScreen = height < 700;

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: #fff;
`;

export const IconBack = styled.Image`
  width: 24px;
  height: 24px;
`;

export const TitleRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin-top: 12px;
  margin-bottom: 40px;
  height: 40px;
`;

export const Title = styled.Text`
  position: absolute;
  left: 35%;
  font-family: 'Poppins_500Medium';
  font-size: 18px;
`;

export const CardGanhos = styled(LinearGradient as React.ComponentType<Partial<LinearGradientProps>>).attrs({
  colors: ['#FF881F', '#FA641E'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  height: ${isSmallScreen ? '96px' : '107px'};
  width: ${width - 48}px;
  border-radius: 12px;
  padding: ${isSmallScreen ? '12px' : '16px'};
`;


export const CardLarge = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  padding: ${isSmallScreen ? '12px' : '16px'};
  margin-bottom: 16px;
  height: ${isSmallScreen ? '170px' : '184px'};
  width: ${width - 48}px;
`;

export const CardExtraLarge = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  height: ${isSmallScreen ? '194px' : '206px'};
  width: ${width - 48}px;
`;

export const SubtitleGanhos = styled.Text`
  font-family: 'Poppins_500Medium';
  font-size: 16px;
  color: ${colors.white};
`;

export const Subtitle = styled.Text`
  font-family: 'Poppins_700Bold';
  font-size: 16px;
  font-weight: 600;
`;

export const DateText = styled.Text`
  font-family: 'Poppins_500Medium';
  font-size: 16px;
  color: ${colors.white};
`;

export const ValueText = styled.Text`
  font-family: 'Roboto';
  font-size: ${isSmallScreen ? '26px' : '30px'};
  font-weight: bold;
  margin-top: ${isSmallScreen ? '8px' : '11px'};
  color: ${colors.white};
  margin-left: ${isSmallScreen ? '8px' : '12px'};
`;

export const RowBetween = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Grid = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 18px;
`;

export const DeliveryCard = styled.View`
  background-color: ${colors.white};
  padding: 8px;
  border-radius: 20px;
  width: 100px;
  align-items: center;
  border: 1px solid ${colors.grayLigthplus};
`;

export const CardTitle = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 11px;
  color: ${colors.grayLight};
`;

export const CardValue = styled.Text`
  font-family: 'Poppins_500Medium';
  font-size: 40px;;
  color: ${colors.grayDark};
`;

export const Label = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 12px;
  color: ${colors.grayLine};
  margin-top: 6px;
`;

export const InputRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  height: 46px;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 46px;
  background-color: ${colors.white};
  border-width: 1px;
  border-color: ${colors.border};
  border-radius: 17px;
  font-size: 14px;
  padding-left: 8px;
  padding-right: 8px;
`;


export const OkButton = styled.TouchableOpacity`
  margin-left: 12px;
  background-color: ${colors.orange};
  border-radius: 17px;
  height: 46px;
  padding-left: 16px;  /* idem para botão */
  padding-right: 16px;
  justify-content: center;
  align-items: center;
`;

export const OkButtonText = styled.Text`
  font-family: 'Poppins_500Medium';
  color: ${colors.white};
  font-size: 14px;
`;

export const ScanButton = styled.TouchableOpacity`
  margin-top: 12px;
  height: 46px;
  padding: 12px;
  background-color: ${colors.orange};
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ScanButtonText = styled.Text`
  font-size: 16px;
  font-family: 'Poppins_500Medium';
  color: ${colors.white};
`;

export const StyledImage = styled.Image`
  width: 28px;
  height: 28px;
`;

export const BottomNav = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 83px;
  border-top-width: 1px;
  border-color: #F9F9F9;
  background-color: ${colors.white};
`;

export const NavItem = styled.TouchableOpacity`
  padding: 16px;
  align-items: center;
`;

export const NavText = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 10px;
  color: ${colors.grayLight};
`

export const NavTextSelectd = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 10px;
  color: ${colors.orange};
`