import classnames from "classnames";
import classes from "./text.module.scss";

const Text = ({ className, children, color }) => {
  return (
    <span style={{ color }} className={classnames(classes.text, className)}>
      {children}
    </span>
  );
};

export { Text };
