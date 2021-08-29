import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import clear from 'assets/review/clear.svg';
import full from 'assets/review/full.svg';

const RatingStyled = styled.div`
  display: block;

  & > img {
    height: 100%;
  }
`;

function Rating(props) {
  const { alt } = props;

  return (
    <RatingStyled>
      <img src={clear} alt={alt} />
      <img src={full} alt={alt} />
    </RatingStyled>
  );
}

Rating.propTypes = {
  alt: PropTypes.string,
};

export default Rating;
