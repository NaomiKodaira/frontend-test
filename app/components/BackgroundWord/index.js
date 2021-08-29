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
  font-size: ${props => props.font}vw;
  width: 100%;
  text-align: right;
  top: 50%;
  transform: translateY(-50%);
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
  }

  useEffect(() => {
    findLongestLength();
  }, [word]);

  return (
    <BackgroundNameStyled font={100 / longestLength}>
      {word}
    </BackgroundNameStyled>
  );
}

BackgroundName.propTypes = {
  word: PropTypes.string.isRequired,
};
