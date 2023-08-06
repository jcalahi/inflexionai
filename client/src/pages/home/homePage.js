import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classnames from "classnames";
import { BUTTON_STYLE, Button } from "../../components/button";
import { Text } from "../../components/text";
import { Card } from "../../components/card";
import { SignUp } from "../../components/signup/signup";
import { MenuIcon } from "../../components/menuIcon/menuIcon";
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
  const [showModal, setShowModal] = useState(false);
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
          <div className={classes.lineArrow}>
            <img src={ArrowLineIcon} alt="arrow line icon" />
          </div>
        </div>
        <div className={classes.testimonials}>
          <Card></Card>
        </div>
        <div className={classnames(classes.flexBetween, classes.stickyElement)}>
          <MenuIcon icon={UploadIcon} text="Upload Audio" />
          <img src={RecordIcon} alt="record icon" width="80" height="80" />
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
