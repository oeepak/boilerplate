import { Button } from "@material-ui/core";
import useDarkMode from "use-dark-mode";
import StyledButton from "../src/comoponents/Button";

const IndexPage = (): JSX.Element => {
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
