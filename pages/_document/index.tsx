import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet as StyledComponentSheets } from "styled-components";
import { ServerStyleSheets as MaterialUiServerStyleSheets } from "@material-ui/styles";

export default class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    <title />
                </Head>
                <body>
                    <script src="noflash.js" />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

MyDocument.getInitialProps = async ctx => {
    const styledComponentsSheet = new StyledComponentSheets();
    const materialSheets = new MaterialUiServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: App => props =>
                    styledComponentsSheet.collectStyles(
                        materialSheets.collect(<App {...props} />)
                    ),
            });
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    {styledComponentsSheet.getStyleElement()}
                    {materialSheets.getStyleElement()}
                </>
            ),
        };
    } finally {
        styledComponentsSheet.seal();
    }
};
