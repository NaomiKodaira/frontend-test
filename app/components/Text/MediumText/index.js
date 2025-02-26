import PropTypes from 'prop-types';
import styled from 'styled-components';
import device from 'config/devices';
import colours from 'config/colours';

const MediumText = styled.p`
  font-size: 16px;
  margin: 0;
  color: ${props => colours[`${props.colour}`]};
  font-weight: ${props => props.fontWeight};
  font-family: 'Work Sans', sans-serif;

  @media ${device.tablet} {
    font-size: 18px;
  }
`;

MediumText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  colour: PropTypes.string,
  fontWeight: PropTypes.string,
};

MediumText.defaultProps = {
  children: '',
  colour: 'primaryTextColour',
  fontWeight: 'normal',
};

export default MediumText;
