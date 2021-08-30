import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colours from 'config/colours';
import device from 'config/devices';
import { MediumText } from 'components/Text';
import arrow from 'assets/icones/arrow/arrow.svg';
import { IconButton } from 'components/Button';

const PaginationStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }

  & > input {
    background-color: transparent;
    width: 24px;
    padding: 0;
    margin: 0;
    border: none;
    font-family: 'Work Sans', sans-serif;
    font-size: 16px;
    color: ${colours.primaryTextColour};
    @media ${device.tablet} {
      font-size: 18px;
    }
  }

  & > button {
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
    height: 20px;
    margin: 0 5px;

    & > img {
      height: 100%;
    }
  }

  & > button:first-of-type {
    transform: rotate(180deg);
  }
`;

function Pagination(props) {
  const { heroCount, limit, currentPage, setCurrentPage } = props;

  const maxPage = Math.ceil(heroCount / limit);
  const [display, setDisplay] = useState(currentPage);

  useEffect(() => {
    setDisplay(currentPage);
  }, [currentPage]);

  const changePage = newValue => {
    if (newValue < 1) {
      setCurrentPage(1);
    } else if (newValue > maxPage) {
      setCurrentPage(maxPage);
    } else {
      setCurrentPage(newValue);
    }
  };

  return (
    <PaginationStyled>
      <IconButton
        onClick={() => changePage(currentPage - 1)}
        icon={arrow}
        alt="Página anterior"
      />
      <input
        type="number"
        value={display}
        min={0}
        max={maxPage}
        onChange={v => setDisplay(v.target.value)}
        onBlur={v => changePage(parseInt(v.target.value, 10))}
        onKeyDown={v => {
          if (v.key === 'Enter') {
            v.target.blur();
          }
        }}
      />
      <MediumText> de {maxPage || '1'}</MediumText>
      <IconButton
        onClick={() => changePage(currentPage + 1)}
        icon={arrow}
        alt="Próxima página"
      />
    </PaginationStyled>
  );
}

Pagination.propTypes = {
  heroCount: PropTypes.number,
  limit: PropTypes.number,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
};

export default Pagination;
