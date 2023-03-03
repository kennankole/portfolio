/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

const Image = ({ image }) => (
  <div>
    <img src={image} alt="project-img" />
  </div>
);

Image.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Image;
