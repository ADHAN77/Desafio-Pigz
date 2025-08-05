import styled from 'styled-components/native';
import { colors } from '../../styles/colors';
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background-color: #fff;
`;

export const IconBack = styled.Image`
  width: 24px;
  height: 24px;
`;

export const TitleRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 22px;
`;

export const BackIcon = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: 'Poppins_500Medium';
  flex: 1;
  text-align: center;
  margin-right: 30px;
`;

export const InfoRow = styled.View`
  margin-left: 40px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-bottom: 14px;
`;;

export const InfoBlock = styled.View`
  margin-right: 40px;
  
  &:last-child {
    margin-right: 0px;
  }
`;

export const InfoTitle = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 14px;
  color: ${colors.grayLine};
`;

export const InfoValue = styled.Text`
  font-family: 'Poppins_700Bold';
  margin-left: 17px;
  font-size: 20px;
  color: ${colors.orange};
`;

export const Divider = styled.View`
  height: 1px;
  background-color:  ${colors.grayLine};
  margin-bottom: 20px;
`;

export const ValorEntregaTitulo = styled.Text`
  font-family: 'Poppins_400Regular';
  text-align: center;
  font-size: 14px;
  color: ${colors.grayLine};
`;

export const ValorEntrega = styled.Text`
  font-family: 'Poppins_700Bold';
  text-align: center;
  font-size: 35px;
  margin-bottom: 20px;
  color: ${colors.orange};
`;

export const EntregaCheckpointsWrapper = styled.View`
  flex-direction: column;
`;

export const EntregaContainer = styled(
  LinearGradient as React.ComponentType<Partial<LinearGradientProps>>
).attrs({
  colors: ['#FF881F', '#FA641E'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  margin-bottom: 16px;
  padding: 16px;
  height: 60px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 12px;
`;

export const EntregaTextoWrapper = styled.View`
  flex-direction: column;
`;

export const EntregaTitulo = styled.Text`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${colors.white};
`;

export const EntregaSubTitulo = styled.Text`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${colors.white};
`;

export const CheckpointsContainer = styled.View`
  position: relative;
  padding-left: 24px; 
  margin-bottom: 30px;
`;

export const LinhaVertical = styled.View`
  position: absolute;
  left: 12px;
  top: -18px;
  bottom: 0;
  margin-left: 23px;
  width: 2px;
  height: 160px;
  background-color: #BABABA;
`;

export const StepContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 24px;
`;

export const StepMarker = styled.View`
  width: 24px; 
  align-items: center;  
`;


export const Bolinha = styled(
  LinearGradient as React.ComponentType<Partial<LinearGradientProps>>
).attrs({
  colors: ['#FF881F', '#FA641E'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  width: 15px;
  height: 15px;
  border-radius: 8px;
  margin-top: 5px;
  margin-bottom: 8px;
`;


export const BolinhaMenor = styled.View`
  width: 8px;
  height: 8px;
  border: solid 1px ${colors.orange};
  border-radius: 4px;
  background-color: ${colors.white};
  margin-top: 12px; 
`;

export const StepContent = styled.View`
  flex: 1;
  padding-left: 8px;
`;

export const CheckpointTitulo = styled.Text`
  font-family: 'Poppins_500Medium';
  font-size: 18px;
  color: ${colors.orange};
  margin-bottom: 4px;
`;

export const CheckpointText = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 14px;
  color: ${colors.grayDark};
`;

export const ButtonContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;


export const Button = styled(LinearGradient as React.ComponentType<Partial<LinearGradientProps>>).attrs({
  colors: ['#FF881F', '#FA641E'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  padding: 15px;
  border-radius: 20px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
`;

export const ButtonRejeitar = styled.TouchableOpacity`
  background-color: ${colors.white};
  border: solid 1px #E8453E;
  padding: 15px;
  border-radius: 20px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
`;

export const ButtonTextRjt = styled.Text`
  font-family: 'Poppins_500Medium';
  text-align: center;
  color: #E8453E;
  font-size: 16px;
`;

export const ButtonText = styled.Text`
  text-align: center;
  color: ${colors.white};
  font-family: 'Poppins_500Medium';
  font-size: 16px;
`;
