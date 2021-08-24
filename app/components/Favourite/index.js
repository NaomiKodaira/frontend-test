import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import outline from 'assets/icones/heart/outline.svg';
import full from 'assets/icones/heart/full.svg';

const FavouriteStyled = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  height: 20px;
  width: 20px;
  cursor: pointer;

  & > img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  & > img:last-child {
    opacity: ${props => (props.favourite && 1) || 0};
    transition: opacity 250ms;
  }
`;

function Favourite(props) {
  const { favourite, setFavourite } = props;
  return (
    <FavouriteStyled
      favourite={favourite}
      onClick={() => setFavourite(!favourite)}
    >
      <img src={outline} alt="Favoritar" />
      <img src={full} alt="Favoritado" />
    </FavouriteStyled>
  );
}

Favourite.propTypes = {
  favourite: PropTypes.bool,
  setFavourite: PropTypes.func,
};

Favourite.defaultProps = {
  favourite: false,
  setFavourite: () => {},
};

export default Favourite;
