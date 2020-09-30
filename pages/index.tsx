import React from "react";
import useDarkMode from "use-dark-mode";
import { Button, Typography } from "@material-ui/core";

const IndexPage = () => {
    const darkMode = useDarkMode(false);

    return (
        <>
            <Button onClick={darkMode.toggle}>toggle theme</Button>
            <Typography color="error">blue is dark</Typography>
        </>
    );
};

export default IndexPage;
