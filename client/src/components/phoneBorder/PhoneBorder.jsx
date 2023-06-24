import { Flex, Box } from "@chakra-ui/react";
function PhoneBorder({children}){
    return(
        <Flex
        pos="relative"
        maxW="390px"
        maxH="800px"
        direction="column"
        border="20px solid black"
        borderRadius="50px"
        overflow="hidden"
        >
            <Box 
            pos="absolute"
            zIndex='1'
            w="125px"
            h="40px"
            right="32.5%"
            top="-15px"
            // right="25%"
            backgroundColor="black"
            borderRadius="20px"
            />
            {children}
        </Flex>
    )
}

export default PhoneBorder;
