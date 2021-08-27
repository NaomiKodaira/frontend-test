import React, { useEffect, useState } from 'react';
// import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import api from 'api';
import { MediumText } from 'components/Text';
// import styled from 'styled-components';
import Layout from 'components/Layout';

// const HeroPageStyled = styled.div``;

export default function HeroPage(props) {
  const { match } = props;
  const { heroId } = match.params;

  const [hero, setHero] = useState({});

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
  }

  useEffect(() => {
    getHero();
  }, []);

  return (
    <Layout>
      <div>
        <MediumText>Hero Page {heroId}</MediumText>
        <MediumText>{JSON.stringify(hero)}</MediumText>
      </div>
    </Layout>
  );
}

HeroPage.propTypes = {
  match: PropTypes.object,
};
