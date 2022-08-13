import PropTypes from 'prop-types';

function SmallText({ text }) {
  return <div className="text-white font-medium">{text}</div>;
}

SmallText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SmallText;
