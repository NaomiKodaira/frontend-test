import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeroItem from 'components/HeroItem';
import device from 'config/devices';
import { MediumText } from 'components/Text';

const HeroesListStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(${props => props.total}, auto);
  column-gap: 15px;
  row-gap: 25px;

  @media ${device.mobileM} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(${props => Math.ceil(props.total / 2)}, auto);
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(${props => Math.ceil(props.total / 4)}, auto);
  }
`;

function HeroesList(props) {
  const { heroes, loading } = props;

  return (
    <HeroesListStyled total={heroes && heroes.length}>
      {(loading && <MediumText>Carregando...</MediumText>) ||
        (heroes &&
          heroes.length !== 0 &&
          heroes.map(item => <HeroItem data={item} id={item.id} />))}
    </HeroesListStyled>
  );
}

HeroesList.propTypes = {
  heroes: PropTypes.object,
  loading: PropTypes.bool,
};

export default HeroesList;
