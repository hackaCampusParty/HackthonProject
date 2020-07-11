import React from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Header from '../../../../components/Header';

const Detials = ({ navigation: { dispatch, navigate } }) => {
  return (
    <>
      <Container>
        <Header dispatch={dispatch} />
        <StatusBar barStyle="light-content" backgroundColor="#00456a" />
      </Container>
    </>
  );
};

const mapStateToProps = () => ({});

Detials.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, {})(Detials);

const Container = styled.View`
  background-color: #f2f2f2;
  flex: 1;
  justify-content: center;
`;
