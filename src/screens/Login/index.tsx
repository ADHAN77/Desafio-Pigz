import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes';
import * as S from './styles';
import { HeaderWrapper } from './styles';

const logo = require('../../../assets/logoPigz/pigz-logotipo-branco.png');
const IconGoogle = require('../../../assets/Icon_google/logo_googleg_48dp.png');
import Eye    from '../../../assets/Eye/eye.svg';
import EyeOff from '../../../assets/Eye/eye-off.svg';


type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
  const navigation = useNavigation<NavigationProp>();
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
      {/* aqui usamos o wrapper */}
      <S.InputWrapper>
        <S.PasswordInput
          placeholder="********"
          secureTextEntry={!showPassword}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={() => setShowPassword(v => !v)}>
          {showPassword
            ? <EyeOff width={24} height={24} fill="#333" />
            : <Eye    width={24} height={24} fill="#333" />
          }
        </TouchableOpacity>
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
