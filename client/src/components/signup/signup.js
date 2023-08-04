import PropTypes from "prop-types";
import classnames from "classnames";
import classes from "./signup.module.scss";

const propTypes = {
  show: PropTypes.bool.isRequired,
};

const SignUp = ({ show }) => {
  return (
    <div className={classnames(classes.signup, { [classes.displayBlock]: show })}>
      <div className={classes.signup_dialog}></div>
    </div>
  );
};

SignUp.propTypes = propTypes;

export { SignUp };
