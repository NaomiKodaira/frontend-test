/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import api from 'api';
import messages from './messages';

export default function HomePage() {
  const [heroCount, setHeroCount] = useState(0);

  async function getProposalsList() {
    await api
      .getCharacters()
      .then(response => {
        setHeroCount(response.data.total);
      })
      .catch(err => {
        console.error(err);
      });
  }

  useEffect(() => {
    getProposalsList();
  }, []);

  return (
    <h1>
      <FormattedMessage {...messages.found} values={{ value: heroCount }} />
    </h1>
  );
}
