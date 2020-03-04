import { observer } from "mobx-react-lite";
import PropTypes from "prop-types";
import Tabs, { TabPane } from "rc-tabs";
import "rc-tabs/assets/index.css";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";
import TabContent from "rc-tabs/lib/TabContent";
import React, { Fragment } from "react";
import Box from "@libs/elements/Box";
import Button from "@libs/elements/Button";
import CheckBox from "@libs/elements/Checkbox/index";
import Heading from "@libs/elements/Heading";
import Input from "@libs/elements/Input";
import Text from "@libs/elements/Text";
import LoginModalWrapper from "./loginModal.style";

const LoginModal = observer(
  ({
    row,
    col,
    btnStyle,
    logoStyle,
    titleStyle,
    contentWrapper,
    outlineBtnStyle,
    descriptionStyle,
    googleButtonStyle,
    state,
    handleSignUp
  }) => {
    const LoginButtonGroup = () => (
      <Fragment>
        <Button className="default" title="LOGIN" {...btnStyle} />
        <Button
          title="Forget Password"
          variant="textButton"
          {...outlineBtnStyle}
        />
      </Fragment>
    );
    const SignupButtonGroup = () => (
      <Fragment>
        <Button
          className="default"
          title="REGISTER"
          {...btnStyle}
          onClick={handleSignUp}
        />
      </Fragment>
    );
    const handleInput = (path, value) => {
      state[path] = value;
    };
    return (
      <LoginModalWrapper>
        <Box className="row" {...row}>
          <Box className="col tabCol" {...col}>
            <Box {...contentWrapper}>
              <Tabs
                defaultActiveKey="registerForm"
                renderTabBar={() => <ScrollableInkTabBar />}
                renderTabContent={() => <TabContent />}
              >
               <TabPane tab="REGISTER" key="registerForm">
                  <Heading content="Join now !" {...titleStyle} />
                  <Text
                    content="Signup to Start Donate."
                    {...descriptionStyle}
                  />
                  {/* <Button
                  icon={<Image src={GoogleLogo} alt="Google Icon" />}
                  title="Sign up with Google"
                  iconPosition="left"
                  className="google-login__btn"
                  {...googleButtonStyle}
                /> */}
                  <Input
                    isMaterial
                    label="Full Name"
                    onChange={value => handleInput("full_name", value)}
                  />
                  <Input inputType="email" isMaterial label="Email Address" />
                  <Input
                    inputType="password"
                    isMaterial
                    label="Password"
                    passwordShowHide
                  />
                  <div>
                    <SignupButtonGroup />
                  </div>
                </TabPane>
              </Tabs>
            </Box>
          </Box>
        </Box>
      </LoginModalWrapper>
    );
  }
);

// LoginModal style props
LoginModal.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  logoStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  hintTextStyle: PropTypes.object,
  contentWrapper: PropTypes.object,
  descriptionStyle: PropTypes.object,
  googleButtonStyle: PropTypes.object
};

// LoginModal default style
LoginModal.defaultProps = {
  // Team member row default style
  row: {
    flexBox: true,
    flexWrap: "wrap"
  },
  // Team member col default style
  col: {
    width: [1, 1 / 2]
  },
  // Default logo size
  logoStyle: {
    width: "128px",
    height: "auto",
    ml: "15px"
  },
  // Title default style
  titleStyle: {
    fontSize: ["22px", "36px", "50px"],
    fontWeight: "400",
    color: "#20201D",
    letterSpacing: "-0.025em",
    mt: "35px",
    mb: "10px"
  },
  // Description default style
  descriptionStyle: {
    color: "rgba(52, 61, 72, 0.8)",
    fontSize: "15px",
    lineHeight: "26px",
    letterSpacing: "-0.025em",
    mb: "23px",
    ml: "1px"
  },
  // Content wrapper style
  contentWrapper: {
    pt: ["32px", "56px"],
    pl: ["17px", "32px", "38px", "40px", "56px"],
    pr: "32px",
    pb: ["32px", "56px"]
  },
  // Default button style
  btnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500"
  },
  // Outline button outline style
  outlineBtnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#10ac84"
  },
  // Google button style
  googleButtonStyle: {
    bg: "#ffffff",
    color: "#343D48"
  }
};

export default LoginModal;
