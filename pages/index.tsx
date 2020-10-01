import React from "react";
import { Button } from "@material-ui/core";
import useDarkMode from "use-dark-mode";
import StyledButton from "../src/comoponents/Button";

const IndexPage = () => {
    const mode = useDarkMode();
    return (
        <>
            <div>
                <Button
                    onClick={mode.enable}
                    variant="contained"
                    color="secondary"
                >
                    On
                </Button>
                <StyledButton onClick={mode.disable}>Off</StyledButton>
            </div>
        </>
    );
};

export default IndexPage;
