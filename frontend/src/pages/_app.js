import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";



const theme = {
  colors: {
    main: "#FCEFED",
  },
};

class MyApp extends App {
  componentDidMount() {
    const jssStyles = {};
  }

  render() {
    const { Component, pageProps } = this.props;
    const propsToPassToComponent = { ...pageProps };
    return (
        <ThemeProvider theme={theme}>
          <Head>
            <title>PanFam Trivia</title>
          </Head>
          <Component {...propsToPassToComponent} />
        </ThemeProvider>
    );
  }
}

export default MyApp;
