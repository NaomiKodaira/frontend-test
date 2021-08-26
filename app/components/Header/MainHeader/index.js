import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title, SmallText } from 'components/Text';
import { FormattedMessage } from 'react-intl';
import Logo from 'assets/logo/logo';
import device from 'config/devices';

const MainHeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  & > svg {
    width: 100%;
    max-width: 100%;
    height: fit-content;
    transform: translateX(-3.5%);
    margin-bottom: 10px;
  }
  & > h1 {
    margin-bottom: 10px;
  }

  @media ${device.mobileM} {
    & > svg {
      width: 250px;
    }
  }

  @media ${device.tablet} {
    & > svg {
      width: 300px;
    }
  }
`;

function MainHeader(props) {
  const { messages } = props;
  return (
    <MainHeaderStyled>
      <Logo />
      <Title fontWeight="bold">
        <FormattedMessage {...messages.header} />
      </Title>
      <SmallText colour="secondaryTextColour" textAlign="center">
        <FormattedMessage {...messages.subHeader} />
      </SmallText>
    </MainHeaderStyled>
  );
}

MainHeader.propTypes = {
  messages: PropTypes.object.isRequired,
};

export default MainHeader;
