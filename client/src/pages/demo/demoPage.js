import classes from "./demoPage.module.css";
import { ReactComponent as RecordIcon } from "../../assets/icons/record.svg";

const DemoPage = () => {
  return (
    <div className={classes.container}>
      <RecordIcon />
      <h1 className={classes.title}>Audio Pen</h1>
      <div className={classes.subtitle}>
        Watch a demo of how AudioPen works.
      </div>
    </div>
  );
};

export { DemoPage };
