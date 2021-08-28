import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MediumText, SmallText } from 'components/Text';
import device from 'config/devices';

const IconNumberStyled = styled.div`
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;

    & > img {
      margin-right: 10px;
    }
  }

  @media ${device.tablet} {
    & > svg {
      width: 300px;
    }
  }
`;

function IconNumber(props) {
  const { label, alt, icon, number } = props;
  return (
    <IconNumberStyled>
      <SmallText fontWeight="bold">{label}</SmallText>
      <div>
        <img src={icon} alt={alt} />
        <MediumText>{number}</MediumText>
      </div>
    </IconNumberStyled>
  );
}

IconNumber.propTypes = {
  label: PropTypes.string,
  alt: PropTypes.string,
  icon: PropTypes.string,
  number: PropTypes.number,
};

export default IconNumber;
