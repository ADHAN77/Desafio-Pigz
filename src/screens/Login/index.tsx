import React, { useState } from 'react';
import { TouchableOpacity, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes';
import * as S from './styles';
import { HeaderWrapper } from './styles';
import { Image } from 'react-native'

const logo = require('../../../assets/logoPigz/pigz-logotipo-branco.png');
const IconGoogle = require('../../../assets/Icon_google/logo_googleg_48dp.png');
const Eye = require('../../../assets/Eye/eye.png');
const EyeOff = require('../../../assets/Eye/eye-off.png');


type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
  const navigation = useNavigation<NavigationProp>();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <S.Container>
      <HeaderWrapper>
        <S.Logo source={logo} resizeMode="contain" />
        <S.Subtitle>Para entregadores</S.Subtitle>
      </HeaderWrapper>

      <S.Title>Login</S.Title>

      <S.Label>Email ou Telefone</S.Label>
      <S.Input
        placeholder="example@pigz.com.br"
        keyboardType="email-address"
        autoCapitalize="none"
      />

    <S.Label style={{ marginTop: 16 }}>Senha</S.Label>
    <S.InputWrapper>
      <S.PasswordInput
        placeholder="********"
        secureTextEntry={!showPassword}
        autoCapitalize="none"
        value={password}
        onChangeText={setPassword}
      />
      <S.EyeButton onPress={() => setShowPassword(v => !v)}>
      {showPassword ? (
        <Image source={Eye} style={{ width: 24, height: 24 }} />
      ) : (
        <Image source={EyeOff} style={{ width: 24, height: 24 }} />
      )}
      </S.EyeButton>
    </S.InputWrapper>

      <TouchableOpacity>
        <S.Link>Esqueci minha senha</S.Link>
      </TouchableOpacity>

      <S.GradientButton>
        <S.Button onPress={() => navigation.navigate('VisaoGeral')}>
          <S.ButtonText>Entrar</S.ButtonText>
        </S.Button>
      </S.GradientButton>

      <S.RowCenter>
        <S.Text>Não tem uma conta? </S.Text>
        <TouchableOpacity><S.LinkCriar>Criar agora!</S.LinkCriar></TouchableOpacity>
      </S.RowCenter>

      <S.SocialRow>
        <S.SocialText>Entrar com</S.SocialText>
        <S.Line />
      </S.SocialRow>

      <TouchableOpacity>
        <S.GoogleButton>
          <S.GoogleIcon source={IconGoogle} resizeMode="contain" />
          <S.GoogleText>Continuar com o Google</S.GoogleText>
        </S.GoogleButton>
      </TouchableOpacity>
    </S.Container>
  );
}
