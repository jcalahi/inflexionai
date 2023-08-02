import PropTypes from "prop-types";
import classnames from "classnames";
import classes from "./button.module.css";

export const BUTTON_STYLE = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
};

const propTypes = {
  buttonStyle: PropTypes.oneOf(Object.values(BUTTON_STYLE)).isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

const Button = ({ buttonStyle, className, children, onClick }) => {
  return (
    <button
      type="button"
      className={classnames(
        classes.button,
        { [classes[buttonStyle]]: buttonStyle },
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = propTypes;

export { Button };
