import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal, createGlobalStyle }  from 'styled-components';


export const theme = {
    colors: {
      background: "#3abac5",
      backgroundLighter: "#75cfd6",
      backgroundDarker: "#29848c",
  
      backgroundCompliment: "#c5453a",
      
    },
    
  };

const StylePage = styled.div`
    background: ${theme.offwhite};
    color: ${theme.black};
`;

const Inner = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
`;


export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 10px;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
    }
    a {
        text-decoration: none;
    }
`;

export default class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StylePage>
                    <GlobalStyle />
                    <Inner>{this.props.children}</Inner>
                </StylePage>
            </ThemeProvider>
        )
    }
}