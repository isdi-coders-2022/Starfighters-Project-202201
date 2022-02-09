const ButtonImage = ({ onClickAction }) => {
  return (
    <button type="button-back" onClick={onClickAction}>
      <img src="Back_Button.png" alt="Back" />
    </button>
  );
};

export default ButtonImage;
