import { useNavigate } from "react-router-dom";
import classnames from "classnames";
import { BUTTON_STYLE, Button } from "../../components/button";
import { Text } from "../../components/text";
import { ReactComponent as ProductIcon } from "../../assets/common/product.svg";
import { ReactComponent as AccountIcon } from "../../assets/icons/account.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/settings.png";
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
        <AccountIcon />
        <ProductIcon />
        <SettingsIcon />
      </div>
      <div>
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
    </div>
  );
};

export { HomePage };
