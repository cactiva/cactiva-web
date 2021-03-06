import React, { useContext } from "react";
import PropTypes from "prop-types";
import NavbarWrapper from "reusecore/src/elements/Navbar";
import Drawer from "reusecore/src/elements/Drawer";
import Logo from "reusecore/src/elements/UI/Logo";
import Box from "reusecore/src/elements/Box";
import HamburgMenu from "../../../components/HamburgMenu";
import Container from "../../../components/UI/Container";
import { DrawerContext } from "../../../contexts/DrawerContext";

import { MENU_ITEMS } from "../../../data/Cactiva";
import ScrollSpyMenu from "../../../components/ScrollSpyMenu";

import LogoImage from "../../../assets/image/cactiva/logo-cactiva.png";

const Navbar = ({ navbarStyle, logoStyle, row, menuWrapper }) => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: "TOGGLE"
    });
  };

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Box {...row}>
          <Logo
            href="#"
            logoSrc={LogoImage}
            title="Cactiva"
            logoStyle={logoStyle}
          />
          <Box {...menuWrapper}>
            <ScrollSpyMenu
              className="main_menu"
              menuItems={MENU_ITEMS}
              offset={-70}
            />
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#eb4d4b" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                menuItems={MENU_ITEMS}
                drawerClose={true}
                offset={-100}
              />
            </Drawer>
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object
};

Navbar.defaultProps = {
  navbarStyle: {
    className: "hosting_navbar",
    minHeight: "70px",
    display: "block"
  },
  row: {
    flexBox: true,
    alignItems: "center",
    justifyContent: [
      "space-between",
      "space-between",
      "space-between",
      "flex-start"
    ],
    width: "100%"
  },
  logoStyle: {
    maxWidth: "130px",
    mr: [0, 0, 0, "166px"]
  },
  button: {
    type: "button",
    fontSize: "13px",
    fontWeight: "600",
    color: "white",
    borderRadius: "4px",
    pl: "15px",
    pr: "15px",
    colors: "primaryWithBg",
    minHeight: "auto",
    height: `${1}`
  },
  menuWrapper: {
    flexBox: true,
    alignItems: "center"
  }
};

export default Navbar;
