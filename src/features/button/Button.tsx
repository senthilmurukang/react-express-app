import { useState } from "react";
import styles from "./Button.module.css";

const Button = ({
  children = "button",
  onClick = () => {},
  btnColor = "teal",
  labelColor = "white",
  disabled = false,
  type = "solid",
  style = {},
  ...props
}) => {
  const [hover, setHover] = useState(false);
  const toggleHover = () => {
    setHover(!hover);
  };
  const commonStyles = {
    backgroundColor: btnColor,
    color: labelColor,
  };
  const outlineStyles = {
    border: `1px solid ${btnColor}`,
    color: btnColor,
    backgroundColor: "white",
  };
  const outlineHoverStyle = {
    color: labelColor,
    backgroundColor: btnColor,
  };

  const roundedStyle = {
    backgroundColor: btnColor,
    color: labelColor,
    borderRadius: "25px",
  };
  const disabledStyle = {
    cursor: "default",
    backgroundColor: btnColor,
    color: labelColor,
    opacity: 0.4,
  };
  const blockStyles = {
    width: "95%",
    margin: "0 auto",
  };
  let btnStyle;
  switch (type) {
    case "rounded":
      btnStyle = roundedStyle;
      break;
    case "block":
      btnStyle = blockStyles;
      break;
    case "outline":
      if (hover) {
        btnStyle = outlineHoverStyle;
      } else {
        btnStyle = outlineStyles;
      }
      break;
    default:
      btnStyle = {
        backgroundColor: btnColor,
        color: labelColor,
      };
      break;
  }
  return (
    <button
      style={
        disabled
          ? { ...commonStyles, ...btnStyle, ...disabledStyle, ...style }
          : { ...commonStyles, ...btnStyle, ...style }
      }
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      {...props}
      type="button"
      onClick={!disabled ? onClick : () => {}}
      className={styles.btn}
    >
      {children}
    </button>
  );
};

export default Button;
