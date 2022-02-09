const ButtonImage = ({ type, onClickAction, src, alt }) => {
  return (
    <button type={type} onClick={onClickAction}>
      <img src={`../../../public/icons/${src}`} alt={alt} />
    </button>
  );
};

export default ButtonImage;
