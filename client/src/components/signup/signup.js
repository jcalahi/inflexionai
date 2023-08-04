import PropTypes from "prop-types";
import classnames from "classnames";
import * as Dialog from "@radix-ui/react-dialog";
import classes from "./signup.module.scss";

const propTypes = {
  open: PropTypes.bool.isRequired,
};

const SignUp = ({ open, onClose }) => {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className={classes.overlay} />
        <Dialog.Content className={classes.content}>
          <Dialog.Title>HAHA</Dialog.Title>
          <Dialog.Description>ang magaling</Dialog.Description>
          <Dialog.Close asChild />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

SignUp.propTypes = propTypes;

export { SignUp };
