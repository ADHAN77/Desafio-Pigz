import React from 'react';
import * as S from './styles';

const BackIcon = require('../../../assets/backIcons/arrow_back_black_24dp.png');
const CheckIcon = require('../../../assets/checkIcon/Grupo9637.png');
const CloseIcon = require('../../../assets/closeIcon/close_black_24dp.png');
const DeliveryIcon = require('../../../assets/deliveryIcons/delivery_dining_black_24dp.png');

export default function NovaEntrega() {
  return (
    <S.Container>
      <S.TitleRow>
        <S.BackIcon>
          <S.IconBack source={BackIcon} />
        </S.BackIcon>
        <S.Title>Nova Entrega</S.Title>
      </S.TitleRow>
      <S.InfoRow>
        <S.InfoBlock style={{ marginRight: 10 }}>
          <S.InfoTitle>Tempo Estimado</S.InfoTitle>
          <S.InfoValue>30 Min</S.InfoValue>
        </S.InfoBlock>
        <S.InfoBlock>
          <S.InfoTitle>Número de ID</S.InfoTitle>
          <S.InfoValue>#6789</S.InfoValue>
        </S.InfoBlock>
      </S.InfoRow>

      <S.Divider />

      <S.ValorEntregaTitulo>Valor da Entrega</S.ValorEntregaTitulo>
      <S.ValorEntrega>R$ 13,75</S.ValorEntrega>

      <S.EntregaCheckpointsWrapper>
  <S.EntregaContainer>
    <S.Icon source={DeliveryIcon} />
    <S.EntregaTextoWrapper>
      <S.EntregaTitulo>Entrega</S.EntregaTitulo>
      <S.EntregaSubTitulo>Percurso Total: 8km</S.EntregaSubTitulo>
    </S.EntregaTextoWrapper>
  </S.EntregaContainer>

  <S.CheckpointsContainer>
    <S.LinhaVertical />

    {/* Etapa: Coleta */}
    <S.StepContainer>
      <S.StepMarker>
        <S.Bolinha />
        <S.BolinhaMenor />
      </S.StepMarker>
      <S.StepContent>
        <S.CheckpointTitulo>Coleta</S.CheckpointTitulo>
        <S.CheckpointText>
          Restaurante Recanto da Peixada{"\n"}Distância: 2km
        </S.CheckpointText>
      </S.StepContent>
    </S.StepContainer>

    {/* Etapa: Entrega */}
    <S.StepContainer>
      <S.StepMarker>
        <S.Bolinha />
        <S.BolinhaMenor />
      </S.StepMarker>
      <S.StepContent>
        <S.CheckpointTitulo>Entrega</S.CheckpointTitulo>
        <S.CheckpointText>
          Av: Cabo dos Soldados - Caranã{"\n"}Distância: 6km
        </S.CheckpointText>
      </S.StepContent>
    </S.StepContainer>
  </S.CheckpointsContainer>
</S.EntregaCheckpointsWrapper>

<S.Button>
  <S.ButtonContent>
    <S.Icon source={CheckIcon} />
    <S.ButtonText>Aceitar</S.ButtonText>
  </S.ButtonContent>
</S.Button>

<S.ButtonRejeitar>
  <S.ButtonContent>
    <S.Icon source={CloseIcon} />
    <S.ButtonTextRjt>Rejeitar</S.ButtonTextRjt>
  </S.ButtonContent>
</S.ButtonRejeitar>
    </S.Container>
  );
}

