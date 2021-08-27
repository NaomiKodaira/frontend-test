import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconButtonStyled = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  height: ${props => props.height};
  margin: 0 5px;

  & > img {
    height: 100%;
  }
`;

function IconButton(props) {
  const { icon, type, onClick, alt, height } = props;

  return (
    <IconButtonStyled type={type} onClick={onClick} height={height}>
      <img src={icon} alt={alt} />
    </IconButtonStyled>
  );
}

IconButton.propTypes = {
  icon: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  alt: PropTypes.string,
  height: PropTypes.string,
};

IconButton.defaultProps = {
  height: '20px',
  type: 'button',
};

export default IconButton;
