import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colours from 'config/colours';
import search from 'assets/busca/Lupa/search.svg';
import device from 'config/devices';

const SearchBarStyled = styled.div`
  width: 100%;
  height: 55px;
  background-color: ${props => props.backgroundColour};
  border-radius: 55px;
  display: flex;
  padding: 0 20px;

  & > input {
    width: 100%;
    height: 100%;
    color: ${props => props.textColour};
    border: none;
    font-family: 'Work Sans', sans-serif;
    background-color: transparent;
    font-size: 16px;
  }

  & > img {
    margin-right: 30px;
    width: 23px;
  }

  @media ${device.tablet} {
    & > input {
      font-size: 18px;
    }
  }
`;

function SearchBar(props) {
  const { placeholder, backgroundColour, textColour, onChange, onBlur } = props;
  return (
    <SearchBarStyled
      backgroundColour={backgroundColour}
      textColour={textColour}
    >
      <img src={search} alt="Search" />
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
    </SearchBarStyled>
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  backgroundColour: PropTypes.string,
  textColour: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

SearchBar.defaultProps = {
  backgroundColour: colours.secondaryColour,
  textColour: colours.primaryColour,
  onChange: () => {},
  onBlur: () => {},
};

export default SearchBar;
