import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";
import Box from "reusecore/src/elements/Box";
import Heading from "reusecore/src/elements/Heading";
import Text from "reusecore/src/elements/Text";
import Logo from "reusecore/src/elements/UI/Logo";
import LogoImage from "../../../assets/image/cactiva/logo-cactiva.png";
import { Footer_Data } from "../../../data/Cactiva";
import { List, ListItem } from "./footer.style";

const Content = ({
  row,
  col,
  colOne,
  colTwo,
  titleStyle,
  logoStyle,
  textStyle
}) => {
  return (
    <Box className="row" {...row}>
      <Box {...colOne}>
        <Logo
          href="#"
          logoSrc={LogoImage}
          title="Hosting"
          logoStyle={logoStyle}
        />
        <Text content="RedQ.Inc" {...textStyle} />
        <Text content="+97 0267 5923" {...textStyle} />
      </Box>
      {/* End of footer logo column */}
      <Box {...colTwo}>
        {Footer_Data.map((widget, index) => (
          <Box className="col" {...col} key={`footer-widget-${index}`}>
            <Heading content={widget.title} {...titleStyle} />
            <List>
              {widget.menuItems.map((item, index) => (
                <ListItem key={`footer-list-item-${index}`}>
                  <Link href={item.url}>
                    <a className="ListItem">{item.text}</a>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Box>
      {/* End of footer List column */}
    </Box>
  );
};

// Footer style props
Content.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
  logoStyle: PropTypes.object
};

// Footer default style
Content.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px"
  },
  // Footer col one style
  colOne: {
    width: [1, "35%", "35%", "23%"],
    mt: [0, "13px"],
    mb: ["30px", 0],
    pl: ["15px", 0],
    pr: ["15px", "15px", 0]
  },
  // Footer col two style
  colTwo: {
    width: ["100%", "65%", "65%", "77%"],
    flexBox: true,
    flexWrap: "wrap"
  },
  // Footer col default style
  col: {
    width: ["100%", "50%", "50%", "25%"],
    pl: "15px",
    pr: "15px",
    mb: "30px"
  },
  // widget title default style
  titleStyle: {
    color: "#343d48",
    fontSize: "16px",
    fontWeight: "700",
    mb: "30px"
  },
  // Default logo size
  logoStyle: {
    width: "100px",
    mb: "15px"
  },
  // widget text default style
  textStyle: {
    color: "#0f2137",
    fontSize: "16px",
    mb: "10px"
  }
};

export default Content;
