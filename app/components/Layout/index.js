import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Footer from 'components/Footer';

const LayoutStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  display: grid;
  grid-template-rows: 1fr auto;

  & > main {
    padding: 5% 10% 10%;
  }
`;

function Layout(props) {
  const { children } = props;
  return (
    <LayoutStyled>
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
};

export default Layout;
