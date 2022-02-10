import PropTypes from "prop-types";

const ButtonImage = ({ type, onClickAction, src, alt }) => {
  return (
    <button type={type} onClick={onClickAction}>
      <img src={`/icons/${src}.png`} alt={alt} />
    </button>
  );
};

ButtonImage.propTypes = {
  src: PropTypes.oneOf([
    "Back",
    "Chat",
    "Confirm",
    "Cross",
    "Forward",
    "MatchIcon",
    "Search",
  ]).isRequired,
};

export default ButtonImage;
