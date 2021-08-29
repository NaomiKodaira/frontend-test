import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Footer from 'components/Footer';
import Header from 'components/Header/Header';

const LayoutStyled = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${props => props.backgroundColour || '#ffffff'};
  display: grid;
  grid-template-rows: auto 1fr auto;

  & > main {
    padding: 40px 10% 80px;
  }

  ${props =>
    props.hideHeader &&
    `& > header {
        display: none;
      }
  `}
`;

function Layout(props) {
  const { children, backgroundColour, hideHeader } = props;
  return (
    <LayoutStyled backgroundColour={backgroundColour} hideHeader={hideHeader}>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutStyled>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  backgroundColour: PropTypes.string,
  hideHeader: PropTypes.bool,
};

export default Layout;
