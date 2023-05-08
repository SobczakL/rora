import { Stepper, StepIndicator, Step, StepStatus, StepIcon, Box, StepTitle } from "@chakra-ui/react"
import { useSteps } from "@chakra-ui/react";
const stops = [
    {title: 'Queen and Spadina'},
    {title: 'Queen and Spadina'},
    {title: 'Queen and Spadina'},
    {title: 'Queen and Spadina'},
    {title: 'Queen and Spadina'},
    {title: 'Queen and Spadina'},
    {title: 'Queen and Spadina'},
];

function RouteStopList(){
    const {activeStop} = useSteps({
        index: 1, 
        count: stops.length
    });
    return(
        <Stepper 
        index={activeStop} 
        orientation='vertical' 
        gap='4px'
        color='snow'
        colorScheme='red'
        size='sm'
        >
        {stops.map((stop, index) => (
            <Step 
            display='flex'
            alignItems='center'
            key={index} 
            borderRadius='10px'
            minH='60px'
            gap='16px'
            w='100%'
            px='16px'
            bg='twilight'
            >
                <StepIndicator>
                    <StepStatus 
                    complete={<StepIcon />}
                    />
                </StepIndicator>
                <Box flexShrink='0'>
                    <StepTitle
                    fontFamily='latoB'
                    fontSize='fs.body.lg'
                    lineHeight='lh.body.lg'
                    >
                        {stop.title}
                    </StepTitle>
                </Box>
            </Step>
        ))}
        </Stepper>
    )
}

export default RouteStopList;
