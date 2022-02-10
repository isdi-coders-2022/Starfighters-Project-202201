import PropTypes from "prop-types";

const ButtonText = ({ onClickAction, text }) => {
  return (
    <button
      className={"filter-button"}
      type="button-text"
      onClick={onClickAction}
    >
      {text}
    </button>
  );
};
ButtonText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ButtonText;
