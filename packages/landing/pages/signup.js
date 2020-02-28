import { ResetCSS } from 'common/src/assets/css/style';
import {
  ContentWrapper,
  GlobalStyle,
} from 'common/src/containers/Cactiva/cactiva.style';
import Navbar from 'common/src/containers/Cactiva/Navbar';
import BannerSection from 'common/src/containers/Signup/BannerSection';
import Footer from 'common/src/containers/Signup/Footer';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { cactivaTheme } from 'common/src/theme/cactiva';
import { observer, useObservable } from 'mobx-react-lite';
import Head from 'next/head';
import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import api from '../../api';

export default observer(() => {
  const meta = useObservable({});
  const handleSignUp = () => {
    api.post('tes', meta);
  };
  return (
    <ThemeProvider theme={cactivaTheme}>
      <Fragment>
        <Head>
          <title>Saas | A react next landing page</title>
          <meta name="Description" content="React next landing page" />
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
          <BannerSection state={meta} handleSignUp={handleSignUp} />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
});
