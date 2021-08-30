import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title, MediumText, SmallText } from 'components/Text';
import Favourite from 'components/Favourite';
import IconNumber from 'components/IconNumber';
import book from 'assets/icones/book/book.svg';
import video from 'assets/icones/video/video.svg';
import { injectIntl, intlShape } from 'react-intl';
import Rating from 'components/Rating';
import messages from './messages';

const HeroDetailStyled = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto auto auto;
  row-gap: 20px;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & > div {
      width: 50%;
    }

    & > button {
      margin-left: 10px;
    }
  }

  & > div:last-of-type {
    justify-content: flex-start;
    & > div {
      margin-left: 10px;
    }
  }
`;

function HeroDetail(props) {
  const {
    hero,
    lastComic,
    intl,
    bookText,
    seriesText,
    ratingText,
    lastComicText,
  } = props;

  const dateText =
    (lastComic &&
      new Intl.DateTimeFormat('pt', { dateStyle: 'medium' }).format(
        new Date(lastComic),
      )) ||
    '';

  const fixedRating =
    hero &&
    (hero.id
      .toString()
      .split('')
      .reduce((a, b) => parseInt(a, 10) + parseInt(b, 10), 0) %
      10) /
      2;

  return (
    <>
      {(hero && (
        <HeroDetailStyled>
          <div>
            <Title fontWeight="bold" textAlign="left">
              {hero.name}
            </Title>
            <Favourite hero={hero} />
          </div>
          <MediumText colour="secondaryTextColour">
            {hero.description}
          </MediumText>
          <div>
            <IconNumber
              label={bookText || intl.formatMessage(messages.comics)}
              number={hero.comics.available}
              icon={book}
              alt="Icone Livro"
            />
            <IconNumber
              label={seriesText || intl.formatMessage(messages.series)}
              number={hero.series.available}
              icon={video}
              alt="Icone Vídeo"
            />
          </div>
          <div>
            <SmallText fontWeight="bold">
              {ratingText || intl.formatMessage(messages.rating)}
            </SmallText>
            <Rating score={fixedRating} />
          </div>
          <SmallText>
            <b>{lastComicText || intl.formatMessage(messages.lastComic)}</b>{' '}
            {dateText || 'Sem quadrinhos'}
          </SmallText>
        </HeroDetailStyled>
      )) || <p>Carregando...</p>}
    </>
  );
}

HeroDetail.propTypes = {
  hero: PropTypes.object,
  lastComic: PropTypes.string,
  intl: intlShape.isRequired,
  bookText: PropTypes.string,
  seriesText: PropTypes.string,
  ratingText: PropTypes.string,
  lastComicText: PropTypes.string,
};

export default injectIntl(HeroDetail);
