import PropTypes from 'prop-types';
import styled from 'styled-components';
import device from 'config/devices';
import colours from 'config/colours';

const LargeText = styled.p`
  font-size: 20px;
  margin: 0;
  color: ${props => colours[`${props.colour}`]};
  font-weight: ${props => props.fontWeight};
  font-family: 'Work Sans', sans-serif;
  text-transform: ${props => props.textTransform};

  @media ${device.tablet} {
    font-size: 22px;
  }
`;

LargeText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  colour: PropTypes.string,
  fontWeight: PropTypes.string,
  textTransform: PropTypes.string,
};

LargeText.defaultProps = {
  children: '',
  colour: 'primaryTextColour',
  fontWeight: 'normal',
  textTransform: 'none',
};

export default LargeText;
