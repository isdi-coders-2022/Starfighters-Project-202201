const Button = ({ onClickAction, className, id }) => {
  return (
    <button
      type="button"
      onClick={onClickAction}
      className={className}
      id={id}
    ></button>
  );
};

export default Button;
