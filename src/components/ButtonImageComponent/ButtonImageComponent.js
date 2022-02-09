const ButtonImage = ({ type, onClickAction, src, alt }) => {
  return (
    <button type={type} onClick={onClickAction}>
      <img src={src} alt={alt} />
    </button>
  );
};

export default ButtonImage;
