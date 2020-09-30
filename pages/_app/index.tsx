// #region Global Imports
import React, { useEffect } from "react";
import { AppProps } from "next/app";
import {
    StylesProvider,
    ThemeProvider as MUIThemeProvider,
} from "@material-ui/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, Theme } from "@material-ui/core";
import useDarkMode from "use-dark-mode";
// #endregion Global Imports

// #region Local Imports
import light from "../../src/theme/light";
import dark from "../../src/theme/dark";
// #endregion Local Imports

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    // For material-UI's SSR -> https://material-ui.com/guides/server-rendering/
    useEffect(() => {
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement?.removeChild(jssStyles);
        }
    }, []);
    const darkMode = useDarkMode(false);
    const theme: Theme = createMuiTheme(darkMode.value ? light : dark);

    return (
        <StylesProvider injectFirst>
            <MUIThemeProvider theme={theme}>
                <StyledThemeProvider theme={theme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </StyledThemeProvider>
            </MUIThemeProvider>
        </StylesProvider>
    );
};

export default MyApp;
