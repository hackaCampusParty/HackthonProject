import React from 'react';
import styled from 'styled-components';
import { DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ({ laranja, checkin, back, name, dispatch, goBack }) => {
  if (checkin) {
    return (
      <ContainerMenu>
        <ContainerArrow onPress={() => goBack()}>
          <Icon name="arrow-left" size={30} color="#fff" />
        </ContainerArrow>
        <Texto>Check-In</Texto>
        <ContainerIconDrawerScreen
          onPress={() => dispatch(DrawerActions.openDrawer())}
        >
          <Icon name="navicon" size={30} color="#fff" />
        </ContainerIconDrawerScreen>
      </ContainerMenu>
    );
  }
  if (back) {
    return (
      <ContainerMenu laranja={laranja}>
        <ContainerArrow onPress={() => goBack()}>
          <Icon name="arrow-left" size={30} color="#707070" />
        </ContainerArrow>
        <ContainerIconDrawerScreen
          onPress={() => dispatch(DrawerActions.openDrawer())}
        >
          <Icon name="navicon" size={30} color="#707070" />
        </ContainerIconDrawerScreen>
      </ContainerMenu>
    );
  }

  if (laranja) {
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

const ContainerMenu = styled.View`
  flex: 1;
  margin: 20px;
  justify-content: space-between;
  flex-direction: row;
`;

const Texto = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
`;

const WelcomeMessage = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 25px;
  margin: 20px 0 30px 0;
  text-align: center;
`;

const ContainerIcon = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  top: 10px;
`;

const ContainerIconLaranja = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  top: 20px;
`;

const ContainerIconDrawerScreen = styled.TouchableOpacity`
  right: 10px;
`;

const ContainerArrow = styled.TouchableOpacity``;

const ContainerArrowLeft = styled.TouchableOpacity`
  left: 20px;
  top: 20px;
  position: absolute;
`;
