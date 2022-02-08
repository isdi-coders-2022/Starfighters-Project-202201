const Button = ({ onClickAction, className }) => {
  return (
    <button
      type="button"
      onClick={onClickAction}
      className={`${className}`}
    ></button>
  );
};

export default Button;
