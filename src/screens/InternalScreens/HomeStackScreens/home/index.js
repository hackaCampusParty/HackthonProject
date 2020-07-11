import React, { useCallback } from 'react';
import { StatusBar, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styled from 'styled-components/native';
import Header from '../../../../components/Header';

import { Item } from '../../../../components/Item';

// eslint-disable-next-line react/prop-types
const Home = ({ pointsCollectList, navigation: { dispatch, navigate } }) => {
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
        <Header name="Pontos de Coleta" dispatch={dispatch} />
        <StatusBar barStyle="light-content" backgroundColor="#03989E" />

        <ContainerFlat>
          <FlatList
            data={pointsCollectList}
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
  internal: { pointsCollectList },
}) => ({
  nomeCompleto,
  pointsCollectList,
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
  margin-top: 100px;
  justify-content: flex-start;
`;
