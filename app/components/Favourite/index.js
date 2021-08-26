import React, { useState, useEffect } from 'react';
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
  const { hero } = props;
  const [isFavourite, setIsFavourite] = useState(undefined);

  useEffect(() => {
    setIsFavourite(
      (JSON.parse(localStorage.getItem('favHeroes')) || []).find(
        item => item.id === hero.id,
      ),
    );
  }, [hero]);

  const setFavourite = () => {
    let currentFav = JSON.parse(localStorage.getItem('favHeroes')) || [];
    if (isFavourite) {
      currentFav = currentFav.filter(item => item.id !== hero.id);
      setIsFavourite(false);
    } else {
      if (currentFav.length >= 5) {
        // const removed = currentFav.shift();
        // console.log('shift: ', currentFav);
        return;
      }
      currentFav.push({
        id: hero.id,
        name: hero.name,
        modified: hero.modified,
        thumbnail: hero.thumbnail,
      });
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
  hero: PropTypes.object.isRequired,
};

export default Favourite;
