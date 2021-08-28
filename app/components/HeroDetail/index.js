import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title, MediumText, SmallText } from 'components/Text';
import Favourite from 'components/Favourite';
import IconNumber from 'components/IconNumber';
import book from 'assets/icones/book/book.svg';
import video from 'assets/icones/video/video.svg';

const HeroDetailStyled = styled.div`
  display: grid;
  template-grid-rows: auto 1fr auto auto auto;
  row-gap: 15px;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & > div {
      width: 50%;
    }
  }
`;

function HeroDetail(props) {
  const { hero, lastComic } = props;

  return (
    (hero && (
      <HeroDetailStyled>
        <div>
          <Title fontWeight="bold">{hero.name}</Title>
          <Favourite hero={hero} />
        </div>
        <MediumText colour="secondaryTextColour">{hero.description}</MediumText>
        <div>
          <IconNumber
            label="Quadrinhos"
            number={hero.comics.available}
            icon={book}
            alt="Icone Livro"
          />
          <IconNumber
            label="Series"
            number={hero.series.available}
            icon={video}
            alt="Icone Vídeo"
          />
        </div>
        <SmallText fontWeight="bold">Rating: star</SmallText>
        <SmallText fontWeight="bold">Ultimo quadrinho: {lastComic}</SmallText>
      </HeroDetailStyled>
    )) || <p>Carregando...</p>
  );
}

HeroDetail.propTypes = {
  hero: PropTypes.object,
  lastComic: PropTypes.string,
};

export default HeroDetail;
