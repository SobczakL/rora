import { Box, Text } from "@chakra-ui/react"

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
        w="100%"
        pt="40px"
        >
            <Text maxW='fit-content'>
            © Röra Inc. All Rights Reserved.
            </Text>
        </Box>
    )
}

export default Footer