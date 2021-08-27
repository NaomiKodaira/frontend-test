import PropTypes from 'prop-types';
import styled from 'styled-components';
import device from 'config/devices';
import colours from 'config/colours';

const SmallText = styled.p`
  font-size: 14px;
  margin: 0;
  color: ${props => colours[`${props.colour}`]};
  font-weight: ${props => props.fontWeight};
  font-family: 'Work Sans', sans-serif;
  text-align: ${props => props.textAlign};

  @media ${device.tablet} {
    font-size: 14px;
  }
`;

SmallText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  colour: PropTypes.string,
  fontWeight: PropTypes.string,
  textAlign: PropTypes.string,
};

SmallText.defaultProps = {
  children: '',
  colour: 'primaryTextColour',
  fontWeight: 'normal',
  textAlign: 'left',
};

export default SmallText;
