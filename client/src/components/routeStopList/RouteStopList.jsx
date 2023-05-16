import { Stepper, StepIndicator, Step, StepStatus, StepIcon, Box, StepTitle } from "@chakra-ui/react"
import { useSteps } from "@chakra-ui/react";
import { useState } from "react";

function RouteStopList({ direction, data }) {

    const [stopData, setStopData] = useState(data)

    const stops = Object.values(data.itineraries).reduce((accumulator, itinerary) => {
        if (itinerary.direction_headsign === direction) {
            return [...accumulator, ...itinerary.stops];
        }
            return accumulator;
    }, []);

    const { activeStop } = useSteps({
        index: 1,
        count: stops.length
    });

    if(stops){
        console.log(stops)
    }

    return (
        <Stepper
            index={activeStop}
            orientation="vertical"
            gap="4px"
            color="snow"
            colorScheme="red"
            size="sm"
        >
            {stops.map((stop, index) => (
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
        );
}

export default RouteStopList;

