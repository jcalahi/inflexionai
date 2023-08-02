import { useNavigate } from "react-router-dom";
import { BUTTON_STYLE, Button } from "../../components/button";
import { Text } from "../../components/text";
import classes from "./homePage.module.scss";
import colors from "../../styles/_colors.module.scss";

const HomePage = () => {
  const navigate = useNavigate();

  const gotoDemoPage = () => {
    navigate("/demo");
  };

  return (
    <div>
      <div>
        <Button buttonStyle={BUTTON_STYLE.PRIMARY}>
          <Text className={classes.buttonText}>sign up / log in</Text>
        </Button>
        <Button buttonStyle={BUTTON_STYLE.SECONDARY} onClick={gotoDemoPage}>
          <Text className={classes.buttonText} color={colors.primary50}>
            see how it works
          </Text>
        </Button>
      </div>
    </div>
  );
};

export { HomePage };
