import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Footer from 'components/Footer';

const LayoutStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
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
  children: PropTypes.any.isRequired,
};

export default Layout;
