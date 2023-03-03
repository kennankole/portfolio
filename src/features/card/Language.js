/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

const Languages = ({ lang }) => (
  <div>
    <ul>
      <li>{ lang }</li>
    </ul>
  </div>
);

Languages.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Languages;
