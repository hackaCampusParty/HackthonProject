import React from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Header from '../../../../components/Header';

const Detials = ({ navigation: { dispatch, goBack }, route }) => {
  const { data } = route.params;
  return (
    <>
      <Container>
        <Header
          dataDown
          name={data.nickname}
          dispatch={dispatch}
          goBack={goBack}
        />
        <StatusBar barStyle="light-content" backgroundColor="#03989E" />
        <IntraContainer>
          <TextDetalhes>Detalhes sobre o Ponto de Coleta:</TextDetalhes>
          <Text>{data.details} </Text>
        </IntraContainer>

        <FinalContainer>
          <ContainerTextWhats>
            <TextWhats>Whatsapp</TextWhats>
            <TextWhats>{data.whatsapp}</TextWhats>
          </ContainerTextWhats>
          <Button onPress={() => data.clicktochat}>
            <TextButton>Chat</TextButton>
          </Button>
        </FinalContainer>
      </Container>
    </>
  );
};

const mapStateToProps = () => ({});

Detials.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
    goback: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, {})(Detials);

const Container = styled.View`
  background-color: #f2f2f2;
  flex: 1;
  justify-content: center;
`;

const IntraContainer = styled.View`
  margin: 0 20px;
  padding: 20px;
  justify-content: center;
  background-color: #f9f9f9;
  elevation: 4;
  border-radius: 40px;
  border: 3px solid #00456a;
`;

const Text = styled.Text`
  text-align: left;
  font-size: 20px;
  color: #00456a;
  font-weight: bold;
`;

const TextDetalhes = styled.Text`
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color: #00456a;
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #03989e;
  padding: 20px 40px;
  border-radius: 20px;
`;

export const FinalContainer = styled.View`
  margin: 15px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const TextButton = styled.Text`
  text-align: left;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

const TextWhats = styled.Text`
  text-align: left;
  font-size: 20px;
  color: #03989e;
  font-weight: bold;
`;

const ContainerTextWhats = styled.View`
  justify-content: center;
  align-items: center;
`;
