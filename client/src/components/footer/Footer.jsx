import { Box, Text } from "@chakra-ui/react";

function Footer() {
    return (
        <Box
            bg="deepNavy"
            h="10vh"
            pb="40px"
            color="lavenderGrey"
            fontSize="11px"
            justify="center"
            align="center"
            pos="absolute"
            bottom="0"
            pt="40px"
            w="100%"
        >
            <Text w="100%">© Röra Inc. All Rights Reserved.</Text>
        </Box>
    );
}

export default Footer;
