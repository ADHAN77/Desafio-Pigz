import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const isSmallScreen = height < 700;


export const GradientButton = styled(LinearGradient).attrs({
  colors: ['#FF881F', '#FA641E'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  border-radius: 20px;
  margin-top: ${isSmallScreen ? '16px' : '24px'};
`;

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: #fff;
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
  color: #333333;
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
  color: #676767;
  margin-bottom: 6px;
`;


export const Input = styled.TextInput`
  border-width: 1px;
  border-color: #FA641E;
  border-radius: 20px;
  padding: 16px 16px 16px 16px;
  font-size: 16px;
`;

export const Link = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 14px;
  color: #676767;
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
  color: #FFFFFF;
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
  color: #676767;
`;

export const LinkCriar = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 13px;
  color: #FA641E;
`

export const SocialRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${isSmallScreen ? '20px' : '70px'};
`;

export const Line = styled.View`
  flex: 1;
  height: 1px;
  background-color: #707070;
`;

export const SocialText = styled.Text`
  font-family: 'Poppins_600SemiBold';
  font-size: 13px;
  color: #333333;
  text-align: left;
  margin-right: 7px;
`;

export const GoogleButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: #9F9F9F;
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
  color: #676767;
  font-family: 'Poppins_500Medium';
  text-align: center;
`;


export const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: #FA641E;
  border-radius: 20px;
  padding: 0 16px;
  margin-top: 6px;        
`;


export const PasswordInput = styled.TextInput`
  flex: 1;
  height: 48px;
  font-size: 16px;
  padding: 16px;
`;
