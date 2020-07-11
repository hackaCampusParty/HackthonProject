import React, { useRef } from 'react';
import { StatusBar, ScrollView } from 'react-native';

import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import Input from '../../../components/Input';
import DropdownAlertCustom from '../../../components/DropdownAlert';

import { doLogin } from '../../../store/actions/auth/functions';
import {
  setNomeCompleto,
  setCNPJ,
  setEmail,
  setPassword,
  setLogado,
} from '../../../store/actions/auth/setTexts';

const entrar = require('../../../assets/logo.png');

const LoginScreen = ({
  setLogado,
  setNomeCompleto,
  setCNPJ,
  email,
  setEmail,
  password,
  setPassword,
  navigation: { navigate },
}) => {
  const passwordRef = useRef('');
  let notification = useRef(null);

  const handleSubmit = () => {
    doLogin(setLogado, email, password, notification, setNomeCompleto, setCNPJ);
  };

  const handleSignUp = () => {
    navigate('SignUpScreen');
  };

  const handleForgotPassword = () => {
    navigate('ForgotPassword');
  };

  return (
    <Background>
      <ScrollView>
        <StatusBar barStyle="light-content" backgroundColor="#03989E" />
        <ImageContainer>
          <Imagem resizeMode="contain" source={entrar} />
        </ImageContainer>

        <Input
          placeholder="exemplo@live.com"
          textInputValue="Email"
          value={email}
          onChangeText={setEmail}
          onSubmitEditing={() => {
            const { current } = passwordRef;
            current.focus();
          }}
        />

        <Input
          placeholder="*******"
          textInputValue="Password"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
          inputRef={passwordRef}
          onSubmitEditing={handleSubmit}
        />
        <ButtonForgot onPress={handleForgotPassword}>
          <Text>Esqueceu a senha?</Text>
        </ButtonForgot>

        <Button onPress={handleSubmit} laranja>
          <TextButton laranja>Entrar</TextButton>
        </Button>

        <Button onPress={() => handleSignUp()}>
          <TextButton>Cadastre-se</TextButton>
        </Button>

        <DropdownAlertCustom
          paramRef={(ref) => {
            notification = ref;
          }}
          color="#03989E"
          inactiveStatusBarStyle="light-content"
        />
      </ScrollView>
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
  setNomeCompleto,
  setCNPJ,
  setEmail,
  setPassword,
};

LoginScreen.propTypes = {
  email: PropTypes.string,
  setEmail: PropTypes.func,
  setNomeCompleto: PropTypes.func.isRequired,
  setCNPJ: PropTypes.func.isRequired,
  password: PropTypes.string,
  setPassword: PropTypes.func,
  setLogado: PropTypes.func,
  navigation: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

LoginScreen.defaultProps = {
  email: '',
  setEmail: undefined,
  password: '',
  setPassword: undefined,

  setLogado: undefined,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const Background = styled.View`
  flex: 1;
  background-color: #f2f2f2;
  justify-content: center;
  align-content: center;
`;

const Text = styled.Text`
  text-align: right;
  margin-right: 40px;
  color: #ff914d;
  font-size: 18px;
  font-weight: bold;
`;

const Button = styled.TouchableOpacity`
  background-color: ${(props) => (props.laranja ? '#03989E' : 'transparent')};
  border: 2px solid ${(props) => (props.laranja ? 'transparent' : '#ff914d')};
  border-radius: 40px;
  padding: 10px 0 10px 0;
  margin: 20px 65px 5px 65px;
`;

const ButtonForgot = styled.TouchableOpacity`
  left: -10px;
`;

const TextButton = styled.Text`
  color: ${(props) => (props.laranja ? '#f2f2f2' : '#ff914d')};
  font-weight: bold;
  text-align: center;
  font-size: 21px;
`;

const Imagem = styled.Image`
  width: 80%;
`;

const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
