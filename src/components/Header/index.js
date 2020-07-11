import React from 'react';
import styled from 'styled-components';
import { DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ({ dataDown, azul, laranja, name, dispatch, goBack }) => {
  const date = new Date();

  const diaAtual = date.getDate();

  const mesAtual = date.getMonth();

  const dataAtual = `< Hoje, ${diaAtual}/${mesAtual} >`;
  if (azul) {
    return (
      <Container laranja={laranja}>
        <ContainerArrowLeft onPress={() => goBack()}>
          <Icon name="arrow-left" size={30} color="#f2f2f2" />
        </ContainerArrowLeft>
        <WelcomeMessage> Check-in </WelcomeMessage>
        <ContainerIconLaranja
          onPress={() => dispatch(DrawerActions.openDrawer())}
        >
          <Icon name="navicon" size={30} color="#f2f2f2" />
        </ContainerIconLaranja>
      </Container>
    );
  }
  if (dataDown) {
    return (
      <Container laranja={laranja}>
        <ContainerArrowLeft onPress={() => goBack()}>
          <Icon name="arrow-left" size={30} color="#f2f2f2" />
        </ContainerArrowLeft>
        <ContainerMessage>
          <WelcomeMessageDataTitle>{name}</WelcomeMessageDataTitle>
          <WelcomeMessageData>{dataAtual}</WelcomeMessageData>
        </ContainerMessage>
      </Container>
    );
  }

  return (
    <Container>
      <WelcomeMessage>{name}</WelcomeMessage>
    </Container>
  );
};

const Container = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  justify-content: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: ${(props) => (props.laranja ? '#FF6E62' : '#03989E')};
  flex-direction: row;
`;

const ContainerMessage = styled.View`
  flex: 1;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  flex-direction: column;
`;

const WelcomeMessageDataTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
`;

const WelcomeMessage = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 25px;
  margin: 20px 0 30px 0;
  text-align: center;
`;

const ContainerIconLaranja = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  top: 20px;
`;

const ContainerArrowLeft = styled.TouchableOpacity`
  left: 20px;
  z-index: 2;
  top: 20px;
  position: absolute;
`;

const WelcomeMessageData = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;
