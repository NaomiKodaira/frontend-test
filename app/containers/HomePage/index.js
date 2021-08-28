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
import device, { size } from 'config/devices';
import useWindowSize from 'utils/useWindowSize';
import messages from './messages';

const FiltersStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;

  & > * {
    margin: 5px 0;
  }

  & > div {
    order: -1;
  }

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      '. fav'
      'found order';
    margin: 15px 0 5px;
    column-gap: 15px;

    & > div {
      grid-area: order;
      justify-self: end;
    }

    & > button {
      grid-area: fav;
      justify-self: end;
    }

    & > p {
      grid-area: found;
    }
  }
`;

export default function HomePage() {
  const limit = 20;
  const [heroCount, setHeroCount] = useState(0);
  const [heroes, setHeroes] = useState(undefined);
  const [name, setName] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState('name');
  const [onlyFavs, setOnlyFavs] = useState(false);
  const [loading, setLoading] = useState(false);

  const windowSize = useWindowSize();

  const setFilters = () => {
    const filters = { limit, offset: (currentPage - 1) * limit };
    if (name) filters.nameStartsWith = name;
    if (order) filters.orderBy = order;
    return filters;
  };

  async function getHeroesList() {
    const filters = setFilters();
    setLoading(true);
    await api
      .getCharacters(filters)
      .then(response => {
        setHeroCount(response.data.total);
        setHeroes(response.data.results);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function getHeroesFav() {
    const filters = setFilters();
    setLoading(true);

    let favs = JSON.parse(localStorage.getItem('favHeroes'));

    if (filters.nameStartsWith) {
      favs = favs.filter(item =>
        item.name
          .toLowerCase()
          .startsWith(filters.nameStartsWith.toLowerCase()),
      );
    }

    if (filters.orderBy === 'name') {
      favs.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    } else if (filters.orderBy === 'modified') {
      favs.sort((a, b) => new Date(b.modified) - new Date(a.modified));
    }

    setHeroCount(favs.length);
    setHeroes(favs);
    setLoading(false);
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
    <Layout hideHeader>
      <div>
        <MainHeader messages={messages} />
        <SearchBar
          onSearch={value => {
            setName(value);
          }}
          width={(windowSize.width < size.tablet && '100%') || '90%'}
        />
        <FiltersStyled>
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
            <FormattedMessage
              {...messages.found}
              values={{ value: heroCount }}
            />
          </MediumText>
        </FiltersStyled>
        <HeroesList heroes={heroes} loading={loading} />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={v => setCurrentPage(v)}
          heroCount={heroCount}
          limit={limit}
        />
      </div>
    </Layout>
  );
}
