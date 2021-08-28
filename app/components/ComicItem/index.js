import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MediumText } from 'components/Text';

const ComicItemStyled = styled.div`
  width: 100%;

  /* & > img {
    margin: auto;
    display: block;
  } */
`;

function ComicItem(props) {
  const { data } = props;
  return (
    <ComicItemStyled>
      <img
        src={`${data.thumbnail.path}/portrait_xlarge.${
          data.thumbnail.extension
        }`}
        alt={data.name}
      />
      <MediumText fontWeight="bold">{data.title}</MediumText>
    </ComicItemStyled>
  );
}

ComicItem.propTypes = {
  data: PropTypes.object,
};

export default ComicItem;
