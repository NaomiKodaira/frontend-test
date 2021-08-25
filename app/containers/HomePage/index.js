/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import api from 'api';
import HeroesList from 'components/HeroesList';
import { MediumText } from 'components/Text';
import { IconLink } from 'components/Button';
import SearchBar from 'components/SearchBar';
import styled from 'styled-components';
import hero from 'assets/icones/heroi/heroi.svg';
import heart from 'assets/icones/heart/full.svg';
import messages from './messages';

const HomeStyled = styled.div`
  padding: 10%;
`;

export default function HomePage() {
  const [heroCount, setHeroCount] = useState(0);
  const [heroes, setHeroes] = useState(undefined);

  async function getProposalsList() {
    await api
      .getCharacters()
      .then(response => {
        setHeroCount(response.data.total);
        setHeroes(response.data.results);
      })
      .catch(err => {
        console.error(err);
      });
  }

  useEffect(() => {
    getProposalsList();
  }, []);

  return (
    <HomeStyled>
      <FormattedMessage {...messages.search}>
        {msg => <SearchBar placeholder={msg} />}
      </FormattedMessage>
      <MediumText colour="tertiaryTextColour">
        <FormattedMessage {...messages.found} values={{ value: heroCount }} />
      </MediumText>
      <IconLink icon={hero}>
        <FormattedMessage {...messages.orderName} />
      </IconLink>
      <IconLink icon={heart}>
        <FormattedMessage {...messages.favourite} />
      </IconLink>
      <HeroesList heroes={heroes} />
    </HomeStyled>
  );
}
