import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useAudioRecorder } from "react-audio-voice-recorder";
import AudioMotionAnalyzer from "audiomotion-analyzer";
import axios from "axios";
import { Text } from "../text";
import RestartIcon from "../../assets/icons/restart.svg";
import CloseIcon from "../../assets/icons/close.svg";
import StopRecordIcon from "../../assets/icons/stop_record.svg";
import colors from "../../styles/colors.module.scss";
import classes from "./voiceRecorder.module.scss";

const propTypes = {
  onClick: PropTypes.func.isRequired,
};

const showAlert = (err) => {
  if (err) {
    alert("You must allow your microphone.");
  }
};

const LIMIT = 180; // 3 mins

const VoiceRecorder = ({ onClose }) => {
  const [audioMotion, setAudioMotion] = useState();

  const { mediaRecorder, recordingTime, startRecording, stopRecording } =
    useAudioRecorder(
      {
        noiseSuppression: true,
        echoCancellation: true,
      },
      showAlert
    );

  useEffect(() => {
    const audioMotion = new AudioMotionAnalyzer(
      document.getElementById("audio"),
      {
        height: 60,
        overlay: true,
        bgAlpha: 0,
        showBgColor: true,
        showScaleY: false,
        showScaleX: false,
        ledBars: true,
        mode: 4,
      }
    );
    setAudioMotion(audioMotion);

    return () => {
      if (audioMotion) {
        audioMotion.disconnectInput();
      }
    };
  }, []);

  // starts recording once the component is visible
  useEffect(() => {
    startRecording();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (mediaRecorder) {
      const stream = audioMotion.audioCtx.createMediaStreamSource(
        mediaRecorder.stream
      );
      audioMotion.connectInput(stream);
      audioMotion.volume = 0;
    }
    if (recordingTime === LIMIT) {
      stopRecording();
      audioMotion.disconnectInput();
    }
  }, [mediaRecorder, audioMotion, recordingTime, stopRecording]);

  const uploadAudio = async () => {
    await axios.post("/api/transcribe");
  };

  const handleRestartBtn = () => {};

  const handleCloseBtn = () => {
    stopRecording();
    audioMotion.disconnectInput();
    onClose();
  };

  const handleStopBtn = () => {
    stopRecording();
    audioMotion.disconnectInput();
    uploadAudio();
  };

  return (
    <div className={classes.container}>
      <div style={{ textAlign: "center" }}>
        <Text className={classes.timer} color={colors.primary25}>
          {new Date(recordingTime * 1000).toISOString().substring(15, 19)}
        </Text>
      </div>
      <div className={classes.audio} id="audio"></div>
      <div className={classes.flexContainer}>
        <img src={RestartIcon} alt="restart icon" onClick={handleRestartBtn} />
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
