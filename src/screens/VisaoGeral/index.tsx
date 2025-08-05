import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View, Text } from 'react-native';
import * as S from './styles';
import { CardWrapper } from '../../styles/CardWrapper';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes';


const BackIcon = require('../../../assets/backIcons/arrow_back_black_24dp.png');
const IconQRCode = require('../../../assets/qrcodeIcons/Grupo9638.png');
const IconRelatorios = require('../../../assets/relatoriosIcons/Grupo3684.png');
const IconVisaoGeralNav = require('../../../assets/visaoGeralIcons/Grupo3687.png');
const IconPerfil = require('../../../assets/perfilIcons/Grupo3686.png');

const Eye = require('../../../assets/Eye/icons8-visível-96.png');
const EyeOff = require('../../../assets/Eye/icons8-invisible-96.png');

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'VisaoGeral' 
>;

const { height: H, width: W } = Dimensions.get('window');
const isSmallScreen = H < 700;

const cardWidth = W - 48; 
const cardHeightIniciar = isSmallScreen ? 186 : 206;
const cardHeightResumos = isSmallScreen ? 166 : 184;

const VisaoGeral = () => {

  const [mostrarGanhos, setMostrarGanhos] = useState(false);
   const navigation = useNavigation<NavigationProp>();

const alternarVisibilidade = () => {
  setMostrarGanhos(prev => !prev);
};

  return (
    <S.Container>
      <ScrollView showsVerticalScrollIndicator={false}>

    <S.TitleRow>
      <S.IconBack source={BackIcon} />
      <S.Title>Visão geral</S.Title>
    </S.TitleRow>

        <S.CardGanhos>
          <S.RowBetween>
            <S.SubtitleGanhos>Ganhos do Dia</S.SubtitleGanhos>
            <S.DateText>29/07</S.DateText>
          </S.RowBetween>
          <View style={{ position: 'relative', height: 50 }}>
            <S.ValueText>{mostrarGanhos ? 'R$ 150' : '----'}</S.ValueText>

            <TouchableOpacity onPress={alternarVisibilidade} style={{ position: 'absolute', left: 280, top: 17,}}>
              <S.StyledImage
                source={mostrarGanhos ? Eye : EyeOff} 
                style={{ width: 26, height: 26 }}
              />
            </TouchableOpacity>
          </View>
        </S.CardGanhos>
        <CardWrapper
          style={{
            padding: 16,
            marginTop: isSmallScreen ? 24 : 32,
            width:  cardWidth,
            height: cardHeightResumos,
          }}>
          <S.Subtitle>Resumos de Entregas</S.Subtitle>
          <S.Grid>
            <S.DeliveryCard>
              <S.CardTitle>Aceitas</S.CardTitle>
              <S.CardValue>15</S.CardValue>
            </S.DeliveryCard>
            <S.DeliveryCard>
              <S.CardTitle>Rejeitadas</S.CardTitle>
              <S.CardValue>5</S.CardValue>
            </S.DeliveryCard>
            <S.DeliveryCard>
              <S.CardTitle>Total</S.CardTitle>
              <S.CardValue>20</S.CardValue>
            </S.DeliveryCard>
          </S.Grid>
        </CardWrapper>


        <CardWrapper
          style={{
            padding: 16,
            marginTop: isSmallScreen ? 24 : 32,
            width: cardWidth,
            height: cardHeightIniciar,
          }}
        >
          <S.Subtitle>Iniciar Nova Entrega</S.Subtitle>

          <S.Label>Numero de Identificação</S.Label>

          <S.InputRow>
            <S.Input placeholder="Digite o número" />
            <S.OkButton onPress={() => navigation.navigate('NovaEntrega')}>
              <S.OkButtonText>OK</S.OkButtonText>
            </S.OkButton>
          </S.InputRow>

          <S.ScanButton>
            <S.StyledImage
              source={IconQRCode}
              style={{ width: 20, height: 20, marginRight: 8 }}
            />
            <S.ScanButtonText>Escanear Qrcode</S.ScanButtonText>
          </S.ScanButton>
        </CardWrapper>

      </ScrollView>

    <S.BottomNav>
      <S.NavItem style={{ marginRight: 20 }}>
        <S.StyledImage source={IconRelatorios} style={{ width: 28, height: 28, marginBottom: 4 }} />
        <S.NavText>Relatórios</S.NavText>
      </S.NavItem>
      <S.NavItem style={{ marginRight: 20 }}>
        <S.StyledImage source={IconVisaoGeralNav} style={{ width: 28, height: 28, marginBottom: 4}} />
        <S.NavTextSelectd>Visão geral</S.NavTextSelectd>
      </S.NavItem>
      <S.NavItem style={{ marginLeft: 25 }}>
        <S.StyledImage source={IconPerfil} style={{ width: 28, height: 28, marginBottom: 4 }} />
        <S.NavText>Perfil</S.NavText>
      </S.NavItem>
    </S.BottomNav>
    </S.Container>
  );
};

export default VisaoGeral;
