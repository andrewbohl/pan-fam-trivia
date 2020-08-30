import React from "react";
import App from "next/app";
import Head from "next/head";
import styled, { ThemeProvider } from "styled-components";

export const theme = {
  colors: {
    background: "#3abac5",
    backgroundLighter: "#75cfd6",
    backgroundDarker: "#29848c",

    backgroundCompliment: "#c5453a",
    
  },
  
};

const StylePage = styled.div`
  background: ${theme.colors.background};
  background-compliment: ${theme.colors.backgroundCompliment};
  margin: 0rem;
`;

class MyApp extends App {
  componentDidMount() {
    const jssStyles = {};
  }

  render() {
    const { Component, pageProps } = this.props;
    const propsToPassToComponent = { ...pageProps };
    return (
      <ThemeProvider theme={theme}>
        <StylePage>
          <Head>
            <title>PanFam Trivia</title>
          </Head>
          <Component {...propsToPassToComponent} />
        </StylePage>
      </ThemeProvider>
    );
  }
}

export default MyApp;
