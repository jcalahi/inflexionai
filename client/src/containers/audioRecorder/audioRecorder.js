import { useState } from "react";
import { RecordController } from "./components/recordController";
import { RecordBuilder } from "./components/recordBuilder";
import classes from "./audioRecorder.module.scss";

const AudioRecorder = ({ onClose }) => {
  const [blob, setBlob] = useState();

  const renderComponents = () => {
    return blob ? (
      <RecordBuilder onCancel={onClose} blob={blob} />
    ) : (
      <RecordController onClose={onClose} onBlobReady={setBlob} />
    );
  };

  return <div className={classes.container}>{renderComponents()}</div>;
};

export { AudioRecorder };
