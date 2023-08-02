import classnames from "classnames";
import classes from "./text.module.css";

const Text = ({ className, children, color }) => {
  console.log(color);
  return (
    <span style={{ color }} className={classnames(classes.text, className)}>
      {children}
    </span>
  );
};

export { Text };
