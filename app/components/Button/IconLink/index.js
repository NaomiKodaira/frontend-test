import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SmallText } from 'components/Text';
import colours from 'config/colours';

const IconLinkStyled = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & > p {
    position: relative;
  }

  & > p::after {
    content: '';
    position: absolute;
    background-color: ${colours.primaryColour};
    height: 2px;
    width: 0px;
    display: block;
    opacity: 0;
    transition: width 250ms, opacity 250ms;
  }

  &:hover > p::after {
    width: 100%;
    opacity: 1;
  }

  &:active > p::after {
    height: 3px;
  }

  & > img {
    margin-right: 15px;
  }
`;

function IconLink(props) {
  const { text, children, icon, alt, onClick } = props;
  return (
    <IconLinkStyled onClick={onClick}>
      {icon && <img src={icon} alt={alt} />}
      <SmallText colour="primaryColour">{children || text}</SmallText>
    </IconLinkStyled>
  );
}

IconLink.propTypes = {
  text: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  icon: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
};

export default IconLink;
