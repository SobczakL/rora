import { Box, Input, Text } from "@chakra-ui/react";

function UserInput({inputHeader, type, placeholderText}){
    return(
        <Box
        fontFamily='latoR'
        w='100%'
        >
            <Text
            color='lavenderGrey'
            fontSize='fs.body.sm'
            lineHeight='lh.body.sm'
            >
                {inputHeader}
            </Text>
            <Input
            placeholderText={placeholderText}
            type={type}
            fontSize='fs.body.lg'
            lineHeight='lh.body.lg'
            bg='lavenderGrey'
            color='snow'
            borderColor='lavender'
            >
            </Input>
        </Box>
    )
}

export default UserInput;