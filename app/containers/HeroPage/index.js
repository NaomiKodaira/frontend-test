import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import api from 'api';
import { MediumText, LargeText } from 'components/Text';
// import styled from 'styled-components';
import Layout from 'components/Layout';
import colours from 'config/colours';
import ComicList from 'components/ComicList';
import messages from './messages';
// const HeroPageStyled = styled.div``;

export default function HeroPage(props) {
  const { match } = props;
  const { heroId } = match.params;

  const [hero, setHero] = useState({});
  const [comics, setComics] = useState([]);

  async function getHero() {
    // setLoading(true);
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
      .getCharacterComics(heroId, { orderBy: 'onsaleDate', limit: '10' })
      .then(response => {
        setComics(response.data.results);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        // setLoading(false);
      });
  }

  useEffect(() => {
    getHero();
  }, []);

  return (
    <Layout backgroundColour={colours.accentColour}>
      <div>
        <MediumText>Hero Page {heroId}</MediumText>
        <MediumText>{JSON.stringify(hero)}</MediumText>
      </div>
      <LargeText fontWeight="bold">
        <FormattedMessage {...messages.lastComicList} />
      </LargeText>
      <ComicList comics={comics} />
    </Layout>
  );
}

HeroPage.propTypes = {
  match: PropTypes.object,
};
