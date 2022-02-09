const ButtonText = ({ onClickAction, text }) => {
  return (
    <button type="button-text" onClick={onClickAction}>
      {text}
    </button>
  );
};

export default ButtonText;
