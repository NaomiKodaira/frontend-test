/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HeroPage';

export default defineMessages({
  comics: {
    id: `${scope}.comics`,
    defaultMessage: 'Quadrinhos',
  },
  movies: {
    id: `${scope}.movies`,
    defaultMessage: 'Filmes',
  },
  rating: {
    id: `${scope}.rating`,
    defaultMessage: 'Rating:',
  },
  lastComic: {
    id: `${scope}.lastComic`,
    defaultMessage: 'Último quadrinho:',
  },
  lastComicList: {
    id: `${scope}.lastComicList`,
    defaultMessage: 'Últimos lançamentos',
  },
});
