/* eslint-disable no-nested-ternary */
import React, { useRef, useEffect } from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import Input from '../../../components/Input';
import DropdownAlertCustom from '../../../components/DropdownAlert';

import { doRecoveryForgotPassword } from '../../../store/actions/auth/functions';
import {
  setEmail,
  setPassword,
  setLogado,
} from '../../../store/actions/auth/setTexts';

import firebase from '../../../api';

const LoginScreen = ({ email, setEmail, navigation: { navigate, goBack } }) => {
  useEffect(() => {
    // if (logado === true) {
    // 	navigate('IntroApp');
    // }

    // Apagar depois
    firebase.auth().signOut();
    setLogado(false);
  });

  let notification = useRef(null);

  const handleForgotPassword = () => {
    doRecoveryForgotPassword(email, navigate, notification);
  };

  const handleBack = () => {
    goBack();
  };

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#03989e" />

      <ContainerText>
        <Text>Caso Esqueceu Sua Senha,</Text>
        <Text>Preencha Abaixo Com Seu E-mail</Text>
      </ContainerText>

      <Input
        placeholder="exemplo@live.com"
        textInputValue="Email"
        value={email}
        onChangeText={setEmail}
        onSubmitEditing={handleForgotPassword}
      />

      <Button onPress={handleForgotPassword} laranja>
        <TextButton>Redefinir</TextButton>
      </Button>

      <Button onPress={() => handleBack()} laranja semfundo>
        <TextButton semFundo>Voltar</TextButton>
      </Button>
      <DropdownAlertCustom
        paramRef={(ref) => {
          notification = ref;
        }}
        color="#00456a"
        inactiveStatusBarStyle="light-content"
      />
    </Background>
  );
};

const mapStateToProps = ({ auth: { logado, email, password } }) => ({
  logado,
  email,
  password,
});

const mapDispatchToProps = {
  setLogado,
  setEmail,
  setPassword,
};

LoginScreen.propTypes = {
  email: PropTypes.string,
  setEmail: PropTypes.func,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

LoginScreen.defaultProps = {
  email: '',
  setEmail: undefined,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const Background = styled.View`
  flex: 1;
  background-color: #f2f2f2;
  justify-content: center;
`;

const Button = styled.TouchableOpacity`
  background-color: ${(props) =>
    props.laranja ? (props.semfundo ? 'transparent' : '#03989e') : '#EFEFEF'};
  border-radius: 40px;
  padding: 10px 0 10px 0;
  margin: 20px 65px 5px 65px;
`;

const TextButton = styled.Text`
  color: ${(props) => (props.semFundo ? '#ff914d' : '#EFEFEF')};
  border-width: ${(props) => (props.semFundo ? '4px' : '0')};
  border-radius: ${(props) => (props.semFundo ? '40px' : '0')};
  padding: ${(props) => (props.semFundo ? '15px 0 10px 0' : '6px 0 6px 0')};
  border-color: ${(props) => (props.semFundo ? '#ff914d' : 'transparent')};
  font-weight: bold;
  text-align: center;
  font-size: 21px;
`;

const ContainerText = styled.View`
  margin-bottom: 20px;
`;

const Text = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #03989e;
`;
