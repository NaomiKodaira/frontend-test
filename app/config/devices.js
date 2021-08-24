export const size = {
  mobileM: '320px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
};

export default {
  mobileM: `(min-width: ${size.mobileM})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
};
