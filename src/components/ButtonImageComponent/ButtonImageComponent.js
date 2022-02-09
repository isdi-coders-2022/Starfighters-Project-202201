const ButtonImage = ({ onClickAction, src, alt }) => {
  return (
    <button type="button" onClick={onClickAction}>
      <img src={src} alt={alt} />
    </button>
  );
};

export default ButtonImage;
