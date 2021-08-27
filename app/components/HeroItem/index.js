import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colours from 'config/colours';
import { MediumText } from 'components/Text';
import Favourite from 'components/Favourite';
import { Link } from 'react-router-dom';

const HeroItemStyled = styled.div`
  width: 100%;

  & > a {
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
    width: 100%;

    & > img {
      width: 100%;
      border-bottom: 3px ${colours.primaryColour} solid;
    }
  }

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;

    & > p {
      margin-right: 10px;
    }
  }
`;

function HeroItem(props) {
  const { data } = props;
  return (
    <HeroItemStyled>
      <Link to={`/${data.id}`}>
        <img
          src={`${data.thumbnail.path}/standard_xlarge.${
            data.thumbnail.extension
          }`}
          alt={data.name}
        />
      </Link>
      <div>
        <MediumText fontWeight="bold">{data.name}</MediumText>
        <Favourite hero={data} />
      </div>
    </HeroItemStyled>
  );
}

HeroItem.propTypes = {
  data: PropTypes.object,
};

export default HeroItem;
