import { Box, FormLabel, Input, Text } from "@chakra-ui/react";

function UserInput({inputHeader, type, placeholder, value}){
    return(
        <Box
        fontFamily='latoR'
        w='100%'
        >
            <FormLabel
            m='0'
            color='lavenderGrey'
            fontSize='fs.body.sm'
            lineHeight='lh.body.sm'
            >
                {inputHeader}
            </FormLabel>
            <Input
            placeholder={placeholder}
            value={value}
            type={type}
            fontSize='fs.body.lg'
            lineHeight='lh.body.lg'
            bg='lavenderGrey'
            color='snow'
            borderColor='lavender'
            _placeholder={{color:'lavender', fontSize:'fs.labels'}}
            >
            </Input>
        </Box>
    )
}

export default UserInput;