import { Flex, Box } from "@chakra-ui/react";

function PhoneBorder({ children }) {
    return (
        <Flex
            pos="relative"
            w="350px"
            h="700px"
            direction="column"
            border="20px solid black"
            borderRadius="50px"
        >
            <Box
                pos="absolute"
                zIndex="1"
                w="125px"
                h="40px"
                right="30%"
                top="-15px"
                backgroundColor="black"
                borderRadius="20px"
            />
            <Flex
                pos="relative"
                h="100%"
                direction="column"
            >
                {children}
            </Flex>
        </Flex>
    );
}

export default PhoneBorder;
