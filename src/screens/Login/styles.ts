import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { colors } from '../../styles/colors';
import { LinearGradient } from 'expo-linear-gradient';

const { height } = Dimensions.get('window');
const isSmallScreen = height < 700;


export const GradientButton = styled(
  LinearGradient as unknown as React.ComponentType<any>
).attrs({
  colors: ['#FF881F', '#FA641E'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  border-radius: 20px;
  margin-top: ${() => {
    const { width } = Dimensions.get('window');
    return width < 768 ? '16px' : '24px';
  }};
`;

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${colors.background};
`;

export const HeaderWrapper = styled.View`
  align-items: center;
  margin-top: ${isSmallScreen ? '30px' : '124px'};
  margin-bottom: ${isSmallScreen ? '24px' : '37px'};
`;


export const Logo = styled.Image`
  width: 100px;
  height: 50px;
  margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
  font-family: 'Poppins_600SemiBold';
  font-size: 18px;
  text-align: center;
  color: ${colors.grayDark};
`;

export const Title = styled.Text`
  font-family: 'Poppins_600SemiBold';
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 16px;
`;

export const Label = styled.Text`
font-family: 'Poppins_400Regular';
  font-size: 13px;
  color: ${colors.grayMedium};
  margin-bottom: 6px;
`;


export const Input = styled.TextInput`
  border-width: 1px;
  border-color: ${colors.border};
  border-radius: 20px;
  padding: 16px 16px 16px 16px;
  font-size: 16px;
`;

export const Link = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 14px;
  color: ${colors.grayMedium};
  text-align: left;
  margin-top: 8px;
  text-decoration: underline;
`;

export const Button = styled.TouchableOpacity`
  padding: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: transparent; 
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-family: 'Poppins_500Medium';
  font-size: 16px;
`;

export const RowCenter = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: ${isSmallScreen ? '20px' : '36px'};
`;

export const Text = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 13px;
  color: ${colors.grayMedium};
`;

export const LinkCriar = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 13px;
  color: ${colors.orange};
`

export const SocialRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${isSmallScreen ? '20px' : '70px'};
`;

export const Line = styled.View`
  flex: 1;
  height: 1px;
  background-color: ${colors.grayLine};
`;

export const SocialText = styled.Text`
  font-family: 'Poppins_600SemiBold';
  font-size: 13px;
  color: ${colors.grayDark};
  text-align: left;
  margin-right: 7px;
`;

export const GoogleButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: ${colors.grayLight};
  border-radius: 20px;
  padding: ${isSmallScreen ? '12px' : '16px'};
  margin-top: ${isSmallScreen ? '12px' : '16px'};
`;

export const GoogleIcon = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 40px;  
`

export const GoogleText = styled.Text`
  font-size: 16px;
  color: ${colors.grayMedium};
  font-family: 'Poppins_500Medium';
  text-align: center;
`;


export const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: ${colors.border};
  border-radius: 20px;
  padding: 0 12px;
  margin-top: 6px;
  height: 48px;
  background-color: ${colors.white};
`;

export const PasswordInput = styled.TextInput.attrs({
  placeholderTextColor: '#4B4B4B',
  underlineColorAndroid: 'transparent'
})`
  flex: 1;
  height: 48px;
  font-size: 16px;
  background-color: transparent;
  color: ${colors.grayDark};
`;

export const EyeButton = styled.TouchableOpacity`
  padding-left: 8px;
  justify-content: center;
  align-items: center;
`;