import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colours from 'config/colours';
import { MediumText } from 'components/Text';
import Favourite from 'components/Favourite';

const HeroItemStyled = styled.div`
  width: 100%;

  & > img {
    width: 100%;
    border-bottom: 3px ${colours.primaryColour} solid;
  }

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
  }
`;

function HeroItem(props) {
  const { data } = props;
  return (
    <HeroItemStyled>
      <img
        src={`${data.thumbnail.path}/standard_xlarge.${
          data.thumbnail.extension
        }`}
        alt={data.name}
      />
      <div>
        <MediumText fontWeight="bold">{data.name}</MediumText>
        <Favourite heroId={data.id} />
      </div>
    </HeroItemStyled>
  );
}

HeroItem.propTypes = {
  data: PropTypes.object,
};

export default HeroItem;
