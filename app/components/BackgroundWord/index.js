/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BackgroundNameStyled = styled.div`
  position: absolute;
  color: #fff;
  font-weight: bold;
  font-family: 'Work Sans', sans-serif;
  text-transform: uppercase;
  z-index: -1;
  overflow: hidden;
  font-size: ${props => 100 / props.longestLength}vw;
  width: 100%;
  text-align: right;
  top: 50%;
  transform: translateY(-50%);
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
     -moz-user-select: none; /* Old versions of Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none; /* Non-prefixed version, currently
                                supported by Chrome, Edge, Opera and Firefox */

  @media (orientation: landscape) {
    font-size: ${props =>
    100 /
      (props.word.length < 10 ? props.word.length : props.word.length / 2)}vw;
  }
`;

export default function BackgroundName(props) {
  const { word } = props;

  const [longestLength, setLongestLength] = useState(undefined);

  function findLongestLength() {
    const wordArray = word.split(' ');

    const longest = wordArray.reduce((currLongest, currWord) => {
      if (currWord.length > currLongest.length) return currWord;
      return currLongest;
    }, '');
    setLongestLength(longest.length);
    // setLongestLength(word.length < 10 ? word.length : word.length / 2);
  }

  useEffect(() => {
    findLongestLength();
  }, [word]);

  return (
    <BackgroundNameStyled word={word} longestLength={longestLength}>
      {word}
    </BackgroundNameStyled>
  );
}

BackgroundName.propTypes = {
  word: PropTypes.string.isRequired,
};
