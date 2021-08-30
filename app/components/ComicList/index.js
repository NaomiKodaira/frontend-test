import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ComicItem from 'components/ComicItem';
import device from 'config/devices';
import Loading from 'components/Loading';

const ComicListStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(${props => props.total}, auto);
  column-gap: 15px;
  row-gap: 25px;

  @media ${device.mobileM} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(${props => Math.ceil(props.total / 2)}, auto);
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(${props => Math.ceil(props.total / 4)}, auto);
  }
`;

function ComicList(props) {
  const { comics, loading } = props;

  if (loading) {
    return <Loading />;
  }

  return (
    <ComicListStyled total={comics && comics.length}>
      {comics &&
        comics.length !== 0 &&
        comics.map(item => <ComicItem data={item} key={item.id} />)}
    </ComicListStyled>
  );
}

ComicList.propTypes = {
  comics: PropTypes.array,
  loading: PropTypes.bool,
};

export default ComicList;
