/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Explore o universo',
  },
  subHeader: {
    id: `${scope}.subHeader`,
    defaultMessage:
      'Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!',
  },
  orderName: {
    id: `${scope}.orderName`,
    defaultMessage: 'Ordernar por nome - A/Z',
  },
  orderModified: {
    id: `${scope}.orderModified`,
    defaultMessage: 'Ordernar por recentemente',
  },
  favourite: {
    id: `${scope}.favourite`,
    defaultMessage: 'Somente favoritos',
  },
  found: {
    id: `${scope}.found`,
    defaultMessage: 'Encontrados {value} heróis',
  },
});
