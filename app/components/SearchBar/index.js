import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colours from 'config/colours';
import search from 'assets/busca/Lupa/search.svg';
import device from 'config/devices';
import { IconButton } from 'components/Button';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';

const SearchBarStyled = styled.div`
  width: ${props => props.width};
  height: 45px;
  background-color: ${props => props.backgroundColour};
  border-radius: 55px;
  display: flex;
  align-items: center;
  padding: ${props => (props.small && '0 15px') || '0 20px'};
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

  & > button {
    margin-right: ${props => (props.small && '15px') || '20px'};
    width: 20px;
  }

  @media ${device.tablet} {
    height: ${props => (props.small && '45px') || '55px'};

    & > input {
      font-size: 18px;
    }

    & > button {
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
    onSearch,
    width,
    small,
    intl,
    initialValue,
  } = props;

  const [value, setValue] = useState(initialValue);

  return (
    <SearchBarStyled
      backgroundColour={backgroundColour}
      textColour={textColour}
      width={width}
      small={small}
    >
      <IconButton
        icon={search}
        alt="Search"
        onClick={() => onSearch(value)}
        height={(small && '20px') || '25px'}
      />
      <input
        type="text"
        placeholder={placeholder || intl.formatMessage(messages.search)}
        onChange={v => {
          onChange(v);
          setValue(v.target.value);
        }}
        onKeyDown={v => {
          if (v.key === 'Enter') {
            onSearch(value);
          }
        }}
        onBlur={onBlur}
        value={value}
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
  onSearch: PropTypes.func.isRequired,
  width: PropTypes.string,
  intl: intlShape.isRequired,
  small: PropTypes.bool,
  initialValue: PropTypes.string,
};

SearchBar.defaultProps = {
  backgroundColour: colours.secondaryColour,
  textColour: colours.primaryColour,
  onChange: () => {},
  onBlur: () => {},
  width: '100%',
};

export default injectIntl(SearchBar);
