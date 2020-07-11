import React, { useCallback } from 'react';
import { StatusBar, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Header from '../../../../components/Header';

import { Item } from '../../../../components/Item';

// eslint-disable-next-line react/prop-types
const Home = ({ collectPointsList, navigation: { dispatch, navigate } }) => {
  const date = new Date();

  const diaAtual = date.getDate();

  const mesAtual = date.getMonth();

  const dataAtual = `< Hoje, ${diaAtual}/${mesAtual} >`;

  const [selected, setSelected] = React.useState(new Map());

  const onSelect = useCallback(
    (id) => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected]
  );

  return (
    <>
      <Container>
        <Header name={dataAtual} dispatch={dispatch} />
        <StatusBar barStyle="light-content" backgroundColor="#00456a" />
        <ContainerFlat>
          <FlatList
            data={collectPointsList}
            renderItem={({ item }) => (
              <Item
                navigate={navigate}
                data={item}
                selected={!!selected.get(item.id)}
                onSelect={onSelect}
                setSelected={setSelected}
              />
            )}
            keyExtractor={(item) => item.id}
            extraData={selected}
          />
        </ContainerFlat>
      </Container>
    </>
  );
};

const mapStateToProps = ({
  auth: { nomeCompleto },
  internal: { collectPointsList },
}) => ({
  nomeCompleto,
  collectPointsList,
});

Home.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, {})(Home);

const Container = styled.View`
  background-color: #f2f2f2;
  flex: 1;
  justify-content: center;
`;

const ContainerFlat = styled.View`
  flex: 1;
  justify-content: flex-start;
`;
