import { Text } from "@components/text";
import { useAudioRecorder } from "react-audio-voice-recorder";
import { AUDIO_RECORDER_LIMIT, AUDIO_RECORDER_OPTIONS } from "./constants";
import colors from "@styles/colors.module.scss";
import classes from "./recordController.module.scss";

const showAlert = (err) => {
  if (err) {
    alert("You must allow your microphone.");
  }
};

const RecordController = () => {
  const {
    mediaRecorder,
    recordingBlob,
    recordingTime,
    startRecording,
    stopRecording,
  } = useAudioRecorder(AUDIO_RECORDER_OPTIONS, showAlert);
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Text className={classes.timer} color={colors.primary25}>
          {new Date(AUDIO_RECORDER_LIMIT - recordingTime * 1000)
            .toISOString()
            .substring(15, 19)}
        </Text>
      </div>
    </div>
  );
};

export { RecordController };
