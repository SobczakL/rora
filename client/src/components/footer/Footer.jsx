import { Box } from "@chakra-ui/react"

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
            © Röra Inc. All Rights Reserved.
        </Box>
    )
}

export default Footer