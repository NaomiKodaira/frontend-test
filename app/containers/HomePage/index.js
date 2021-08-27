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
import { IconLink, TextToggle } from 'components/Toggle';
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
  const [order, setOrder] = useState('name');
  const [onlyFavs, setOnlyFavs] = useState(false);

  const setFilters = () => {
    const filters = { limit, offset: (currentPage - 1) * limit };
    if (name) filters.nameStartsWith = name;
    if (order) filters.orderBy = order;
    return filters;
  };

  async function getHeroesList() {
    const filters = setFilters();

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

  function getHeroesFav() {
    // const filters = setFilters();

    const favs = JSON.parse(localStorage.getItem('favHeroes'));
    setHeroCount(favs.length);
    setHeroes(favs);
  }

  useEffect(() => {
    if (onlyFavs) {
      getHeroesFav();
    } else {
      getHeroesList();
    }
  }, [currentPage]);

  useEffect(() => {
    if (currentPage === 1) {
      if (onlyFavs) {
        getHeroesFav();
      } else {
        getHeroesList();
      }
    } else {
      setCurrentPage(1);
    }
  }, [name, onlyFavs, order]);

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
        <IconLink
          icon={heart}
          onClick={() => setOnlyFavs(!onlyFavs)}
          active={onlyFavs}
        >
          <FormattedMessage {...messages.favourite} />
        </IconLink>
        <TextToggle
          icon={hero}
          left={order === 'name'}
          setLeft={left => {
            if (left) {
              setOrder('name');
            } else {
              setOrder('modified');
            }
          }}
          leftText={<FormattedMessage {...messages.orderName} />}
          rightText={<FormattedMessage {...messages.orderModified} />}
        />
        <MediumText colour="tertiaryTextColour">
          <FormattedMessage {...messages.found} values={{ value: heroCount }} />
        </MediumText>
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
