/* eslint-disable no-nested-ternary */
import React, { useRef } from 'react';
import { StatusBar, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import Input from '../../../components/Input';
import DropdownAlertCustom from '../../../components/DropdownAlert';

import {
  setEmail,
  setPassword,
  setNomeCompleto,
  setCNPJ,
  setLogado,
} from '../../../store/actions/auth/setTexts';

import { doSignUp } from '../../../store/actions/auth/functions';

const LoginScreen = ({
  setLogado,
  nomeCompleto,
  setNomeCompleto,
  email,
  setEmail,
  CNPJ,
  setCNPJ,
  password,
  setPassword,
  navigation: { goBack },
}) => {
  const emailRef = useRef('');
  let cnpjRef = useRef('');
  const passwordRef = useRef('');

  let notification = useRef(null);

  const handleSubmit = () => {
    doSignUp(setLogado, email, password, CNPJ, nomeCompleto, notification);
  };

  const handleBack = () => {
    goBack();
  };

  return (
    <Background>
      <ScrollView>
        <StatusBar barStyle="light-content" backgroundColor="#03989e" />

        <ContainerTitle>
          <Texto>Cadastre-se</Texto>
        </ContainerTitle>

        <Input
          first
          textInputValue="Razão social"
          value={nomeCompleto}
          onChangeText={setNomeCompleto}
          onSubmitEditing={() => {
            const { current } = emailRef;
            current.focus();
          }}
        />

        <Input
          textInputValue="Email"
          value={email}
          onChangeText={setEmail}
          inputRef={emailRef}
          onSubmitEditing={() => cnpjRef.focus()}
        />

        <Input
          identity
          textInputValue="CNPJ"
          value={CNPJ}
          onChangeText={setCNPJ}
          inputRef={(ref) => {
            cnpjRef = ref;
          }}
          onSubmitEditing={() => {
            const { current } = passwordRef;
            current.focus();
          }}
        />

        <Input
          placeholder="*******"
          textInputValue="Password"
          value={password}
          onChangeText={setPassword}
          inputRef={passwordRef}
          onSubmitEditing={handleSubmit}
        />

        <Button onPress={handleSubmit} laranja>
          <TextButton laranja>Cadastrar</TextButton>
        </Button>

        <Button onPress={handleBack} laranja semfundo>
          <TextButton laranja semFundo>
            Voltar
          </TextButton>
        </Button>
        <DropdownAlertCustom
          paramRef={(ref) => {
            notification = ref;
          }}
          color="#03989e"
          inactiveStatusBarStyle="light-content"
        />
      </ScrollView>
    </Background>
  );
};

const mapStateToProps = ({
  auth: { nomeCompleto, email, CNPJ, password },
}) => ({
  nomeCompleto,
  email,
  CNPJ,
  password,
});

const mapDispatchToProps = {
  setLogado,
  setEmail,
  setPassword,
  setNomeCompleto,
  setCNPJ,
};

LoginScreen.propTypes = {
  setLogado: PropTypes.func.isRequired,
  nomeCompleto: PropTypes.string,
  setNomeCompleto: PropTypes.func.isRequired,
  email: PropTypes.string,
  setEmail: PropTypes.func.isRequired,
  CNPJ: PropTypes.string,
  setCNPJ: PropTypes.func.isRequired,
  password: PropTypes.string,
  setPassword: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

LoginScreen.defaultProps = {
  email: '',
  nomeCompleto: '',
  password: '',
  CNPJ: '',
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
  color: ${(props) => (props.laranja ? '#f2f2f2' : '#03989e ')};
  border-width: ${(props) => (props.semFundo ? '4px' : '0')};
  border-radius: ${(props) => (props.semFundo ? '40px' : '0')};
  padding: ${(props) => (props.semFundo ? '15px 0 10px 0' : '5px 0 5px 0')};
  border-color: ${(props) => (props.semFundo ? '#f2f2f2' : 'undefined')};
  font-weight: bold;
  text-align: center;
  font-size: 21px;
`;

const ContainerTitle = styled.View`
  justify-content: center;
  margin-top: 30px;
  align-items: center;
`;

const Texto = styled.Text`
  font-size: 40px;
`;
