import PropTypes from 'prop-types';
import styled from 'styled-components';
import device from 'config/devices';
import colours from 'config/colours';

const SmallText = styled.p`
  font-size: 14px;
  margin: 0;
  color: ${props => colours[`${props.colour}TextColour`]};
  font-weight: ${props => props.fontWeight};
  font-family: 'Work Sans', sans-serif;

  @media ${device.tablet} {
    font-size: 14px;
  }
`;

SmallText.propTypes = {
  children: PropTypes.any.isRequired,
  colour: PropTypes.string,
  fontWeight: PropTypes.string,
};

SmallText.defaultProps = {
  children: '',
  colour: 'primary',
  fontWeight: 'normal',
};

export default SmallText;
