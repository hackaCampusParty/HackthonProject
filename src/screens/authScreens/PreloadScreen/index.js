import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

import { setPointsCollect } from '../../../store/actions/internal/setTexts';

import { getCollectPointsList } from '../../../store/actions/internal/functions';

const entrar = require('../../../assets/logo.png');

const PreloadScreen = ({
  setPointsCollect,
  logado,
  navigation: { dispatch },
}) => {
  useEffect(() => {
    getCollectPointsList(setPointsCollect);

    setTimeout(() => {
      if (logado === true) {
        dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'InternalApp' }],
          })
        );
      } else {
        dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'LoginScreen' }],
          })
        );
      }
    }, 2000);
  });

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#03989E" />
      <ImageContainer>
        <Imagem resizeMode="contain" source={entrar} />
      </ImageContainer>
    </Background>
  );
};

const mapStateToProps = ({ auth: { logado, email, password } }) => ({
  logado,
  email,
  password,
});

PreloadScreen.propTypes = {
  logado: PropTypes.bool,
  navigation: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};

PreloadScreen.defaultProps = {
  logado: false,
};

const mapDispatchToProps = {
  setPointsCollect,
};

export default connect(mapStateToProps, mapDispatchToProps)(PreloadScreen);

const Background = styled.View`
  flex: 1;
  background-color: #f2f2f2;
  justify-content: center;
  align-content: center;
`;

const Imagem = styled.Image`
  width: 80%;
`;

const ImageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
