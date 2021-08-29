import React from 'react';
import styled from 'styled-components';
import LogoHeader from 'assets/logo/logoHeader';
import SearchBar from 'components/SearchBar';
import device from 'config/devices';
import colours from 'config/colours';

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 5% 0;

  & > svg {
    min-width: 100px;
  }
  & > div {
    margin: 10px 0 0;
  }

  @media ${device.tablet} {
    flex-direction: row;

    & > svg {
      min-width: 300px;
    }
    & > div {
      margin: 0 0 0 20px;
    }
  }
`;

function Header() {
  return (
    <HeaderStyled>
      <LogoHeader />
      <SearchBar
        backgroundColour="#ffffff"
        textColour={colours.primaryTextColour}
        small
      />
    </HeaderStyled>
  );
}

export default Header;
