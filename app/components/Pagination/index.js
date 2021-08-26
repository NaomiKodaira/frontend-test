import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colours from 'config/colours';
import device from 'config/devices';
import { MediumText } from 'components/Text';

const PaginationStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

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
      <button type="button" onClick={() => changePage(currentPage - 1)} />
      <input
        type="number"
        value={display}
        min={0}
        max={maxPage}
        onChange={v => setDisplay(v.target.value)}
        onBlur={v => changePage(parseInt(v.target.value, 10))}
      />
      <MediumText> de {maxPage}</MediumText>
      <button type="button" onClick={() => changePage(currentPage + 1)} />
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
