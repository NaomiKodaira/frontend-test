/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import IconLink from 'components/Toggle/IconLink';
import styled from 'styled-components';
import ToggleIcon from 'components/Toggle/ToggleIcon';

const TextToggleStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > button:nth-child(2) {
    margin: 0 15px;
  }
`;

export default function TextToggle(props) {
  const { icon, setLeft, left, leftText, rightText } = props;

  return (
    <TextToggleStyled>
      <IconLink icon={icon} onClick={() => setLeft(true)} active={left}>
        {leftText}
      </IconLink>
      <ToggleIcon
        active={left}
        setActive={() => {
          setLeft(!left);
        }}
        height={30}
      />
      <IconLink onClick={() => setLeft(false)} active={!left}>
        {rightText}
      </IconLink>
    </TextToggleStyled>
  );
}

TextToggle.propTypes = {
  icon: PropTypes.string,
  leftText: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  rightText: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  setLeft: PropTypes.string,
  left: PropTypes.bool,
};
