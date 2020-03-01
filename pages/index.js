import { ResetCSS } from "@assets/css/style";
import BannerSection from "@packages/containers/Cactiva/BannerSection";
import SignupSection from "@packages/containers/Cactiva/SignupSection";
import {
  ContentWrapper,
  GlobalStyle
} from "@packages/containers/Cactiva/cactiva.style";
import FeatureSection from "@packages/containers/Cactiva/FeatureSection";
import Footer from "@packages/containers/Cactiva/Footer";
import Navbar from "@packages/containers/Cactiva/Navbar";
import PricingSection from "@packages/containers/Cactiva/PricingSection";
import ServiceSection from "@packages/containers/Cactiva/ServiceSection";
import TrialSection from "@packages/containers/Cactiva/TrialSection";
import { DrawerProvider } from "@packages/contexts/DrawerContext";
import { cactivaTheme } from "@packages/theme/cactiva";
import Head from "next/head";
import React, { Fragment } from "react";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";

export default () => {
  return (
    <ThemeProvider theme={cactivaTheme}>
      <Fragment>
        <Head>
          <title>Cactiva Website</title>
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1"
          />
          <meta name="Description" content="Cactiva company profile" />
          <meta name="theme-color" content="#ec5555" />
          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <FeatureSection />
          <ServiceSection />
          <PricingSection />
          <TrialSection />
          <SignupSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
