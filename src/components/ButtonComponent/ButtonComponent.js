import { useContext } from "react";

const Button = (onClickAction, className) => {
  return (
    <Button
      type="button"
      onClick={onClickAction}
      className={`${className}`}
    ></Button>
  );
};

export default Button;
