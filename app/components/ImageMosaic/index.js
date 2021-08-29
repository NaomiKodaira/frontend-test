import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageMosaicStyled = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  & > img {
  }

  & > img:last-of-type {
    height: 90%;
  }
  & > img:first-of-type {
    height: 30%;
    transform: translateY(-35%);
  }
`;

function ImageMosaic(props) {
  const { data } = props;
  return (
    <ImageMosaicStyled>
      {data && (
        <>
          <img
            src={`${data.thumbnail.path}/landscape_xlarge.${
              data.thumbnail.extension
            }`}
            alt={data.name}
          />
          <img
            src={`${data.thumbnail.path}/portrait_xlarge.${
              data.thumbnail.extension
            }`}
            alt={data.name}
          />
        </>
      )}
    </ImageMosaicStyled>
  );
}

ImageMosaic.propTypes = {
  data: PropTypes.object,
};

export default ImageMosaic;
