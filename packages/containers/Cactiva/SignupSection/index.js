import { observer } from "mobx-react-lite";
import PropTypes from "prop-types";
import "rc-tabs/assets/index.css";
import React, { Fragment } from "react";
import Button from "@libs/elements/Button";
import Image from "@libs/elements/Image";
import BannerObject1 from "@assets/image/cactiva/logo.png";
import Container from "@packages/components/UI/Container";
import LoginModal from "../LoginModal";
import Particles from "../Particle";
import SignupWrapper, { SignupObject } from "./signupSection.style";
import BannerObject2 from "@assets/image/header-bg.gif";

const SignupSection = observer(
  ({
    row,
    col,
    title,
    btnStyle,
    description,
    discountText,
    discountAmount,
    outlineBtnStyle,
    state,
    handleSignUp
  }) => {
    const ButtonGroup = () => (
      <Fragment>
        <Button title="FREE TRAIL" {...btnStyle} />
        <Button
          className="outlined"
          title="EXPLORE MORE"
          variant="outlined"
          {...outlineBtnStyle}
        />
      </Fragment>
    );
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
        <Button className="default" title="REGISTER" {...btnStyle} />
      </Fragment>
    );
    return (
      <SignupWrapper id="signup_section">
        <Particles />
        <Container>
          <LoginModal state={state} handleSignUp={handleSignUp} />
        </Container>
        <SignupObject>
          <div className="objectWrapper">
            <Image src={BannerObject2} alt="BannerObject2" />
          </div>
        </SignupObject>
      </SignupWrapper>
    );
  }
);

SignupSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object
};

SignupSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
    alignItems: "center"
  },
  col: {
    pr: "15px",
    pl: "15px",
    width: [1, "70%", "50%", "45%"]
  },
  title: {
    fontSize: ["22px", "34px", "30px", "55px"],
    fontWeight: "700",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: ["20px", "25px"],
    lineHeight: "1.5"
  },
  description: {
    fontSize: "16px",
    color: "#343d48cc",
    lineHeight: "1.75",
    mb: "0"
  },
  btnStyle: {
    minWidth: ["120px", "120px", "120px", "156px"],
    fontSize: ["13px", "14px"],
    fontWeight: "500",
    colors: "primaryWithBg"
  },
  outlineBtnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#5167db",
    ml: "18px"
  },
  discountAmount: {
    fontSize: "14px",
    color: "#eb4d4b",
    mb: 0,
    as: "span",
    mr: "0.4em",
    fontWeight: 700
  },
  discountText: {
    fontSize: ["13px", "14px"],
    color: "#0f2137",
    mb: 0,
    as: "span",
    fontWeight: 500
  }
};

export default SignupSection;
