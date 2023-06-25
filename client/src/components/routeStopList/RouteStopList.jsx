import {
    Stepper,
    StepIndicator,
    Step,
    StepStatus,
    StepIcon,
    Box,
    StepTitle,
} from "@chakra-ui/react";
import { useSteps } from "@chakra-ui/react";

function RouteStopList({ data }) {
    const { activeStop } = useSteps({
        index: 1,
        count: data.length,
    });

    return (
        <Box
        overflowY="scroll"
        >
        <Stepper
            index={activeStop}
            orientation="vertical"
            gap="4px"
            color="snow"
            colorScheme="red"
            size="sm"
        >
            {data.map((stop, index) => (
                <Step
                    display="flex"
                    alignItems="center"
                    key={index}
                    borderRadius="10px"
                    minH="60px"
                    gap="16px"
                    w="100%"
                    px="16px"
                    bg="twilight"
                >
                    <StepIndicator>
                        <StepStatus complete={<StepIcon />} />
                    </StepIndicator>
                    <Box flexShrink="0">
                        <StepTitle
                            fontFamily="latoB"
                            fontSize="fs.body.lg"
                            lineHeight="lh.body.lg"
                        >
                            {stop.stop_name}
                        </StepTitle>
                    </Box>
                </Step>
            ))}
        </Stepper>
        </Box>
    );
}

export default RouteStopList;
