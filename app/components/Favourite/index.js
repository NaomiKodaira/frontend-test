import React, { useState } from 'react';
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
  const { heroId } = props;
  const [isFavourite, setIsFavourite] = useState(
    (JSON.parse(localStorage.getItem('favHeroes')) || []).find(
      item => item === heroId,
    ),
  );

  const setFavourite = () => {
    let currentFav = JSON.parse(localStorage.getItem('favHeroes')) || [];
    if (isFavourite) {
      currentFav = currentFav.filter(item => item !== heroId);
      setIsFavourite(false);
    } else {
      if (currentFav.length >= 5) {
        // const removed = currentFav.shift();
        // console.log('shift: ', currentFav);
        return;
      }
      currentFav.push(heroId);
      setIsFavourite(true);
    }
    localStorage.setItem('favHeroes', JSON.stringify(currentFav));
  };

  return (
    <FavouriteStyled favourite={isFavourite} onClick={() => setFavourite()}>
      <img src={outline} alt="Favoritar" />
      <img src={full} alt="Favoritado" />
    </FavouriteStyled>
  );
}

Favourite.propTypes = {
  heroId: PropTypes.number.isRequired,
};

export default Favourite;
