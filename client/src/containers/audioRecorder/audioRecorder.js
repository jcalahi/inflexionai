import { useState } from "react";
import { RecordController } from "./components/recordController";
import { RecordBuilder } from "./components/recordBuilder";
import classes from "./audioRecorder.module.scss";

const AudioRecorder = ({ onClose, onSummaryComplete }) => {
  const [blob, setBlob] = useState();

  const renderComponents = () => {
    return blob ? (
      <RecordBuilder
        blob={blob}
        onCancel={onClose}
        onSummaryComplete={onSummaryComplete}
      />
    ) : (
      <RecordController onClose={onClose} onBlobReady={setBlob} />
    );
  };

  return <div className={classes.container}>{renderComponents()}</div>;
};

export { AudioRecorder };
