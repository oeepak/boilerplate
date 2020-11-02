// #region Global Imports
import { useEffect } from "react";
import { AppProps } from "next/app";
import {
    StylesProvider,
    ThemeProvider as MUIThemeProvider,
} from "@material-ui/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core";
import useDarkMode from "use-dark-mode";
// #endregion Global Imports

// #region Local Imports
import lightTheme from "../../src/theme/light";
import darkTheme from "../../src/theme/dark";
import "../../public/font/inter.css";
// #endregion Local Imports

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    // For material-UI's SSR -> https://material-ui.com/guides/server-rendering/
    const mode = useDarkMode(false);
    const theme = createMuiTheme(mode.value ? darkTheme : lightTheme);

    useEffect(() => {
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement?.removeChild(jssStyles);
        }
    }, []);

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
