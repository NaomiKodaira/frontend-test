import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SmallText } from 'components/Text';
import colours from 'config/colours';

const IconLinkStyled = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  min-height: 40px;
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
    width: ${props => (props.active && '100%') || '0px'};
    display: block;
    opacity: ${props => (props.active && '1') || '0'};
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
  const { text, children, icon, alt, onClick, active } = props;
  return (
    <IconLinkStyled onClick={onClick} active={active}>
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
  active: PropTypes.bool,
};

export default IconLink;
