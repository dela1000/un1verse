import PropTypes from 'prop-types';

function Button({ buttonText, onClick, whiteButton }) {
  return (
    <button
      type="button"
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${
        whiteButton
          ? 'bg-white text-blue-500 hover:hover:text-white hover:bg-blue-600'
          : ''
      }`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  whiteButton: PropTypes.bool,
};

Button.defaultProps = {
  whiteButton: false,
};

export default Button;
