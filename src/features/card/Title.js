/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

const Title = ({ title }) => (
  <div>
    <h4>{title}</h4>
  </div>
);
Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
