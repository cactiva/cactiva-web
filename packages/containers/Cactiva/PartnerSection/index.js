import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Box from "@libs/elements/Box";
import Text from "@libs/elements/Text";
import Heading from "@libs/elements/Heading";
import Button from "@libs/elements/Button";
import Image from "@libs/elements/Image";
import Container from "@packages/components/UI/Container";

import PartnerSectionWrapper from "./partner.style";
import Partner from "@assets/image/saas/partner.png";

const PartnerSection = ({
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea
}) => {
  return (
    <PartnerSectionWrapper>
      <Container>
        <Box {...row}>
          <Box {...col} {...imageArea}>
            <Image src={Partner} alt="Domain Image" />
          </Box>
          <Box {...col} {...textArea}>
            <Heading
              {...title}
              content="We provide some powerful react editor tools that are convenient to suit your needs."
            />
            <Text
              {...description}
              content="React is a flexible and efficient front end javascript library for building UI and one of the most popular javascript frameworks these days. Unfortunately React is not just for everyone to use easily, it requires a steep learning curve and adequate amount of programming skill.

              Cactiva arrives and offers features which will assist and help programmers who want to develop react based applications with more freedom and confidence.
              "
            />
            {/* <Box>
              <Link href="#">
                <a>
                  <Button {...button} title="LEARN MORE" />
                </a>
              </Link>
            </Box> */}
          </Box>
        </Box>
      </Container>
    </PartnerSectionWrapper>
  );
};

PartnerSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object
};

PartnerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
    alignItems: "center"
  },
  imageAreaRow: {
    flexDirection: "row-reverse"
  },
  col: {
    pr: "15px",
    pl: "15px"
  },
  textArea: {
    width: ["100%", "100%", "55%", "50%", "42%"]
  },
  imageArea: {
    width: ["100%", "100%", "45%", "50%", "58%"],
    mb: ["40px", "40px", "0", "0", "0"]
  },
  title: {
    fontSize: ["26px", "30px", "30px", "48px", "48px"],
    fontWeight: "400",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "15px",
    lineHeight: "1.5"
  },
  description: {
    fontSize: "16px",
    color: "#343d48cc",
    lineHeight: "1.75",
    mb: "33px"
  },
  button: {
    type: "button",
    fontSize: "14px",
    fontWeight: "600",
    color: "#fff",
    borderRadius: "4px",
    pl: "22px",
    pr: "22px",
    colors: "primaryWithBg"
  }
};

export default PartnerSection;
