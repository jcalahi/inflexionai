import { useNavigate } from "react-router-dom";
import classnames from "classnames";
import { BUTTON_STYLE, Button } from "../../components/button";
import { Text } from "../../components/text";
// icons
import AccountIcon from "../../assets/icons/account.svg";
import ProductIcon from "../../assets/common/product.svg";
import SettingsIcon from "../../assets/icons/settings.svg";
import TextNoteIcon from "../../assets/icons/textnote.svg";
import UploadIcon from "../../assets/icons/upload.svg";
import ArrowLineIcon from "../../assets/icons/arrow_line.svg";
import BarIcon from "../../assets/icons/bar.svg";
import RecordIcon from "../../assets/icons/record.svg";
// styles
import classes from "./homePage.module.scss";
import colors from "../../styles/colors.module.scss";

const HomePage = () => {
  const navigate = useNavigate();

  const gotoDemoPage = () => {
    navigate("/demo");
  };

  return (
    <div className={classes.container}>
      <div className={classnames(classes.flexBetween, classes.mt20)}>
        <img src={AccountIcon} alt="account icon" />
        <img src={ProductIcon} alt="product hunt icon" />
        <img src={SettingsIcon} alt="settings icon" />
      </div>
      <div className={classes.content}>
        <div>
          <Text className={classes.title} color={colors.grey100}>
            AudioPen
          </Text>
        </div>
        <div>
          <img src={BarIcon} alt="bar icon" />
        </div>
        <div className={classes.my_14}>
          <Text className={classes.subtitle} color={colors.grey100}>
            Go from fuzzy thought to clear text.
          </Text>
          <Text className={classes.subtitle_secondary}> Fast.</Text>
        </div>
        <div className={classes.description}>
          <Text className={classes.description_content}>
            {`Just hit record. Then start talking.
            AudioPen will clean things up when you're done.`}
          </Text>
        </div>
        <div className={classes.buttonGroup}>
          <Button buttonStyle={BUTTON_STYLE.PRIMARY}>
            <Text className={classes.buttonText} color={colors.primary25}>
              sign up / log in
            </Text>
          </Button>
          <Button buttonStyle={BUTTON_STYLE.SECONDARY} onClick={gotoDemoPage}>
            <Text className={classes.buttonText} color={colors.grey100}>
              see how it works
            </Text>
          </Button>
        </div>
        <div className={classes.arrowLine}>
          <img src={ArrowLineIcon} alt="arrow line icon" />
        </div>
      </div>
      <div className={classes.flexBetween}>
        <img src={UploadIcon} alt="upload icon" />
        <img src={RecordIcon} alt="record icon" width="80" height="80" />
        <img src={TextNoteIcon} alt="text note icon" />
      </div>
    </div>
  );
};

export { HomePage };
