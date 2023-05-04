import { Box, Center, Text } from "@chakra-ui/react"

function MainHeader({userName, }) {
    return (
        <Center
        position='absolute'
        top='125px'
        maxW='100%'
        mx='24px'
        >
            <Box
            borderRadius='20px'
            border='2px'
            boxShadow='inset 1px 1px 4px lavender'
            color='lavender'
            align='center'
            py='8px'
            px='16px'
            >
                <Text
                color='snow'
                fontFamily='latoB'
                fontSize='fs.header'
                >
                    Hi, {userName}! Where are you off tö?
                </Text>
            </Box>
        </Center>
    )
}

export default MainHeader