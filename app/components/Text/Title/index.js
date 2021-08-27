import PropTypes from 'prop-types';
import styled from 'styled-components';
import device from 'config/devices';
import colours from 'config/colours';

const LargeText = styled.h1`
  font-size: 23px;
  margin: 0;
  color: ${props => colours[`${props.colour}`]};
  font-weight: ${props => props.fontWeight};
  font-family: 'Work Sans', sans-serif;
  text-transform: uppercase;
  text-align: ${props => props.textAlign};

  @media ${device.mobileM} {
    font-size: 26px;
  }

  @media ${device.tablet} {
    font-size: 30px;
  }
`;

LargeText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  colour: PropTypes.string,
  fontWeight: PropTypes.string,
  textAlign: PropTypes.string,
};

LargeText.defaultProps = {
  children: '',
  colour: 'primaryTextColour',
  fontWeight: 'normal',
  textAlign: 'center',
};

export default LargeText;
