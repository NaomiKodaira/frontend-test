import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colours from 'config/colours';
import search from 'assets/busca/Lupa/search.svg';
import device from 'config/devices';

const SearchBarStyled = styled.div`
  width: ${props => props.width};
  height: 45px;
  background-color: ${props => props.backgroundColour};
  border-radius: 55px;
  display: flex;
  padding: 0 20px;
  margin: auto;

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
    margin-right: 20px;
    width: 20px;
  }

  @media ${device.tablet} {
    height: 55px;

    & > input {
      font-size: 18px;
    }

    & > img {
      margin-right: 30px;
      width: 23px;
    }
  }
`;

function SearchBar(props) {
  const {
    placeholder,
    backgroundColour,
    textColour,
    onChange,
    onBlur,
    width,
  } = props;
  return (
    <SearchBarStyled
      backgroundColour={backgroundColour}
      textColour={textColour}
      width={width}
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
  width: PropTypes.string,
};

SearchBar.defaultProps = {
  backgroundColour: colours.secondaryColour,
  textColour: colours.primaryColour,
  onChange: () => {},
  onBlur: () => {},
  width: '100%',
};

export default SearchBar;
