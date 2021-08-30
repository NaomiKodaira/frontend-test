import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import api from 'api';
import { LargeText } from 'components/Text';
import styled from 'styled-components';
import Layout from 'components/Layout';
import colours from 'config/colours';
import device from 'config/devices';
import ComicList from 'components/ComicList';
import HeroDetail from 'components/HeroDetail';
import BackgroundWord from 'components/BackgroundWord';
// import ImageMosaic from 'components/ImageMosaic';
import Loading from 'components/Loading';
import messages from './messages';

const HeroPageStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  z-index: 1;

  & > div:first-child {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    & > div:first-child {
      width: 100%;
    }

    & > div:nth-child(2) {
      height: 100%;
      display: none;
    }
  }

  & > div:last-child {
    margin-top: 30px;

    & > p {
      margin-bottom: 10px;
    }
  }

  @media (orientation: landscape) and ${device.tablet} {
    & > div:first-child {
      align-items: center;

      & > div:first-child {
        width: 30%;
        height: fit-content;
      }
      & > div:nth-child(2) {
        width: 70%;
        display: block;
      }
    }
  }
`;

export default function HeroPage(props) {
  const { match } = props;
  const { heroId } = match.params;

  const [hero, setHero] = useState(undefined);
  const [comics, setComics] = useState(undefined);
  const [loading, setLoading] = useState(false);

  async function getHero() {
    setLoading(true);
    await api
      .getCharacter(heroId)
      .then(response => {
        setHero(response.data.results[0]);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        // setLoading(false);
      });

    await api
      .getCharacterComics(heroId, { orderBy: '-onsaleDate', limit: '10' })
      .then(response => {
        setComics(response.data.results);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getHero();
  }, []);

  if (loading) {
    return (
      <Layout backgroundColour={colours.accentColour}>
        <Loading />
      </Layout>
    );
  }

  return (
    <Layout backgroundColour={colours.accentColour}>
      <HeroPageStyled>
        <div>
          <HeroDetail
            hero={hero}
            lastComic={
              comics &&
              comics.length !== 0 &&
              comics[0].dates.find(item => item.type === 'onsaleDate').date
            }
          />
          <div>{/* <ImageMosaic data={hero} /> */}</div>
          {hero && <BackgroundWord word={hero.name} />}
        </div>
        <div>
          <LargeText fontWeight="bold">
            <FormattedMessage {...messages.lastComicList} />
          </LargeText>
          <ComicList comics={comics} />
        </div>
      </HeroPageStyled>
    </Layout>
  );
}

HeroPage.propTypes = {
  match: PropTypes.object,
};
