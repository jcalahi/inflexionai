import PropTypes from "prop-types";
import classnames from "classnames";
import classes from "./button.module.css";

export const BUTTON_TYPE = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
};

const propTypes = {
  buttonType: PropTypes.oneOf(Object.values(BUTTON_TYPE)).isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

const Button = ({ buttonType, className, children, onClick }) => {
  return (
    <button
      className={classnames(
        classes.button,
        { [classes[buttonType]]: buttonType },
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
