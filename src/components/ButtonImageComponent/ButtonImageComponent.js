import PropTypes from "prop-types";
import ButtonStyled from "./ButtonImageComponent.style";

const ButtonImage = ({ type, onClickAction, src, alt }) => {
  return (
    <ButtonStyled type={type} onClick={onClickAction}>
      <img src={`/icons/${src}.png`} alt={alt} />
    </ButtonStyled>
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
