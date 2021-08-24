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
import messages from './messages';

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
    <div>
      <p>
        <FormattedMessage {...messages.found} values={{ value: heroCount }} />
      </p>
      <HeroesList heroes={heroes} />
    </div>
  );
}
