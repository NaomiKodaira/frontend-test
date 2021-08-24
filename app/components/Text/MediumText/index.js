import PropTypes from 'prop-types';
import styled from 'styled-components';
import device from 'config/devices';
import colours from 'config/colours';

const MediumText = styled.p`
  font-size: 16px;
  margin: 0;
  color: ${props => colours[`${props.colour}TextColour`]};
  font-weight: ${props => props.fontWeight};
  font-family: 'Work Sans', sans-serif;

  @media ${device.tablet} {
    font-size: 18px;
  }
`;

MediumText.propTypes = {
  children: PropTypes.any.isRequired,
  colour: PropTypes.string,
  fontWeight: PropTypes.string,
};

MediumText.defaultProps = {
  children: '',
  colour: 'primary',
  fontWeight: 'normal',
};

export default MediumText;
