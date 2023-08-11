import { useEffect, useState } from "react";
import { Text } from "components/text";
import { uploadAudio } from "apis";
import SpinnerIcon from "assets/icons/spinner.svg";
import colors from "styles/colors.module.scss";
import classes from "./recordBuilder.module.scss";

const RecordBuilder = ({ blob, onClose }) => {
  const [status, setStatus] = useState("(1/3) uploading...");

  useEffect(() => {
    if (blob) {
      buildAudioSummary(blob);
    }
  }, [blob]);

  const buildAudioSummary = async (blob) => {
    await uploadAudio(blob);
    setStatus("(2/3) transcribing...");
  };

  console.log(status);

  return (
    <div className={classes.container}>
      <img className={classes.spinner} src={SpinnerIcon} alt="spinner icon" />
      <Text className={classes.statusText} color={colors.primary25}>
        {status}
      </Text>
      <div>
        <Text className={classes.cancelText} color={colors.primary25}>
          cancel
        </Text>
      </div>
    </div>
  );
};

export { RecordBuilder };
