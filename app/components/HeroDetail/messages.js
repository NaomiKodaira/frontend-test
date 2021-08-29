/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HeroDetail';

export default defineMessages({
  comics: {
    id: `${scope}.comics`,
    defaultMessage: 'Quadrinhos',
  },
  series: {
    id: `${scope}.series`,
    defaultMessage: 'Series',
  },
  rating: {
    id: `${scope}.rating`,
    defaultMessage: 'Rating:',
  },
  lastComic: {
    id: `${scope}.lastComic`,
    defaultMessage: 'Último quadrinho:',
  },
});
