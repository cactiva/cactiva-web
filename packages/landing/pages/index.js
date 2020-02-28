import React, { Fragment } from "react";
import Head from "next/head";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { cactivaTheme } from "common/src/theme/cactiva";
import { ResetCSS } from "common/src/assets/css/style";
import {
  GlobalStyle,
  ContentWrapper
} from "common/src/containers/Cactiva/cactiva.style";
import Navbar from "common/src/containers/Cactiva/Navbar";
import BannerSection from "common/src/containers/Cactiva/BannerSection";
import FeatureSection from "common/src/containers/Cactiva/FeatureSection";
import VisitorSection from "common/src/containers/Cactiva/VisitorSection";
import ServiceSection from "common/src/containers/Cactiva/ServiceSection";
import Footer from "common/src/containers/Cactiva/Footer";
import PricingSection from "common/src/containers/Cactiva/PricingSection";
import TrialSection from "common/src/containers/Cactiva/TrialSection";
import TimelineSection from "common/src/containers/Cactiva/TimelineSection";
import TestimonialSection from "common/src/containers/Cactiva/TestimonialSection";
import PartnerSection from "common/src/containers/Cactiva/PartnerSection";
import { DrawerProvider } from "common/src/contexts/DrawerContext";
import FaqSection from "common/src/containers/Cactiva/FaqSection";

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
          {/* <VisitorSection /> */}
          <ServiceSection />
          <PricingSection />
          {/* <TestimonialSection /> 
          <PartnerSection />
          <TimelineSection /> 
          <FaqSection /> */}
          <TrialSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
