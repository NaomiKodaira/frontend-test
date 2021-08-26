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
import Pagination from 'components/Pagination';
import { MediumText } from 'components/Text';
import { IconLink } from 'components/Button';
import SearchBar from 'components/SearchBar';
import styled from 'styled-components';
import hero from 'assets/icones/heroi/heroi.svg';
import heart from 'assets/icones/heart/full.svg';
import Layout from 'components/Layout';
import MainHeader from 'components/Header/MainHeader';
import messages from './messages';

const HomeStyled = styled.div``;

export default function HomePage() {
  const limit = 20;
  const [heroCount, setHeroCount] = useState(0);
  const [heroes, setHeroes] = useState(undefined);
  const [name, setName] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);

  async function getProposalsList() {
    const filters = { limit, offset: (currentPage - 1) * limit };
    if (name) filters.nameStartsWith = name;

    await api
      .getCharacters(filters)
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
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    getProposalsList();
  }, [name]);

  return (
    <Layout>
      <HomeStyled>
        <MainHeader messages={messages} />
        <FormattedMessage {...messages.search}>
          {msg => (
            <SearchBar
              placeholder={msg}
              onBlur={v => {
                console.log(v.target.value);
                setName(v.target.value);
              }}
            />
          )}
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
        <Pagination
          currentPage={currentPage}
          setCurrentPage={v => {
            console.log(v);
            setCurrentPage(v);
          }}
          heroCount={heroCount}
          limit={limit}
        />
      </HomeStyled>
    </Layout>
  );
}
