import React, { useEffect } from "react";
import { AppProps } from "next/app";
import {
    StylesProvider,
    ThemeProvider as MUIThemeProvider,
} from "@material-ui/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, Theme } from "@material-ui/core";
import themes from "../../src/theme/theme";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    // For material-UI's SSR -> https://material-ui.com/guides/server-rendering/
    useEffect(() => {
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement?.removeChild(jssStyles);
        }
    }, []);

    const theme: Theme = createMuiTheme(themes);

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
