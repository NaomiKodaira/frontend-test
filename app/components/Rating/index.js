import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import fiveClear from 'assets/review/fiveClear.svg';
import fiveFull from 'assets/review/fiveFull.svg';

const RatingStyled = styled.div`
  display: block;
  position: relative;
  width: auto !important;

  & > img {
    height: 1rem;
  }

  & > div {
    position: absolute;
    width: ${props => props.score}%;
    height: 100%;
    left: 0;
    top: 0;
    overflow: hidden;

    & > img {
      height: 1rem;
    }
  }
`;

function Rating(props) {
  const { score } = props;

  return (
    <RatingStyled score={score * 20}>
      <img src={fiveClear} alt={score} />
      <div>
        <img src={fiveFull} alt={score} />
      </div>
    </RatingStyled>
  );
}

Rating.propTypes = {
  score: PropTypes.number,
};

Rating.defaultProps = {
  score: 0,
};

export default Rating;
