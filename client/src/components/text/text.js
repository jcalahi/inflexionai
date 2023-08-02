import classnames from "classnames";
import classes from "./text.module.css";

const Text = ({ className, children }) => {
  return (
    <span className={classnames(classes.text, className)}>{children}</span>
  );
};

export { Text };
