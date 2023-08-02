import classes from "./demoPage.module.css";
import { ReactComponent as RecordIcon } from "../../assets/icons/record.svg";
import { Button, BUTTON_TYPE } from "../../components/button";

const DemoPage = () => {
  return (
    <div className={classes.container}>
      <RecordIcon />
      <h1 className={classes.title}>Audio Pen</h1>
      <div className={classes.subtitle}>
        Watch a demo of how AudioPen works.
      </div>
      <iframe
        className={classes.iframe}
        title="video"
        height="381"
        width="632"
        src="https://www.youtube.com/embed/FdWlhW-9Es4?autoplay=0"
      />
      <div>
        <Button buttonType={BUTTON_TYPE.PRIMARY}>sign up/login</Button>
      </div>
    </div>
  );
};

export { DemoPage };
