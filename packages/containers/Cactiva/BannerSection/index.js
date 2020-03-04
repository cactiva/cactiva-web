import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@libs/elements/Box";
import Text from "@libs/elements/Text";
import Image from "@libs/elements/Image";
import Heading from "@libs/elements/Heading";
import Button from "@libs/elements/Button";
import FeatureBlock from "@packages/components/FeatureBlock";
import Container from "@packages/components/UI/Container";
import Particles from "../Particle";
import BannerWrapper, {
  DiscountLabel,
  BannerObject
} from "./bannerSection.style";
import ReactPlayer from "react-player";

import BannerObject1 from "@assets/image/cactiva/logo.png";
import BannerObject2 from "@assets/image/saas/banner/bannerObject2.png";
import VideoPreview from "@assets/video/preview.mp4";
import BannerObject3 from "@assets/image/header-bg.gif";
// import VideoPreview from "@assets/video/preview.mp4";

const BannerSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  discountText,
  discountAmount,
  outlineBtnStyle
}) => {
  const [play, setPlay] = useState(false);
  const ButtonGroup = () => (
    <Fragment>
      <Button title="Buy Now" {...btnStyle} />
      <Button
        className="outlined"
        title="Free Trial"
        variant="outlined"
        {...outlineBtnStyle}
      />
    </Fragment>
  );
  useEffect(() => {
    setTimeout(() => {
      setPlay(true);
    }, 1000);
  }, []);
  return (
    <BannerWrapper id="banner_section">
      <Particles />
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <DiscountLabel>
              <Text content="Free Trial for 7 days" {...discountAmount} />
              <Text content="on your first project " {...discountText} />
            </DiscountLabel>
            <FeatureBlock
              title={
                <Heading content="Finally, A React Visual Editor that really works" {...title} />
                
              }
              description={
                <Text
                  content="We help you visualize your react app structure, 
                  manipulate your components, import your library 
                  and finally increase your productivity."
                  {...description}
                />
              }
              // button={<ButtonGroup />}
            />
          </Box>
        </Box>
      </Container>
      <BannerObject>
        <div className="objectWrapper">
        <Image src={BannerObject1} alt="BannerObject" />
          <div className="dashboardWrapper">
            {/* <Image src={BannerObject2} alt="BannerObject1" /> */}
            <ReactPlayer
              url={VideoPreview}
              playing={play}
              loop={true}
              light={true}
              volume={0}
              muted={true}
              width={"720px"}
              height={"480px"}
              playsinline={true}
              config={{
                file: {
                  attributes: {
                    autoPlay: true,
                    muted: true
                  }
                }
              }}
              onReady={() => setTimeout(console.log("ready"), 100)}
              onPlay={() => console.log(play)}
              onStart={() => console.log("start")}
            />
            {/* <Image src={BannerObject3} alt="BannerObject3" /> */}
          </div>
        </div>
      </BannerObject>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object
};

BannerSection.defaultProps = {
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

export default BannerSection;
