import { useEffect } from "react";
import PropTypes from "prop-types";
import { useAudioRecorder } from "react-audio-voice-recorder";
import RestartIcon from "../../assets/icons/restart.svg";
import CloseIcon from "../../assets/icons/close.svg";
import StopRecordIcon from "../../assets/icons/stop_record.svg";
import classes from "./voiceRecorder.module.scss";

const propTypes = {
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const VoiceRecorder = ({ show, onClose }) => {
  const { isRecording, startRecording, stopRecording } = useAudioRecorder();

  useEffect(() => {
    if (show) {
      startRecording();
    }
  }, [show, startRecording]);

  const handleCloseBtn = () => {
    stopRecording();
    onClose();
  };

  const handleStopBtn = () => {
    stopRecording();
  };

  console.log(isRecording);

  return (
    <div className={classes.container}>
      <div className={classes.flexContainer}>
        <img src={RestartIcon} alt="restart icon" />
        <img src={CloseIcon} alt="close icon" onClick={handleCloseBtn} />
      </div>
      <img
        className={classes.stopRecordIcon}
        src={StopRecordIcon}
        alt="stop record"
        onClick={handleStopBtn}
      />
    </div>
  );
};

VoiceRecorder.propTypes = propTypes;

export { VoiceRecorder };
