import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classnames from "classnames";
import { BUTTON_STYLE, Button } from "../../components/button";
import { Text } from "../../components/text";
import { Card } from "../../components/card";
import { SignUp } from "../../components/signup/signup";
import { MenuIcon } from "../../components/menuIcon/menuIcon";
import AccountIcon from "../../assets/icons/account.svg";
import ProductIcon from "../../assets/common/product.svg";
import SettingsIcon from "../../assets/icons/settings.svg";
import TextNoteIcon from "../../assets/icons/textnote.svg";
import UploadIcon from "../../assets/icons/upload.svg";
import ArrowLineIcon from "../../assets/icons/arrow_line.svg";
import BarIcon from "../../assets/icons/bar.svg";
import RecordIcon from "../../assets/icons/record.svg";
import classes from "./homePage.module.scss";
import colors from "../../styles/colors.module.scss";
import { loremIpsum } from "lorem-ipsum";
import { AudioRecorder } from "../../containers/audioRecorder";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showRecorder, setShowRecorder] = useState(false);
  const [recordBlob, setRecordBlob] = useState();

  const navigate = useNavigate();

  const gotoDemoPage = () => {
    navigate("/demo");
  };

  const handleSignupClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRecordClick = () => {
    setShowRecorder(true);
  };

  const handleCloseRecorder = () => {
    setShowRecorder(false);
  };

  const handleRecordBlob = (blob) => {
    setRecordBlob(blob);
  };

  return (
    <>
      <div
        className={classnames(classes.container, { [classes.blur]: showModal })}
      >
        <div className={classnames(classes.flexBetween, classes.mt20)}>
          <MenuIcon icon={AccountIcon} text="Account" />
          <img src={ProductIcon} alt="product hunt icon" />
          <MenuIcon icon={SettingsIcon} text="Settings" textPosition="right" />
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
          <div style={{ margin: "14px 0" }}>
            <Text className={classes.subtitle} color={colors.grey100}>
              Go from fuzzy thought to clear text.
            </Text>
            <Text className={classes.subtitle_secondary}> Fast.</Text>
          </div>
          {!recordBlob && showRecorder && (
            <div style={{ marginTop: "36px" }}>
              <AudioRecorder
                onClose={handleCloseRecorder}
                onRecordBlob={handleRecordBlob}
              />
            </div>
          )}
          <div
            className={classnames(classes.description, {
              [classes.displayNone]: showRecorder,
            })}
          >
            <Text className={classes.description_content}>
              {`Just hit record. Then start talking.
            AudioPen will clean things up when you're done.`}
            </Text>
          </div>
          <div
            className={classnames(classes.buttonGroup, {
              [classes.displayNone]: showRecorder,
            })}
          >
            <Button
              buttonStyle={BUTTON_STYLE.PRIMARY}
              onClick={handleSignupClick}
            >
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
          <div
            className={classnames(classes.lineArrow, {
              [classes.displayNone]: showRecorder,
            })}
          >
            <img src={ArrowLineIcon} alt="arrow line icon" />
          </div>
        </div>
        <div className={classes.testimonials}>
          <Card>
            {loremIpsum({
              count: Math.floor(Math.random() * 5) + 1,
              units: "paragraphs",
            })}
          </Card>
        </div>
        <div
          className={classnames(classes.flexBetween, classes.stickyElement, {
            [classes.displayNone]: showRecorder,
          })}
        >
          <MenuIcon icon={UploadIcon} text="Upload Audio" />
          <img
            style={{ cursor: "pointer" }}
            src={RecordIcon}
            alt="record icon"
            width="80"
            height="80"
            onClick={handleRecordClick}
          />
          <MenuIcon
            icon={TextNoteIcon}
            text="Rewrite a Text Note"
            textPosition="right"
          />
        </div>
      </div>
      <SignUp open={showModal} onClose={handleCloseModal} />
    </>
  );
};

export { HomePage };
