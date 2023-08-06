import classes from "./card.module.scss";

const Card = ({ children }) => {
  return (
    <div className={classes.card}>
      <div style={{ whiteSpace: "pre-line" }}>{children}</div>
    </div>
  );
};

export { Card };
